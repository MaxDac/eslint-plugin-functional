import type { InvalidTestCase } from "~/tests/helpers/util";

const tests: InvalidTestCase[] = [
  {
    code: "interface Foo {}",
    optionsSet: [[]],
    errors: [
      {
        messageId: "generic",
        type: "InterfaceDeclaration",
        line: 1,
        column: 1,
      },
    ],
  }
];

export default tests;
