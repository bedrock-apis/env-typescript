import { readFile, writeFile, readdir } from "node:fs/promises";
import { join, resolve } from "node:path";

const INTRO = `
/*! *****************************************************************************
This file includes content derived from Microsoft's TypeScript standard library
declaration files (lib.es*.d.ts), licensed under the Apache License, Version 2.0.

Modifications include: Portions of the original files have been removed to 
include only the declarations used by this project.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABILITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

/// <reference no-default-lib="true"/>

`



const base = resolve(import.meta.dirname, "..");
let text = INTRO;
for (const d of await readdir(join(base, "lib"))) {
    if (!d.endsWith(".d.ts")) continue;
    let t = (await readFile(join(base, "lib", d))).toString();
    if (!d.includes("es5"))
        t = t.replace(/(?:\/\*\![\s\S]*?\*\/)|(?:\/\/\/.*)|(\s+toLocale.*$)|(\s+locale.*$)/gm, "").replace(/\n+/g, "\n");
    text += t;
}
await writeFile(join(base, "lib.d.ts"), text);
console.log("Done");