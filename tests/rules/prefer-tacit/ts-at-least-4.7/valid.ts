import dedent from "dedent";

import type { ValidTestCase } from "~/tests/helpers/util";

const tests: ValidTestCase[] = [
  // Instantiation Expression
  {
    code: dedent`
      const foo = f<number>;
    `,
    optionsSet: [[]],
  },
];

export default tests;
