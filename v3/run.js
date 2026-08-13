import fs from "node:fs";
import { parse } from "@babel/parser";

import handleImportDeclaration
    from "./nodeHandlers/ImportDeclaration.js";

import handleVariableDeclaration
    from "./nodeHandlers/VariableDeclaration.js";

import handleExpressionStatement
    from "./nodeHandlers/ExpressionStatement.js";

import handleIfStatement
    from "./nodeHandlers/IfStatement.js";


const handlers = {
    ImportDeclaration: handleImportDeclaration,
    VariableDeclaration: handleVariableDeclaration,
    ExpressionStatement: handleExpressionStatement,
    IfStatement: handleIfStatement
};


const filePath = "./jsFiles/app.js";

const source =
    fs.readFileSync(filePath, "utf8");

const ast =
    parse(source, {
        sourceType: "module"
    });


for (const node of ast.program.body) {
    const handler = handlers[node.type];

    if (!handler) {
        continue;
    }

    console.log(
        handler(node, source)
    );
}