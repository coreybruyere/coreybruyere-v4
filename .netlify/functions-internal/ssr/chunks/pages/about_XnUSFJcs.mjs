import { c as createAstro, d as createComponent, r as renderTemplate, g as renderComponent, h as renderHead, e as addAttribute, f as renderSlot, m as maybeRenderHead } from '../astro_DbEgYc9H.mjs';
import 'kleur/colors';
import { $ as $$BaseHead, a as $$Header, b as $$Footer } from './_slug__BU3iJQUY.mjs';
/* empty css                          */

const $$Astro$1 = createAstro("https://example.com");
const $$Page = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Page;
  const { title, description, pubDate, updatedDate, heroImage } = Astro2.props;
  return renderTemplate`<html lang="en" data-astro-cid-qo5xhe7c> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description, "data-astro-cid-qo5xhe7c": true })}${renderHead()}</head> <body data-astro-cid-qo5xhe7c> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-qo5xhe7c": true })} <main data-astro-cid-qo5xhe7c> <article data-astro-cid-qo5xhe7c> <div class="hero-image" data-astro-cid-qo5xhe7c> ${heroImage && renderTemplate`<img${addAttribute(1020, "width")}${addAttribute(510, "height")}${addAttribute(heroImage, "src")} alt="" data-astro-cid-qo5xhe7c>`} </div> <div class="prose" data-astro-cid-qo5xhe7c> <div class="title" data-astro-cid-qo5xhe7c> <h1 data-astro-cid-qo5xhe7c>${title}</h1> <hr data-astro-cid-qo5xhe7c> </div> ${renderSlot($$result, $$slots["default"])} </div> </article> </main> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-qo5xhe7c": true })} </body></html>`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/src/layouts/Page.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Page, { "title": "About Me", "description": "Lorem ipsum dolor sit amet", "pubDate": /* @__PURE__ */ new Date("August 08 2021"), "heroImage": "/blog-placeholder-about.jpg" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Vitae ultricies leo
    integer malesuada nunc vel risus commodo viverra. Adipiscing enim eu turpis
    egestas pretium. Euismod elementum nisi quis eleifend quam adipiscing. In
    hac habitasse platea dictumst vestibulum. Sagittis purus sit amet volutpat.
    Netus et malesuada fames ac turpis egestas. Eget magna fermentum iaculis eu
    non diam phasellus vestibulum lorem. Varius sit amet mattis vulputate enim.
    Habitasse platea dictumst quisque sagittis. Integer quis auctor elit sed
    vulputate mi. Dictumst quisque sagittis purus sit amet.
</p> <p>
Morbi tristique senectus et netus. Id semper risus in hendrerit gravida
    rutrum quisque non tellus. Habitasse platea dictumst quisque sagittis purus
    sit amet. Tellus molestie nunc non blandit massa. Cursus vitae congue mauris
    rhoncus. Accumsan tortor posuere ac ut. Fringilla urna porttitor rhoncus
    dolor. Elit ullamcorper dignissim cras tincidunt lobortis. In cursus turpis
    massa tincidunt dui ut ornare lectus. Integer feugiat scelerisque varius
    morbi enim nunc. Bibendum neque egestas congue quisque egestas diam. Cras
    ornare arcu dui vivamus arcu felis bibendum. Dignissim suspendisse in est
    ante in nibh mauris. Sed tempus urna et pharetra pharetra massa massa
    ultricies mi.
</p> <p>
Mollis nunc sed id semper risus in. Convallis a cras semper auctor neque.
    Diam sit amet nisl suscipit. Lacus viverra vitae congue eu consequat ac
    felis donec. Egestas integer eget aliquet nibh praesent tristique magna sit
    amet. Eget magna fermentum iaculis eu non diam. In vitae turpis massa sed
    elementum. Tristique et egestas quis ipsum suspendisse ultrices. Eget lorem
    dolor sed viverra ipsum. Vel turpis nunc eget lorem dolor sed viverra.
    Posuere ac ut consequat semper viverra nam. Laoreet suspendisse interdum
    consectetur libero id faucibus. Diam phasellus vestibulum lorem sed risus
    ultricies tristique. Rhoncus dolor purus non enim praesent elementum
    facilisis. Ultrices tincidunt arcu non sodales neque. Tempus egestas sed sed
    risus pretium quam vulputate. Viverra suspendisse potenti nullam ac tortor
    vitae purus faucibus ornare. Fringilla urna porttitor rhoncus dolor purus
    non. Amet dictum sit amet justo donec enim.
</p> <p>
Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Tortor posuere ac
    ut consequat semper viverra. Tellus mauris a diam maecenas sed enim ut sem
    viverra. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Arcu
    ac tortor dignissim convallis aenean et tortor at. Curabitur gravida arcu ac
    tortor dignissim convallis aenean et tortor. Egestas tellus rutrum tellus
    pellentesque eu. Fusce ut placerat orci nulla pellentesque dignissim enim
    sit amet. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam.
    Id donec ultrices tincidunt arcu. Id cursus metus aliquam eleifend mi.
</p> <p>
Tempus quam pellentesque nec nam aliquam sem. Risus at ultrices mi tempus
    imperdiet. Id porta nibh venenatis cras sed felis eget velit. Ipsum a arcu
    cursus vitae. Facilisis magna etiam tempor orci eu lobortis elementum.
    Tincidunt dui ut ornare lectus sit. Quisque non tellus orci ac. Blandit
    libero volutpat sed cras. Nec tincidunt praesent semper feugiat nibh sed
    pulvinar proin gravida. Egestas integer eget aliquet nibh praesent tristique
    magna.
</p> ` })}`;
}, "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/about.astro", void 0);

const $$file = "/Users/coreybruyere/dev/coreybruyere-v4/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
