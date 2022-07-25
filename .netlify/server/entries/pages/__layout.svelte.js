var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d4aa807a = require("../../_app/immutable/chunks/index-d4aa807a.js");
const global = "";
const nav_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "nav.svelte-1n9rb67{display:flex;flex-direction:column;margin:1rem 0;text-align:center}a.svelte-1n9rb67{margin:.5rem auto;border:1px solid var(--clr-magenta-lt);width:100%;padding:.5rem;border-radius:.5rem}",
  map: null
};
const Nav = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  const links = [
    { title: "Home", path: "/" },
    { title: "Posts", path: "/posts" },
    { title: "Art", path: "/art" },
    { title: "Contact", path: "/contact" }
  ];
  $$result.css.add(css$3);
  return `<nav class="${"svelte-1n9rb67"}">${(0, import_index_d4aa807a.e)(links, ({ title, path }) => {
    return `<a${(0, import_index_d4aa807a.a)("href", path, 0)} class="${"svelte-1n9rb67"}">${(0, import_index_d4aa807a.b)(title)}</a>`;
  })}
</nav>`;
});
const header_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "h1.svelte-j2cifi{text-align:center;border-bottom:2px solid var(--clr-denim-lt);padding-bottom:1rem}",
  map: null
};
const Header = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header><h1 class="${"svelte-j2cifi"}">AI Therapist</h1>
    ${(0, import_index_d4aa807a.v)(Nav, "Nav").$$render($$result, {}, {}, {})}
</header>`;
});
const footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1vsctkb{padding:2rem 0;text-align:center}",
  map: null
};
const Footer = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1vsctkb"}"><p>\xA9 2022 <a href="${"https://webfolio-cmfredricksen.netlify.app/"}">Chris Fredricksen\xB7</a> All Rights Reserved \u2663</p>
</footer>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-hklf2m{width:98%;margin:0 auto;display:flex}.left-column.svelte-hklf2m{padding:1rem;background-color:#111;width:25%}",
  map: null
};
const _layout = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-hklf2m"}"><div class="${"left-column svelte-hklf2m"}">${(0, import_index_d4aa807a.v)(Header, "Header").$$render($$result, {}, {}, {})}</div>
<div class="${"right-column"}">${slots.default ? slots.default({}) : ``}</div></div>

${(0, import_index_d4aa807a.v)(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
