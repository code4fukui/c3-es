const src = await Deno.readTextFile("./c3.esm.js");

const dst = src
  .replace(
"import * as d3 from 'd3';\n",
`import * as d3 from "https://cdn.skypack.dev/d3@5";

export const initC3 = (window) => {
  // set d3
  window.d3 = d3;

  //<link href="./c3.css" rel="stylesheet">
  const link = window.document.createElement("link");
  link.href = "./c3.css";
  link.rel = "stylesheet";
  document.head.appendChild(link);
`
  )
  .replace(
"export default c3;\n",
`return c3;
};
`
  );

await Deno.writeTextFile("./c3-es.js", dst);
