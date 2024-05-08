import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, g as renderComponent, h as renderHead, u as unescapeHTML, l as Fragment } from '../astro_DbEgYc9H.mjs';
import 'kleur/colors';
import { c as contentfulClient, d as css, P as POSTS_PER_PAGE_MAX, $ as $$BaseHead, a as $$Header, b as $$Footer, S as SITE_TITLE, e as SITE_DESCRIPTION, f as POSTS_PER_PAGE_MIN } from './_slug__BU3iJQUY.mjs';
import $$Posts from './posts_B4H9h7UN.mjs';
/* empty css                          */
import { bundledLanguages } from 'shiki/langs';
import { createShikiHighlighter } from '@astrojs/markdown-remark';
import 'clsx';

const $$Astro$4 = createAstro("https://example.com");
const contentfulEntries = await contentfulClient.getEntries({
  content_type: "post"
});
const contentfulPosts = contentfulEntries.items.map((item) => {
  const { title, slug, body, heroImage, publishDate } = item.fields;
  return {
    title,
    slug,
    body,
    heroImage,
    publishDate: new Date(publishDate).toLocaleDateString()
  };
});
const contentfulPostsLength = contentfulPosts.length;
const $$ContentfulPosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ContentfulPosts;
  const page = Astro2.url.searchParams.get("page") || "1";
  const {
    posts = contentfulPosts,
    pageParam = parseInt(page),
    postsPerPage = POSTS_PER_PAGE_MAX
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <!-- <Debug hi={posts} /> --> <ul> ${posts.slice((pageParam - 1) * postsPerPage, pageParam * postsPerPage).map((post) => renderTemplate`<li${addAttribute(css({
    mb: 4,
    color: "primary"
  }), "class")}> <a${addAttribute(`blog/${post.slug}`, "href")}>
Title:${post.title}, Date: ${post.publishDate}, Slug: ${post.slug} </a> </li>`)} </ul> <!-- {
    posts.slice((page - 1) * 2, page * 2).map((post: any) => (
      <div>
        Title:{post.title}, Date: {post.publishDate}, Slug: {post.slug}
      </div>
    ))
  } --> </div>`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/src/components/ContentfulPosts.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$1;
  Astro2.url;
  return renderTemplate`<html lang="en" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-5tznm7mj": true })} <main data-astro-cid-5tznm7mj> <section data-astro-cid-5tznm7mj> <h2 data-astro-cid-5tznm7mj>Contentful Posts:</h2> ${renderComponent($$result, "Posts", $$Posts, { "data-astro-cid-5tznm7mj": true })} <!-- {
          postsContentful && (
            <ul>
              {postsContentful.map((post) => (
                <li>
                  Title:{post.title}, Date: {post.publishDate}, Slug:{" "}
                  {post.slug}
                </li>
              ))}
            </ul>
          )
        } --> </section> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-5tznm7mj": true })} </body></html>`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/blog/index.astro", void 0);

const $$file$1 = "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/blog/index.astro";
const $$url$1 = "/blog";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const cachedHighlighters = /* @__PURE__ */ new Map();
function getCachedHighlighter(opts) {
  const key = JSON.stringify(opts, Object.keys(opts).sort());
  if (cachedHighlighters.has(key)) {
    return cachedHighlighters.get(key);
  }
  const highlighter = createShikiHighlighter(opts);
  cachedHighlighters.set(key, highlighter);
  return highlighter;
}

const $$Astro$2 = createAstro("https://example.com");
const $$Code = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Code;
  const {
    code,
    lang = "plaintext",
    theme = "github-dark",
    themes = {},
    wrap = false,
    inline = false,
    ...rest
  } = Astro2.props;
  if (typeof lang === "object") {
    if (lang.id) {
      lang.name = lang.id;
    }
    if (lang.grammar) {
      Object.assign(lang, lang.grammar);
    }
  }
  const highlighter = await getCachedHighlighter({
    langs: [
      typeof lang === "string" ? Object.keys(bundledLanguages).includes(lang) ? lang : "plaintext" : lang
    ],
    theme,
    themes,
    wrap
  });
  const html = highlighter.highlight(code, typeof lang === "string" ? lang : lang.name, {
    inline,
    attributes: rest
  });
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(html)}` })}`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/node_modules/astro/components/Code.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$Debug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Debug;
  const key = Object.keys(Astro2.props)[0];
  const value = Astro2.props[key];
  return renderTemplate`${maybeRenderHead()}<div class="astro-debug"> <div class="astro-debug-header"> <h2 class="astro-debug-title"> <span class="astro-debug-label">Debug</span> <span class="astro-debug-name">"${key}"</span> </h2> </div> ${renderComponent($$result, "Code", $$Code, { "code": JSON.stringify(value, null, 2) })} </div> <style>
	.astro-debug {
		font-size: 14px;
		padding: 1rem 1.5rem;
		background: white;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	.astro-debug-header,
	pre.astro-code {
		margin: -1rem -1.5rem 1rem;
		padding: 0.25rem 0.75rem;
	}

	.astro-debug-header {
		background: #ff1639;
		border-radius: 4px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}

	.astro-debug-title {
		font-size: 1em;
		color: white;
		margin: 0.5em 0;
	}

	.astro-debug-label {
		font-weight: bold;
		text-transform: uppercase;
		margin-right: 0.75em;
	}

	pre.astro-code {
		border: 1px solid #eee;
		padding: 1rem 0.75rem;
		border-radius: 4px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
		font-size: 14px;
	}
</style>`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/node_modules/astro/components/Debug.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const calculatePagination = (totalResults, maxItemsPerPage = POSTS_PER_PAGE_MIN) => {
    let totalPages = Math.ceil(totalResults / maxItemsPerPage);
    return totalPages;
  };
  const createPaginationArray = (number) => {
    let array = [];
    for (let i = 1; i <= number; i++) {
      array.push(i);
    }
    return array;
  };
  const paginationLength = createPaginationArray(
    calculatePagination(contentfulPostsLength)
  );
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION })}${renderHead()}</head> <body> ${renderComponent($$result, "Debug", $$Debug, { "hi": contentfulPostsLength })} ${renderComponent($$result, "Header", $$Header, {})} <main> <h1>🧑‍🚀 Hello, Astronaut!</h1> <!-- <h2>Contentful Posts:</h2>
      {
        postsContentful && (
          <ul>
            {postsContentful.map((post) => (
              <li>
                <a href={\`blog/\${post.slug}\`}>
                  Title:{post.title}, Date: {post.publishDate}, Slug:{" "}
                  {post.slug}
                </a>
              </li>
            ))}
          </ul>
        )
      } --> <hr style="margin: 40px">  <h2${addAttribute(css({
    fontSize: 32,
    width: "full",
    justifyContent: "space-between"
  }), "class")}>
HTMX Testing Section
</h2> <div id="contents" class="mt-3 p-3 border-2 rounded-xl">
ds
${renderComponent($$result, "Posts", $$Posts, {})} </div> <div>Pagination: (Convert into component)</div> ${paginationLength.map((page) => renderTemplate`<button${addAttribute(css({
    fontSize: 16,
    background: "gray",
    mx: 1,
    padding: 2,
    justifyContent: "space-between",
    cursor: "pointer"
  }), "class")}${addAttribute(`/partials/posts?page=${page}`, "hx-get")} hx-target="#contents"> ${page} </button>`)} <!-- <div id="contents"></div> --> <hr style="margin: 40px"> <!-- <p>
        Welcome to the official <a href="https://astro.build/">Astro</a> blog starter
        template. This template serves as a lightweight, minimally-styled starting
        point for anyone looking to build a personal website, blog, or portfolio
        with Astro.
      </p>
      <p>
        This template comes with a few integrations already configured in your
        <code>astro.config.mjs</code> file. You can customize your setup with
        <a href="https://astro.build/integrations">Astro Integrations</a> to add
        tools like Tailwind, React, or Vue to your project.
      </p>
      <p>Here are a few ideas on how to get started with the template:</p>
      <ul>
        <li>Edit this page in <code>src/pages/index.astro</code></li>
        <li>
          Edit the site header items in <code>src/components/Header.astro</code>
        </li>
        <li>
          Add your name to the footer in <code>src/components/Footer.astro</code
          >
        </li>
        <li>
          Check out the included blog posts in <code>src/pages/blog/</code>
        </li>
        <li>
          Customize the blog post page layout in <code
            >src/layouts/BlogPost.astro</code
          >
        </li>
      </ul>
      <p>
        Have fun! If you get stuck, remember to <a
          href="https://docs.astro.build/"
          >read the docs
        </a> or <a href="https://astro.build/chat">join us on Discord</a> to ask
        questions.
      </p>
      <p>
        Looking for a blog template with a bit more personality? Check out <a
          href="https://github.com/Charca/astro-blog-template"
          >astro-blog-template
        </a> by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.
      </p> --> </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/index.astro", void 0);

const $$file = "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContentfulPosts as $, index as a, index$1 as i };
