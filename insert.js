import fs from "node:fs";
import { parse } from "@babel/parser";

const filePath = "./app.js";

const source = fs.readFileSync(filePath, "utf8");

const ast = parse(source, {
    sourceType: "module"
});

const statement = ast.program.body[1];

const insertPosition = statement.start;

const result =
    source.slice(0, insertPosition) +
    'console.log("HELLO");\r\n' +
    source.slice(insertPosition);

fs.writeFileSync(filePath, result);

console.log(result);
