import { readFile } from "node:fs/promises";

const root = new URL("..", import.meta.url);
const tokens = JSON.parse(await readFile(new URL("design/yor-tokens.json", root), "utf8"));
const css = await readFile(new URL("styles/globals.css", root), "utf8");
const layout = await readFile(new URL("app/layout.tsx", root), "utf8");
const required = [...Object.values(tokens.palette), tokens.gradient];
const missing = required.filter((value) => !css.toLowerCase().includes(value.toLowerCase()));
if (!layout.includes("YOR // Ayrin field notes")) missing.push("YOR metadata");
if (missing.length) {
  console.error(`YOR design contract failed: ${missing.join(", ")}`);
  process.exit(1);
}
console.log("YOR design contract: PASS");
