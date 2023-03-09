import type { TSESLint } from "@typescript-eslint/utils";
import type { JSONSchema4 } from "json-schema";

import type { ESInterface } from "~/utils/node-types";
import type { RuleResult, NamedCreateRuleMetaWithCategory } from "~/utils/rule";
import { createRule } from "~/utils/rule";

/**
 * The name of this rule.
 */
export const name = "no-interfaces" as const;

/**
 * The options this rule can take.
 */
type Options = [{}];

/**
 * The schema for the rule options.
 */
const schema: JSONSchema4 = [];

/**
 * The default options for the rule.
 */
const defaultOptions: Options = [{}];

/**
 * The possible error messages.
 */
const errorMessages = {
  generic: "Unexpected interface, use types not interfaces.",
} as const;

/**
 * The meta data for this rule.
 */
const meta: NamedCreateRuleMetaWithCategory<keyof typeof errorMessages> = {
  type: "suggestion",
  docs: {
    category: "No Other Paradigms",
    description: "Disallow interfaces.",
    recommended: "error",
  },
  messages: errorMessages,
  schema,
};

/**
 * Check if the given interface node violates this rule.
 */
function checkInterface(
  node: ESInterface,
  context: TSESLint.RuleContext<keyof typeof errorMessages, Options>
): RuleResult<keyof typeof errorMessages, Options> {
  // All interface nodes violate this rule.
  return { context, descriptors: [{ node, messageId: "generic" }] };
}

// Create the rule.
export const rule = createRule<keyof typeof errorMessages, Options>(
  name,
  meta,
  defaultOptions,
  { TSInterfaceDeclaration: checkInterface }
);
