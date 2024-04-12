import { render } from '@lightningjs/solid';
import { useFocusManager } from '@lightningjs/solid-primitives';
import coreExtensionModuleUrl from '../src/AppCoreExtensions.js?importChunkUrl';

const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: undefined,
  rootId: 'storybook-root',
  appWidth: 800,
  appHeight: 600
  // deviceLogicalPixelRatio: 1
};
let dispose;
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    Story => {
      const solidRoot = document.createElement('div');
      // teardown previous render (cleans up keyhandling)
      dispose && dispose();
      
      render(() => {
        useFocusManager();
        return <Story />;
      }, solidRoot).then(d => {
        dispose = d.dispose;
      });
      return solidRoot;
    }
  ]
};

export default preview;
