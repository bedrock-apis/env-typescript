import {readFile, writeFile,  readdir} from "node:fs/promises";

let text = '/// <reference no-default-lib="true"/>\n';
for(const d of await readdir("./lib/")){
    let t = (await readFile("./lib/" + d)).toString();
    t = t.replace(/(?:\/\*\![\s\S]*?\*\/)|(?:\/\/\/.*)|(\s+toLocale.*$)|(\s+locale.*$)/gm, "").replace(/\n+/g,"\n");
    text += t;
}
await writeFile("lib.d.ts", text);
console.log("Done")