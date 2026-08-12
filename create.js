import { default as generate } from "@babel/generator";
import * as t from "@babel/types";

const newImport = t.importDeclaration(
  [
    t.importDefaultSpecifier(
      t.identifier("endpoints")
    )
  ],
  t.stringLiteral("./end-points.js")
);

const code = generate(newImport).code;

console.log(code);