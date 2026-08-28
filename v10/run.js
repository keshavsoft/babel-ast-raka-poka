import fs from "node:fs";
import { parse } from "@babel/parser";

// 1. Read routes.js file
const source = fs.readFileSync("./routes.js", "utf8");

// 2. Parse source into Babel AST
const ast = parse(source, { sourceType: "module" });

// 3. Process ast.program.body and extract AST details
const output = ast.program.body.map((node) => ({
    type: node.type,
    text: source.slice(node.start, node.end).trim(),
    raka: node.source?.value || null,
    poka: node.specifiers?.[0]?.local?.name || node.declarations?.[0]?.id?.name || null,
    routePath: node.expression?.arguments?.[0]?.value || null,
    routeHandler: node.expression?.arguments?.[1]?.name || null
}));

// 4. Write output to output.json
fs.writeFileSync("./output.json", JSON.stringify(output, null, 2), "utf8");

console.log("=== AST Output Captured to output.json ===");
console.log(JSON.stringify(output, null, 2));
