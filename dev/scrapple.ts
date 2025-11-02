import {readFile, writeFile,  readdir} from "node:fs/promises";
import { join, resolve } from "node:path";

const base = resolve(import.meta.dirname, "..");
let text = '/// <reference no-default-lib="true"/>\n';
for(const d of await readdir(join(base, "lib"))){
    if(!d.endsWith(".d.ts")) continue;
    let t = (await readFile(join(base, "lib", d))).toString();
    t = t.replace(/(?:\/\*\![\s\S]*?\*\/)|(?:\/\/\/.*)|(\s+toLocale.*$)|(\s+locale.*$)/gm, "").replace(/\n+/g,"\n");
    text += t;
}
await writeFile(join(base, "lib.d.ts"), text);
console.log("Done");