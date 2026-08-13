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
//         text: source.slice(node.start, node.end),
//         lineType: node.specifiers[0].type,
//         raka: node.source?.value,
//         poka: node.specifiers[0].local.name,
//         importedName: node.specifiers[0].imported?.name
//     });
// };

for (const node of ast.program.body) {
    console.log({
        type: node.type,
        start: node.start,
        end: node.end,
        text: source.slice(node.start, node.end),
        lineType: node?.type,
        raka: node.source?.value,
        poka: node.declarations[0]?.id?.name,
        importedName: node.specifiers[0].imported?.name
    });
};