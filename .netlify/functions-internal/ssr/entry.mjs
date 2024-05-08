import { renderers } from './renderers.mjs';
import { manifest } from './manifest_74tWaH0X.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_LHVamApV.mjs');
const _page1 = () => import('./chunks/about_BTNm7lxV.mjs');
const _page2 = () => import('./chunks/_slug__BpGOf6uI.mjs');
const _page3 = () => import('./chunks/index_D7O_ZUDg.mjs');
const _page4 = () => import('./chunks/posts_D2mfO_YV.mjs');
const _page5 = () => import('./chunks/rss_i0ozRFVg.mjs');
const _page6 = () => import('./chunks/index_CsZA4paE.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/partials/posts.astro", _page4],
    ["src/pages/rss.xml.js", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "0060b926-ed00-485d-8128-77a9806bb057"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
