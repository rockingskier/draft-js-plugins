import React, { Component } from 'react';
import styles from './styles.css';

import Container from '../../shared/Container';
import Heading from '../../shared/Heading';
import SocialBar from '../../shared/SocialBar';
import NavBar from '../../shared/NavBar';
import Separator from '../../shared/Separator';
import Code from '../../shared/Code';
import SimpleEmojiEditor from './SimpleEmojiEditor';
import AlternateContainer from '../../shared/AlternateContainer';

import gettingStarted from '!!../../../loaders/prism-loader?language=javascript!./gettingStarted'; // eslint-disable-line import/no-unresolved

import simpleExampleCode from '!!../../../loaders/prism-loader?language=javascript!./SimpleEmojiEditor'; // eslint-disable-line import/no-unresolved
import simpleEditorStylesCode from '!!../../../loaders/prism-loader?language=css!./SimpleEmojiEditor/editorStyles.css'; // eslint-disable-line import/no-unresolved
import webpackConfig from '!!../../../loaders/prism-loader?language=javascript!./webpackConfig'; // eslint-disable-line import/no-unresolved
import webpackImport from '!!../../../loaders/prism-loader?language=javascript!./webpackImport'; // eslint-disable-line import/no-unresolved
import ExternalLink from '../../shared/Link';
import InlineCode from '../../shared/InlineCode';

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Separator />
        <Container>
          <Heading level={2}>Emoji</Heading>
          <p>
            Consistent Emoji display across all platforms, independent of the host system.
          </p>
          <Heading level={3}>Attribution to EmojiOne</Heading>
          <p>
            The beautiful Emoji art used in this plugin is provided by the <ExternalLink href="http://emojione.com/">Emoji One</ExternalLink> project.
            Personal or non-commercial use of the emojis do not require attribution. For the rights to use our emojis still for free in commercial projects proper attribution in form of a link is required. More here: <ExternalLink href="http://emojione.com/licensing">http://emojione.com/licensing</ExternalLink>.
          </p>
          <Heading level={3}>Implementation</Heading>
          <p>
            Emoji unicode characters are wrapped in a span, hidden, and displayed instead through
            a background image. This creates consistency across all platforms while maintaining
            natural copy/pasting functionality.
          </p>
          <Heading level={3}>Usage</Heading>
          <p>
            To use simply type <code>:</code> which will show an autocomplete with matching emojis.
          </p>
        </Container>
        <AlternateContainer>
          <Heading level={2}>Getting Started</Heading>
          <Code code="npm install draft-js-plugins-editor --save" />
          <Code code="npm install draft-js-emoji-plugin --save" />
          <Code code={gettingStarted} name="gettingStarted.js" />
          <Heading level={3}>Importing the default styles</Heading>
          <p>
            The plugin ships with a default styling available at this location in the installed package:
            &nbsp;
            <InlineCode code={'node_modules/draft-js-emoji-plugin/lib/plugin.css'} />
          </p>
          <Heading level={4}>Webpack Usage</Heading>
          <ul className={styles.list}>
            <li className={styles.listEntry}>
              1. Install Webpack loaders:
              &nbsp;
              <InlineCode code={'npm i style-loader css-loader --save-dev'} />
            </li>
            <li className={styles.listEntry}>
              2. Add the below section to Webpack config (if your config already has a loaders array, simply add the below loader object to your existing list.
              <Code code={webpackConfig} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              3. Add the below import line to your component to tell Webpack to inject the style to your component.
              <Code code={webpackImport} className={styles.guideCodeBlock} />
            </li>
            <li className={styles.listEntry}>
              4. Restart Webpack.
            </li>
          </ul>
          <Heading level={4}>Browserify Usage</Heading>
          <p>
            Please help, by submiting a Pull Request to the <ExternalLink href="https://github.com/draft-js-plugins/draft-js-plugins/blob/master/docs/client/components/pages/Emoji/index.js">documentation</ExternalLink>.
          </p>
        </AlternateContainer>
        <Container>
          <Heading level={2}>Configuration Parameters</Heading>
          <div className={styles.param}>
            <span className={styles.paramName}>theme</span>
            <span>Object of CSS classes with the following keys.</span>
            <div className={styles.subParams}>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emoji:</span>
                CSS class for the emoji wrapper.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiCharacter:</span>
                CSS class for the emoji wrapper. This should have opacity 0 to
                hide the Emoji rendering of the native platform.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSuggestions:</span>
                CSS class for suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSuggestionsEntry:</span>
                CSS class for an entry in the suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSuggestionsEntryFocused:</span>
                CSS class for the focused entry in the suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSuggestionsEntryText:</span>
                CSS class for an entry’s text in the suggestions component.
              </div>
              <div className={styles.subParam}>
                <span className={styles.subParamName}>emojiSuggestionsEntryAvatar:</span>
                CSS class for an entry’s avatar image in the suggestions component.
              </div>
            </div>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>positionSuggestions</span>
            <span>The function can be used to manipulate the position of the popover containing the suggestions. It receives one object as arguments containing the visible rectangle surrounding the decorated search string including the colon. In addition the object contains prevProps, prevState, state & props. An object should be returned which can contain all sorts of styles. The defined properties will be applied as inline-styles.</span>
          </div>
          <div className={styles.param}>
            <span className={styles.paramName}>imagePath</span>
            <span>The Emojis are displayed using SVGs. The full path is constructed of multiple parts like this: {'`${imagePath}${unicode}.svg${cacheBustParam}`'}. The default imagePath is: '//cdn.jsdelivr.net/emojione/assets/svg/', but can be overwritten with this config.</span>
          </div>
          <Heading level={3}>EmojiSuggestions</Heading>
          <div>
            The EmojiSuggestions component is part of the plugin and should placed somewhere in the
            JSX after the Editor. It takes the following props:
            <div className={styles.param}>
              <span className={styles.paramName}>onSearchChange</span>
              <span>A callback which is triggered whenever the search term changes. The first argument is an object which constains the search term in the property value.</span>
            </div>
            <div className={styles.param}>
              <span className={styles.paramName}>onOpen</span>
              <span>A callback which is triggered whenever the suggestions popover opens.</span>
            </div>
            <div className={styles.param}>
              <span className={styles.paramName}>onClose</span>
              <span>A callback which is triggered whenever the suggestions popover closes.</span>
            </div>
          </div>
        </Container>
        <Container>
          <Heading level={2}>Simple Emoji Example</Heading>
          <SimpleEmojiEditor />
          <Code code={simpleExampleCode} name="SimpleEmojiEditor.js" />
          <Code code={simpleEditorStylesCode} name="editorStyles.js" />
        </Container>
        <SocialBar />
      </div>
    );
  }
}
