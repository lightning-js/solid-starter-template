import { render, Canvas, View } from '@lightningjs/solid';
import coreExtensionModuleUrl from '../src/AppCoreExtensions.js?importChunkUrl';

const RenderOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  threadXCoreWorkerUrl: undefined,
  rootId: 'storybook-root',
  appWidth: 800,
  appHeight: 600
  // deviceLogicalPixelRatio: 1
};

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
    (Story, ...args) => {
      const solidRoot = document.createElement("div");
      RenderOptions.rootId = solidRoot;
      render(() => <Canvas options={RenderOptions}>
        <View>
          <Story />
        </View>
      </Canvas>)
      return solidRoot;
    }
  ]
};

export default preview;
