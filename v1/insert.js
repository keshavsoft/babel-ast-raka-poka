import fs from "node:fs";
import { parse } from "@babel/parser";

import create from "./create.js";

const fileName = "routes.js";

const filePath = `./${fileName}`;

const source = fs.readFileSync(filePath, "utf8");

const ast = parse(source, {
    sourceType: "module"
});

const statement = ast.program.body[1];

const insertPosition = statement.start;

const newLine = create(filePath);

const result =
    source.slice(0, insertPosition) +
    newLine +
    source.slice(insertPosition);

fs.writeFileSync(filePath, result);

// console.log(newLine);
