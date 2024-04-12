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
  // deviceLogicalPixelRatio: 1
};

render(() =>  (
  <HashRouter root={App}>
    <Route path="/" component={HelloWorld} />
    <Route path="/text" component={TextPage} />
    <Route path="/buttons" component={ButtonsPage} />
    <Route path="/*all" component={NotFound} />
  </HashRouter>
));
