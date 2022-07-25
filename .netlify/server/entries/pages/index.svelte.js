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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_d4aa807a = require("../../_app/immutable/chunks/index-d4aa807a.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-4jeey7{display:grid;grid-template-columns:1fr 1fr 1fr;grid-row:1fr 1fr;margin:1rem;gap:2rem}h2.svelte-4jeey7{text-align:center;margin:1rem 0}p.svelte-4jeey7{padding:1rem}",
  map: null
};
const Routes = (0, import_index_d4aa807a.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 class="${"svelte-4jeey7"}">Welcome to AI Therapist!</h2>

<main class="${"svelte-4jeey7"}"><img src="${"../../static/church-ruins.jpg"}" alt="${"AI Art"}">
    <img src="${"../../static/trees-from-rocks.jpg"}" alt="${"AI Art"}">
    <p class="${"svelte-4jeey7"}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti omnis assumenda officia sapiente facilis molestiae ullam fugit accusamus quis vero tempore culpa, modi minus quidem reprehenderit eum libero perspiciatis necessitatibus! Illo unde numquam, provident dolores aliquid officia et ipsa reiciendis delectus reprehenderit cumque dolore voluptate cum dignissimos earum iusto harum assumenda quidem exercitationem dolor, vero excepturi aliquam dicta? Odio veritatis consectetur ipsa, corrupti obcaecati voluptatibus magni ut accusamus iusto ab esse aperiam nostrum voluptatem?</p>
    <p class="${"svelte-4jeey7"}">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad sapiente quam sed commodi! Nesciunt aliquid vitae praesentium eaque sequi autem in et, iusto architecto itaque, facilis omnis. Voluptatum facere doloremque porro, saepe at suscipit aliquam? Saepe reprehenderit voluptatibus pariatur nostrum voluptate, est ducimus repudiandae? Voluptate debitis reprehenderit delectus iusto odit culpa nam! Aperiam distinctio qui ipsa reiciendis aspernatur dolorem! Nisi temporibus aperiam corrupti nostrum beatae, fugit deleniti laudantium dignissimos vel optio doloremque molestias. Fuga voluptatum, minus, dicta, nostrum iusto a rem ab asperiores dolores omnis aperiam iste dolorem eum. Accusantium eos placeat et minus accusamus adipisci illo cumque nisi commodi!</p>
    <img src="${"../../static/water-lilies.jpg"}" alt="${"AI Art"}">
    <img src="${"../../static/forest-path.png"}" alt="${"AI Art"}">
</main>`;
});
