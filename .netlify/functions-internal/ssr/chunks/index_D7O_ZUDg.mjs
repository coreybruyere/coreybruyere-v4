export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_DAYVPSPP.mjs').then(n => n.i);

export { page };
