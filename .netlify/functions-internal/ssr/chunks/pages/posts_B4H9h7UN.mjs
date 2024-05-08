import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent } from '../astro_DbEgYc9H.mjs';
import 'kleur/colors';
import { $ as $$ContentfulPosts } from './index_DAYVPSPP.mjs';
import { P as POSTS_PER_PAGE_MAX, f as POSTS_PER_PAGE_MIN } from './_slug__BU3iJQUY.mjs';

const $$Astro = createAstro("https://example.com");
const partial = true;
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const { pathname } = Astro2.url;
  const isBlogPath = pathname === "/blog";
  return renderTemplate`${renderComponent($$result, "ContentfulPosts", $$ContentfulPosts, { "postsPerPage": isBlogPath ? POSTS_PER_PAGE_MAX : POSTS_PER_PAGE_MIN })}`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/partials/posts.astro", void 0);

const $$file = "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/partials/posts.astro";
const $$url = "/partials/posts";

export { $$Posts as default, $$file as file, partial, $$url as url };
