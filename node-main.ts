import {run} from "./compiler"
import * as python from "lezer-python"


const source:string = `
(module
    (func (export "_start") (result i32)
      (i32.const 1)
      (i32.const 3)
      (i32.sub)))
`;

run(source).then((value) => {console.log(value)});

const input = "x = 10\nprint(10)";
const tree = python.parser.parse(input);
const cursor = tree.cursor();

cursor.firstChild();
cursor.nextSibling();
//cursor.firstChild();
console.log(cursor.type.name);
console.log(input.substr(cursor.from, cursor.to));