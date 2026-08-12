import { default as generate } from "@babel/generator";
import * as t from "@babel/types";

const startFunc = (inJsFileName) => {
  const newImport = t.importDeclaration(
    [
      t.importDefaultSpecifier(
        t.identifier("endpoints")
      )
    ],
    t.stringLiteral(inJsFileName)
  );

  const code = generate(newImport).code;

  return code;
};

export default startFunc;