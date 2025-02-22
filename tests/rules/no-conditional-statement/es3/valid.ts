import dedent from "dedent";

import type { ValidTestCase } from "~/tests/helpers/util";

const tests: ValidTestCase[] = [
  {
    code: dedent`
      function foo(i) {
        if (i === 1) {
          return 1;
        }
      }
    `,
    optionsSet: [[{ allowReturningBranches: true }]],
  },
  {
    code: dedent`
      function foo(i) {
        if (i === 1) {
          return 1;
        } else {
          return 0;
        }
      }
    `,
    optionsSet: [
      [{ allowReturningBranches: true }],
      [{ allowReturningBranches: "ifExhaustive" }],
    ],
  },
  {
    code: dedent`
      function foo(i) {
        switch(i) {
          case "a":
            return 1;
          case "b":
          case "c":
            return 2;
        }
      }
    `,
    optionsSet: [[{ allowReturningBranches: true }]],
  },
  {
    code: dedent`
      function foo(i) {
        switch(i) {
          case "a":
            return 1;
          case "b":
            return 2;
          default:
            return 3;
        }
      }
    `,
    optionsSet: [
      [{ allowReturningBranches: true }],
      [{ allowReturningBranches: "ifExhaustive" }],
    ],
  },
  // Check Break and Continue
  {
    code: dedent`
      for(var i = 0; i < j; i++) {
        if (e === 1) {
          break;
        }
      }
    `,
    optionsSet: [[{ allowReturningBranches: true }]],
  },
  {
    code: dedent`
      for(var i = 0; i < j; i++) {
        if (e === 1) {
          break;
        } else {
          continue;
        }
      }
    `,
    optionsSet: [
      [{ allowReturningBranches: true }],
      [{ allowReturningBranches: "ifExhaustive" }],
    ],
  },
];

export default tests;
