import fs from "node:fs";
import { parse } from "@babel/parser";

const filePath = "./app.js";

const source = fs.readFileSync(filePath, "utf8");

const ast = parse(source, {
    sourceType: "module"
});

// for (const node of ast.program.body) {
//     console.log(node);
// };


// for (const node of ast.program.body) {
//     console.log({
//         type: node.type,
//         start: node.start,
//         end: node.end,
//         text: source.slice(node.start, node.end)
//     });
// };
fs.writeFileSync(
    "./ast-output.json",
    JSON.stringify(ast, null, 2),
    "utf8"
);