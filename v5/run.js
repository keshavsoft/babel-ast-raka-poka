import fs from "node:fs";
import { parse } from "@babel/parser";

import { processAst } from "./astHandlers.js";

const filePath = "./jsFiles/app.js";

const source = fs.readFileSync(filePath, "utf8");

const ast = parse(source, {
    sourceType: "module"
});

const results = processAst(ast, source);

console.log(results);