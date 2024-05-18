import { render, Config } from '@lightningjs/solid';
import { HashRouter, Route } from "@solidjs/router";
import App from './pages/App';
import HelloWorld from './pages/HelloWorld';
import TextPage from './pages/Text';
import ButtonsPage from './pages/ButtonsPage';
import NotFound from './pages/NotFound';

import coreExtensionModuleUrl from './AppCoreExtensions.js?importChunkUrl';

Config.debug = true;
Config.fontSettings.fontFamily = 'Ubuntu';
Config.fontSettings.color = 0xffffffff;
Config.rendererOptions = {
  coreExtensionModule: coreExtensionModuleUrl,
  numImageWorkers: 2,
  // Set the resolution based on window height
  // 720p = 0.666667, 1080p = 1, 1440p = 1.5, 2160p = 2
  deviceLogicalPixelRatio: window.innerHeight / 1080,
  enableInspector: true,
  // Increase to preload images coming from offscreen
  boundsMargin: 20,
};

render(() =>  (
  <HashRouter root={App}>
    <Route path="/" component={HelloWorld} />
    <Route path="/text" component={TextPage} />
    <Route path="/buttons" component={ButtonsPage} />
    <Route path="/*all" component={NotFound} />
  </HashRouter>
));
