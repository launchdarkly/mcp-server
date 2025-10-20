# AiConfigs
(*aiConfigs*)

## Overview

### Available Operations

* [getTargeting](#gettargeting) - Show an AI Config's targeting
* [updateTargeting](#updatetargeting) - Update AI Config targeting
* [list](#list) - List AI Configs
* [create](#create) - Create new AI Config
* [delete](#delete) - Delete AI Config
* [get](#get) - Get AI Config
* [update](#update) - Update AI Config
* [createVariation](#createvariation) - Create AI Config variation
* [deleteVariation](#deletevariation) - Delete AI Config variation
* [getVariation](#getvariation) - Get AI Config variation
* [updateVariation](#updatevariation) - Update AI Config variation

## getTargeting

Retrieves a specific AI Config's targeting by its key

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.getTargeting({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsGetTargeting } from "@launchdarkly/mcp-server/funcs/aiConfigsGetTargeting.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsGetTargeting(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsGetTargeting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAIConfigTargetingRequest](../../models/operations/getaiconfigtargetingrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfigTargeting](../../models/components/aiconfigtargeting.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 403, 404         | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateTargeting

Perform a partial update to an AI Config's targeting. The request body must be a valid semantic patch.

### Using semantic patches on an AI Config

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

The body of a semantic patch request for updating an AI Config's targeting takes the following properties:

* `comment` (string): (Optional) A description of the update.
* `environmentKey` (string): The key of the LaunchDarkly environment.
* `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object. The body of a single semantic patch can contain many different instructions.

### Instructions

Semantic patch requests support the following `kind` instructions for updating AI Configs.

<details>
<summary>Click to expand instructions for <strong>working with targeting and variations</strong> for AI Configs</summary>

#### addClauses

Adds the given clauses to the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the AI Config.
- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [{
    "kind": "addClauses",
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
    "clauses": [{
      "contextKind": "user",
      "attribute": "country",
      "op": "in",
      "negate": false,
      "values": ["USA", "Canada"]
    }]
  }]
}
```

#### addRule

Adds a new targeting rule to the AI Config. The rule may contain `clauses` and serve the variation that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`, `rolloutBucketBy`, and `rolloutContextKind` indicate.

If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds the new rule to the end of the list.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `beforeRuleId`: (Optional) ID of a rule.
- Either
- `variationId`: ID of a variation.

or

- `rolloutWeights`: (Optional) Map of `variationId` to weight, in thousandths of a percent (0-100000).
- `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`.
- `rolloutContextKind`: (Optional) Context kind, defaults to `user`

Here's an example that uses a `variationId`:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "addRule",
  "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
  "clauses": [{
    "contextKind": "organization",
    "attribute": "located_in",
    "op": "in",
    "negate": false,
    "values": ["Sweden", "Norway"]
  }]
}]
}
```

Here's an example that uses a percentage rollout:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "addRule",
  "clauses": [{
    "contextKind": "organization",
    "attribute": "located_in",
    "op": "in",
    "negate": false,
    "values": ["Sweden", "Norway"]
  }],
  "rolloutContextKind": "organization",
  "rolloutWeights": {
    "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
    "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000  // serve 85% this variation
  }
}]
}
```

#### addTargets

Adds context keys to the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Returns an error if this causes the AI Config to target the same context key in multiple variations.

##### Parameters

- `values`: List of context keys.
- `contextKind`: (Optional) Context kind to target, defaults to `user`
- `variationId`: ID of a variation.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "addTargets",
  "values": ["context-key-123abc", "context-key-456def"],
  "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
}]
}
```

#### addValuesToClause

Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the AI Config.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "addValuesToClause",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
  "values": ["beta_testers"]
}]
}
```

#### clearTargets

Removes all individual targets from the variation that `variationId` specifies. This includes both user and non-user targets.

##### Parameters

- `variationId`: ID of a variation.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [ { "kind": "clearTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
}
```

#### removeClauses

Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule.
- `clauseIds`: Array of IDs of clauses in the rule.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "removeClauses",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  "clauseIds": ["10a58772-3121-400f-846b-b8a04e8944ed", "36a461dc-235e-4b08-97b9-73ce9365873e"]
}]
}
```

#### removeRule

Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.

##### Parameters

- `ruleId`: ID of a rule.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [ { "kind": "removeRule", "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29" } ]
}
```

#### removeTargets

Removes context keys from the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Does nothing if the flag does not target the context keys.

##### Parameters

- `values`: List of context keys.
- `contextKind`: (Optional) Context kind to target, defaults to `user`
- `variationId`: ID of a variation.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "removeTargets",
  "values": ["context-key-123abc", "context-key-456def"],
  "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
}]
}
```

#### removeValuesFromClause

Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "removeValuesFromClause",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
  "values": ["beta_testers"]
}]
}
```

#### reorderRules

Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules on the AI Config.

##### Parameters

- `ruleIds`: Array of IDs of all rules.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "reorderRules",
  "ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
}]
}
```

#### replaceRules

Removes all targeting rules for the AI Config and replaces them with the list you provide.

##### Parameters

- `rules`: A list of rules.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [
  {
    "kind": "replaceRules",
    "rules": [
      {
        "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
        "description": "My new rule",
        "clauses": [
          {
            "contextKind": "user",
            "attribute": "segmentMatch",
            "op": "segmentMatch",
            "values": ["test"]
          }
        ]
      }
    ]
  }
]
}
```

#### replaceTargets

Removes all existing targeting and replaces it with the list of targets you provide.

##### Parameters

- `targets`: A list of context targeting. Each item in the list includes an optional `contextKind` that defaults to `user`, a required `variationId`, and a required list of `values`.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [
  {
    "kind": "replaceTargets",
    "targets": [
      {
        "contextKind": "user",
        "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
        "values": ["user-key-123abc"]
      },
      {
        "contextKind": "device",
        "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
        "values": ["device-key-456def"]
      }
    ]
  }
]
}
```

#### updateClause

Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.

##### Parameters

- `ruleId`: ID of a rule.
- `clauseId`: ID of a clause in that rule.
- `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "updateClause",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  "clauseId": "10c7462a-2062-45ba-a8bb-dfb3de0f8af5",
  "clause": {
    "contextKind": "user",
    "attribute": "country",
    "op": "in",
    "negate": false,
    "values": ["Mexico", "Canada"]
  }
}]
}
```

#### updateDefaultVariation

Updates the default on or off variation of the AI Config.

##### Parameters

- `onVariationValue`: (Optional) The value of the variation of the new on variation.
- `offVariationValue`: (Optional) The value of the variation of the new off variation

Here's an example:

```json
{
"instructions": [ { "kind": "updateDefaultVariation", "OnVariationValue": true, "OffVariationValue": false } ]
}
```

#### updateFallthroughVariationOrRollout

Updates the default or "fallthrough" rule for the AI Config, which the AI Config serves when a context matches none of the targeting rules. The rule can serve either the variation that `variationId` indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy` indicate.

##### Parameters

- `variationId`: ID of a variation.

or

- `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
- `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`.
- `rolloutContextKind`: (Optional) Context kind, defaults to `user`

Here's an example that uses a `variationId`:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "updateFallthroughVariationOrRollout",
  "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
}]
}
```

Here's an example that uses a percentage rollout:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "updateFallthroughVariationOrRollout",
  "rolloutContextKind": "user",
  "rolloutWeights": {
    "2f43f67c-3e4e-4945-a18a-26559378ca00": 15000, // serve 15% this variation
    "e5830889-1ec5-4b0c-9cc9-c48790090c43": 85000  // serve 85% this variation
  }
}]
}
```

#### updateOffVariation

Updates the default off variation to `variationId`. The AI Config serves the default off variation when the AI Config's targeting is **Off**.

##### Parameters

- `variationId`: ID of a variation.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [ { "kind": "updateOffVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
}
```

#### updateRuleDescription

Updates the description of the targeting rule.

##### Parameters

- `description`: The new human-readable description for this rule.
- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI Config.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "updateRuleDescription",
  "description": "New rule description",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
}]
}
```

#### updateRuleTrackEvents

Updates whether or not LaunchDarkly tracks events for the AI Config associated with this rule.

##### Parameters

- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the AI Config.
- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "updateRuleTrackEvents",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  "trackEvents": true
}]
}
```

#### updateRuleVariationOrRollout

Updates what `ruleId` serves when its clauses evaluate to true. The rule can serve either the variation that `variationId` indicates, or a percent rollout that `rolloutWeights` and `rolloutBucketBy` indicate.

##### Parameters

- `ruleId`: ID of a rule.
- `variationId`: ID of a variation.

or

- `rolloutWeights`: Map of `variationId` to weight, in thousandths of a percent (0-100000).
- `rolloutBucketBy`: (Optional) Context attribute available in the specified `rolloutContextKind`.
- `rolloutContextKind`: (Optional) Context kind, defaults to `user`

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [{
  "kind": "updateRuleVariationOrRollout",
  "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
}]
}
```

#### updateTrackEvents

Updates whether or not LaunchDarkly tracks events for the AI Config, for all rules.

##### Parameters

- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [ { "kind": "updateTrackEvents", "trackEvents": true } ]
}
```

#### updateTrackEventsFallthrough

Updates whether or not LaunchDarkly tracks events for the AI Config, for the default rule.

##### Parameters

- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
"environmentKey": "environment-key-123abc",
"instructions": [ { "kind": "updateTrackEventsFallthrough", "trackEvents": true } ]
}
```
</details>


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.updateTargeting({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigTargetingPatch: {
      comment: "comment",
      environmentKey: "environmentKey",
      instructions: [
        {
          "key": "",
        },
        {
          "key": "",
        },
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsUpdateTargeting } from "@launchdarkly/mcp-server/funcs/aiConfigsUpdateTargeting.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsUpdateTargeting(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigTargetingPatch: {
      comment: "comment",
      environmentKey: "environmentKey",
      instructions: [
        {
          "key": "",
        },
        {
          "key": "",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsUpdateTargeting failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAIConfigTargetingRequest](../../models/operations/patchaiconfigtargetingrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfigTargeting](../../models/components/aiconfigtargeting.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## list

Get a list of all AI Configs in the given project.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.list({
    ldAPIVersion: "beta",
    projectKey: "default",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsList } from "@launchdarkly/mcp-server/funcs/aiConfigsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsList(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "default",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAIConfigsRequest](../../models/operations/getaiconfigsrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfigs](../../models/components/aiconfigs.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## create

Create a new AI Config within the given project.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.create({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    aiConfigPost: {
      key: "key",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsCreate } from "@launchdarkly/mcp-server/funcs/aiConfigsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsCreate(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    aiConfigPost: {
      key: "key",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAIConfigRequest](../../models/operations/postaiconfigrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfig](../../models/components/aiconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403         | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## delete

Delete an existing AI Config.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.aiConfigs.delete({
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsDelete } from "@launchdarkly/mcp-server/funcs/aiConfigsDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsDelete(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("aiConfigsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAIConfigRequest](../../models/operations/deleteaiconfigrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## get

Retrieve a specific AI Config by its key.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.get({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsGet } from "@launchdarkly/mcp-server/funcs/aiConfigsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsGet(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAIConfigRequest](../../models/operations/getaiconfigrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfig](../../models/components/aiconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## update

Edit an existing AI Config.

The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.

Here's an example:
  ```
    {
      "description": "Example updated description",
      "tags": ["new-tag"]
    }
  ```


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.update({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigPatch: {
      description: "description",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsUpdate } from "@launchdarkly/mcp-server/funcs/aiConfigsUpdate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsUpdate(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigPatch: {
      description: "description",
      maintainerId: "maintainerId",
      maintainerTeamKey: "maintainerTeamKey",
      name: "name",
      tags: [
        "tags",
        "tags",
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAIConfigRequest](../../models/operations/patchaiconfigrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfig](../../models/components/aiconfig.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## createVariation

Create a new variation for a given AI Config.

The <code>model</code> in the request body requires a <code>modelName</code> and <code>parameters</code>, for example:

```
  "model": {
    "modelName": "claude-3-opus-20240229",
    "parameters": {
      "max_tokens": 1024
    }
  }
```


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.createVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigVariationPost: {
      comment: "comment",
      description: "description",
      instructions: "instructions",
      key: "key",
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      name: "name",
      modelConfigKey: "modelConfigKey",
      tools: [
        {
          key: "key",
          version: 0,
        },
        {
          key: "key",
          version: 0,
        },
      ],
      toolKeys: [
        "toolKeys",
        "toolKeys",
      ],
      judgeConfiguration: {
        judges: [
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsCreateVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsCreateVariation.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsCreateVariation(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    aiConfigVariationPost: {
      comment: "comment",
      description: "description",
      instructions: "instructions",
      key: "key",
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      name: "name",
      modelConfigKey: "modelConfigKey",
      tools: [
        {
          key: "key",
          version: 0,
        },
        {
          key: "key",
          version: 0,
        },
      ],
      toolKeys: [
        "toolKeys",
        "toolKeys",
      ],
      judgeConfiguration: {
        judges: [
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsCreateVariation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostAIConfigVariationRequest](../../models/operations/postaiconfigvariationrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfigVariation](../../models/components/aiconfigvariation.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403         | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## deleteVariation

Delete a specific variation of an AI Config by config key and variation key.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.aiConfigs.deleteVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsDeleteVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsDeleteVariation.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsDeleteVariation(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("aiConfigsDeleteVariation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteAIConfigVariationRequest](../../models/operations/deleteaiconfigvariationrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## getVariation

Get an AI Config variation by key. The response includes all variation versions for the given variation key.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.getVariation({
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "default",
    variationKey: "default",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsGetVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsGetVariation.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsGetVariation(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "default",
    configKey: "default",
    variationKey: "default",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsGetVariation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetAIConfigVariationRequest](../../models/operations/getaiconfigvariationrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfigVariationsResponse](../../models/components/aiconfigvariationsresponse.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |

## updateVariation

Edit an existing variation of an AI Config. This creates a new version of the variation.

The request body must be a JSON object of the fields to update. The values you include replace the existing values for the fields.

Here's an example:
```
  {
    "messages": [
      {
        "role": "system",
        "content": "The new message"
      }
    ]
  }
```


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.aiConfigs.updateVariation({
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
    aiConfigVariationPatch: {
      comment: "comment",
      description: "description",
      instructions: "instructions",
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      modelConfigKey: "modelConfigKey",
      name: "name",
      published: true,
      state: "state",
      tools: [
        {
          key: "key",
          version: 0,
        },
        {
          key: "key",
          version: 0,
        },
      ],
      toolKeys: [
        "toolKeys",
        "toolKeys",
      ],
      judgeConfiguration: {
        judges: [
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
        ],
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { aiConfigsUpdateVariation } from "@launchdarkly/mcp-server/funcs/aiConfigsUpdateVariation.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await aiConfigsUpdateVariation(launchDarkly, {
    ldAPIVersion: "beta",
    projectKey: "<value>",
    configKey: "<value>",
    variationKey: "<value>",
    aiConfigVariationPatch: {
      comment: "comment",
      description: "description",
      instructions: "instructions",
      messages: [
        {
          content: "content",
          role: "role",
        },
        {
          content: "content",
          role: "role",
        },
      ],
      model: {},
      modelConfigKey: "modelConfigKey",
      name: "name",
      published: true,
      state: "state",
      tools: [
        {
          key: "key",
          version: 0,
        },
        {
          key: "key",
          version: 0,
        },
      ],
      toolKeys: [
        "toolKeys",
        "toolKeys",
      ],
      judgeConfiguration: {
        judges: [
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
          {
            judgeConfigKey: "judgeConfigKey",
            samplingRate: 0.7061401,
          },
        ],
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("aiConfigsUpdateVariation failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchAIConfigVariationRequest](../../models/operations/patchaiconfigvariationrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.AIConfigVariation](../../models/components/aiconfigvariation.md)\>**

### Errors

| Error Type       | Status Code      | Content Type     |
| ---------------- | ---------------- | ---------------- |
| errors.ErrorT    | 400, 403, 404    | application/json |
| errors.ErrorT    | 500              | application/json |
| errors.APIError  | 4XX, 5XX         | \*/\*            |