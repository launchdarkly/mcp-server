# Segments
(*segments*)

## Overview


> ### Synced segments and larger list-based segments are an Enterprise feature
>
> This section documents endpoints for rule-based, list-based, and synced segments.
>
> A "big segment" is a segment that is either a synced segment, or a list-based segment with more than 15,000 entries that includes only one targeted context kind. LaunchDarkly uses different implementations for different types of segments so that all of your segments have good performance.
>
> In the segments API, a big segment is indicated by the `unbounded` field being set to `true`.
>
> These segments are available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

Segments are groups of contexts that you can use to manage flag targeting behavior in bulk. LaunchDarkly supports:

* rule-based segments, which let you target groups of contexts individually or by attribute,
* list-based segments, which let you target individual contexts or uploaded lists of contexts, and
* synced segments, which let you target groups of contexts backed by an external data store.

To learn more, read [Segments](https://launchdarkly.com/docs/home/flags/segments).

The segments API allows you to list, create, modify, and delete segments programmatically.

You can find other APIs for working with big segments under [Persistent store integrations (beta)](https://launchdarkly.com/docs/api/persistent-store-integrations-beta).


### Available Operations

* [evaluateMembership](#evaluatemembership) - List segment memberships for context instance
* [list](#list) - List segments
* [create](#create) - Create segment
* [get](#get) - Get segment
* [patch](#patch) - Patch segment
* [delete](#delete) - Delete segment
* [updateContextTargets](#updatecontexttargets) - Update context targets on a big segment
* [getMembershipForContext](#getmembershipforcontext) - Get big segment membership for context
* [createBigExport](#createbigexport) - Create big segment export
* [getExport](#getexport) - Get big segment export
* [createBigImport](#createbigimport) - Create big segment import
* [getImport](#getimport) - Get big segment import
* [updateBigTargets](#updatebigtargets) - Update user context targets on a big segment
* [getMembershipForUser](#getmembershipforuser) - Get big segment membership for user
* [getExpiringTargets](#getexpiringtargets) - Get expiring targets for segment
* [patchExpiringTargets](#patchexpiringtargets) - Update expiring targets for segment
* [getExpiringUserTargets](#getexpiringusertargets) - Get expiring user targets for segment
* [patchExpiringUserTargets](#patchexpiringusertargets) - Update expiring user targets for segment

## evaluateMembership

For a given context instance with attributes, get membership details for all segments. In the request body, pass in the context instance.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.evaluateMembership({
    projectKey: "<value>",
    environmentKey: "<value>",
    requestBody: {
      "address": {
        "city": "Springfield",
        "street": "123 Main Street",
      },
      "jobFunction": "doctor",
      "key": "context-key-123abc",
      "kind": "user",
      "name": "Sandy",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsEvaluateMembership } from "@launchdarkly/mcp-server/funcs/segmentsEvaluateMembership.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsEvaluateMembership(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    requestBody: {
      "address": {
        "city": "Springfield",
        "street": "123 Main Street",
      },
      "jobFunction": "doctor",
      "key": "context-key-123abc",
      "kind": "user",
      "name": "Sandy",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetContextInstanceSegmentsMembershipByEnvRequest](../../models/operations/getcontextinstancesegmentsmembershipbyenvrequest.md)                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ContextInstanceSegmentMemberships](../../models/components/contextinstancesegmentmemberships.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## list

Get a list of all segments in the given project.

Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.

### Filtering segments

The `filter` parameter supports the following operators: `equals`, `anyOf`, and `exists`.

You can also combine filters in the following ways:

- Use a comma (`,`) as an AND operator
- Use a vertical bar (`|`) as an OR operator
- Use parentheses (`()`) to group filters

#### Supported fields and operators

You can only filter certain fields in segments when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.

When you search for segments, the `filter` parameter supports the following fields and operators:

|<div style="width:120px">Field</div> |Description |Supported operators |
|---|---|---|
| `excludedKeys` | The segment keys of segments to exclude from the results. | `anyOf` |
| `external` | Whether the segment is a synced segment. | `exists` |
| `includedKeys` | The segment keys of segments to include in the results. | `anyOf` |
| `query` | A "fuzzy" search across segment key, name, and description. Supply a string or list of strings to the operator. | `equals` |
| `tags` | The segment tags. | `anyOf` |
| `unbounded` | Whether the segment is a standard segment (`false`) or a big segment (`true`). Standard segments include rule-based segments and smaller list-based segments. Big segments include larger list-based segments and synced segments. | `equals` |

Here are a few examples:

* The filter `?filter=tags anyOf ["enterprise", "beta"],query equals "toggle"` matches segments with "toggle" in their key, name, or description that also have "enterprise" or "beta" as a tag.
* The filter `?filter=excludedKeys anyOf ["segmentKey1", "segmentKey2"]` excludes the segments with those keys from the results.
* The filter `?filter=unbounded equals true` matches larger list-based segments and synced segments.

The documented values for `filter` query parameters are prior to URL encoding. For example, the `[` in `?filter=tags anyOf ["enterprise", "beta"]` must be encoded to `%5B`.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.list({
    projectKey: "<value>",
    environmentKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsList } from "@launchdarkly/mcp-server/funcs/segmentsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsList(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSegmentsRequest](../../models/operations/getsegmentsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UserSegments](../../models/components/usersegments.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## create

Create a new segment.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.create({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentBody: {
      name: "Example segment",
      key: "segment-key-123abc",
      description: "Bundle our sample customers together",
      tags: [
        "testing",
      ],
      unbounded: false,
      unboundedContextKind: "device",
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsCreate } from "@launchdarkly/mcp-server/funcs/segmentsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsCreate(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentBody: {
      name: "Example segment",
      key: "segment-key-123abc",
      description: "Bundle our sample customers together",
      tags: [
        "testing",
      ],
      unbounded: false,
      unboundedContextKind: "device",
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostSegmentRequest](../../models/operations/postsegmentrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UserSegment](../../models/components/usersegment.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Get a single segment by key.<br/><br/>Segments can be rule-based, list-based, or synced. Big segments include larger list-based segments and synced segments. Some fields in the response only apply to big segments.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.get({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGet } from "@launchdarkly/mcp-server/funcs/segmentsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGet(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSegmentRequest](../../models/operations/getsegmentrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UserSegment](../../models/components/usersegment.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patch

Update a segment. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](https://launchdarkly.com/docs/api#updates).

### Using semantic patches on a segment

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

The body of a semantic patch request for updating segments requires an `environmentKey` in addition to `instructions` and an optional `comment`. The body of the request takes the following properties:

* `comment` (string): (Optional) A description of the update.
* `environmentKey` (string): (Required) The key of the LaunchDarkly environment.
* `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object.

### Instructions

Semantic patch requests support the following `kind` instructions for updating segments.

<details>
<summary>Click to expand instructions for <strong>updating segment details and settings</strong></summary>

#### addTags

Adds tags to the segment.

##### Parameters

- `values`: A list of tags to add.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addTags",
    "values": ["tag1", "tag2"]
  }]
}
```

#### removeTags

Removes tags from the segment.

##### Parameters

- `values`: A list of tags to remove.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeTags",
    "values": ["tag1", "tag2"]
  }]
}
```

#### updateName

Updates the name of the segment.

##### Parameters

- `value`: Name of the segment.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateName",
    "value": "Updated segment name"
  }]
}
```

</details>

<details>
<summary>Click to expand instructions for <strong>updating segment individual targets</strong></summary>

#### addExcludedTargets

Adds context keys to the individual context targets excluded from the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `contextKind`: The context kind the targets should be added to.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addExcludedTargets",
    "contextKind": "org",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### addExcludedUsers

Adds user keys to the individual user targets excluded from the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use `addExcludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addExcludedUsers",
    "values": [ "user-key-123abc", "user-key-456def" ]
  }]
}
```

#### addIncludedTargets

Adds context keys to the individual context targets included in the segment for the specified `contextKind`. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `contextKind`: The context kind the targets should be added to.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addIncludedTargets",
    "contextKind": "org",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### addIncludedUsers

Adds user keys to the individual user targets included in the segment. Returns an error if this causes the same user key to be both included and excluded. If you are working with contexts, use `addIncludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addIncludedUsers",
    "values": [ "user-key-123abc", "user-key-456def" ]
  }]
}
```

#### removeExcludedTargets

Removes context keys from the individual context targets excluded from the segment for the specified `contextKind`.

##### Parameters

- `contextKind`: The context kind the targets should be removed from.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeExcludedTargets",
    "contextKind": "org",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### removeExcludedUsers

Removes user keys from the individual user targets excluded from the segment. If you are working with contexts, use `removeExcludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeExcludedUsers",
    "values": [ "user-key-123abc", "user-key-456def" ]
  }]
}
```

#### removeIncludedTargets

Removes context keys from the individual context targets included in the segment for the specified `contextKind`.

##### Parameters

- `contextKind`: The context kind the targets should be removed from.
- `values`: List of keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeIncludedTargets",
    "contextKind": "org",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### removeIncludedUsers

Removes user keys from the individual user targets included in the segment. If you are working with contexts, use `removeIncludedTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeIncludedUsers",
    "values": [ "user-key-123abc", "user-key-456def" ]
  }]
}
```

</details>

<details>
<summary>Click to expand instructions for <strong>updating segment targeting rules</strong></summary>

#### addClauses

Adds the given clauses to the rule indicated by `ruleId`.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `ruleId`: ID of a rule in the segment.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addClauses",
    "clauses": [
      {
        "attribute": "email",
        "negate": false,
        "op": "contains",
        "values": ["value1"]
      }
    ],
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
  }]
}
```

#### addRule

Adds a new targeting rule to the segment. The rule may contain `clauses`.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `description`: A description of the rule.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addRule",
    "clauses": [
      {
        "attribute": "email",
        "op": "contains",
        "negate": false,
        "values": ["@launchdarkly.com"]
      }
    ],
    "description": "Targeting rule for LaunchDarkly employees",
  }]
}
```

#### addValuesToClause

Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addValuesToClause",
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
    "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
    "values": ["beta_testers"]
  }]
}
```

#### removeClauses

Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseIds`: Array of IDs of clauses in the rule.

Here's an example:

```json
{
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

- `ruleId`: ID of a rule in the segment.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeRule",
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
  }]
}
```

#### removeValuesFromClause

Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseId`: ID of a clause in that rule.
- `values`: Array of strings, case sensitive.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeValuesFromClause",
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
    "clauseId": "10a58772-3121-400f-846b-b8a04e8944ed",
    "values": ["beta_testers"]
  }]
}
```

#### reorderRules

Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules in the segment.

##### Parameters

- `ruleIds`: Array of IDs of all targeting rules in the segment.

Here's an example:

```json
{
  "instructions": [{
    "kind": "reorderRules",
    "ruleIds": ["a902ef4a-2faf-4eaf-88e1-ecc356708a29", "63c238d1-835d-435e-8f21-c8d5e40b2a3d"]
  }]
}
```

#### updateClause

Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.

##### Parameters

- `ruleId`: ID of a rule in the segment.
- `clauseId`: ID of a clause in that rule.
- `clause`: New `clause` object, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, if not provided, defaults to `user`. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.

Here's an example:

```json
{
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

#### updateRuleDescription

Updates the description of the segment targeting rule.

##### Parameters

- `description`: The new human-readable description for this rule.
- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the segment.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateRuleDescription",
    "description": "New rule description",
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
  }]
}
```

#### updateRuleRolloutAndContextKind

For a rule that includes a percentage of targets, updates the percentage and the context kind of the targets to include.

##### Parameters

- `ruleId`: The ID of a targeting rule in the segment that includes a percentage of targets.
- `weight`: The weight, in thousandths of a percent (0-100000).
- `contextKind`: The context kind.

Here's an example:

```json
{
  "instructions": [{
    "kind": "reorderRules",
    "ruleId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29",
    "weight": "20000",
    "contextKind": "device"
  }]
}
```

</details>

<details>
<summary>Click to expand instructions for <strong>working with Big Segments</strong></summary>

A "big segment" is a segment that is either a synced segment, or a list-based segment with more than 15,000 entries that includes only one targeted context kind. LaunchDarkly uses different implementations for different types of segments so that all of your segments have good performance.

The following semantic patch instructions apply only to these [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments).

#### addBigSegmentExcludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets excluded from the segment. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addBigSegmentExcludedTargets",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### addBigSegmentIncludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Adds context keys to the context targets included in the segment. Returns an error if this causes the same context key to be both included and excluded.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addBigSegmentIncludedTargets",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### processBigSegmentImport

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Processes a segment import.

##### Parameters

- `importId`: The ID of the import. The import ID is returned in the `Location` header as part of the [Create big segment import](https://launchdarkly.com/docs/api/segments/create-big-segment-import) request.

Here's an example:

```json
{
  "instructions": [{
    "kind": "processBigSegmentImport",
    "importId": "a902ef4a-2faf-4eaf-88e1-ecc356708a29"
  }]
}
```


#### removeBigSegmentExcludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets excluded from the segment.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeBigSegmentExcludedTargets",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

#### removeBigSegmentIncludedTargets

For use with [larger list-based segments](https://launchdarkly.com/docs/home/flags/segments-create#create-larger-list-based-segments) ONLY. Removes context keys from the context targets included in the segment.

##### Parameters

- `values`: List of context keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeBigSegmentIncludedTargets",
    "values": [ "org-key-123abc", "org-key-456def" ]
  }]
}
```

</details>

### Using JSON patches on a segment

If you do not include the header described above, you can use a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.

For example, to update the description for a segment with a JSON patch, use the following request body:

```json
{
  "patch": [
    {
      "op": "replace",
      "path": "/description",
      "value": "new description"
    }
  ]
}
```

To update fields in the segment that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add the new entry to the beginning of the array. Use `/-` to add the new entry to the end of the array.

For example, to add a rule to a segment, use the following request body:

```json
{
  "patch":[
    {
      "op": "add",
      "path": "/rules/0",
      "value": {
        "clauses": [{ "contextKind": "user", "attribute": "email", "op": "endsWith", "values": [".edu"], "negate": false }]
      }
    }
  ]
}
```

To add or remove targets from segments, we recommend using semantic patch. Semantic patch for segments includes specific instructions for adding and removing both included and excluded targets.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.patch({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    patchWithComment: {
      patch: [
        {
          op: "replace",
          path: "/description",
          value: "New description for this segment",
        },
        {
          op: "add",
          path: "/tags/0",
          value: "example",
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsPatch } from "@launchdarkly/mcp-server/funcs/segmentsPatch.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsPatch(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    patchWithComment: {
      patch: [
        {
          op: "replace",
          path: "/description",
          value: "New description for this segment",
        },
        {
          op: "add",
          path: "/tags/0",
          value: "example",
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchSegmentRequest](../../models/operations/patchsegmentrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.UserSegment](../../models/components/usersegment.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## delete

Delete a segment.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.segments.delete({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsDelete } from "@launchdarkly/mcp-server/funcs/segmentsDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsDelete(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSegmentRequest](../../models/operations/deletesegmentrequest.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## updateContextTargets

Update context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.segments.updateContextTargets({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    segmentUserState: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsUpdateContextTargets } from "@launchdarkly/mcp-server/funcs/segmentsUpdateContextTargets.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsUpdateContextTargets(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    segmentUserState: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBigSegmentContextTargetsRequest](../../models/operations/updatebigsegmentcontexttargetsrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getMembershipForContext

Get the membership status (included/excluded) for a given context in this big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.getMembershipForContext({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    contextKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGetMembershipForContext } from "@launchdarkly/mcp-server/funcs/segmentsGetMembershipForContext.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGetMembershipForContext(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    contextKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSegmentMembershipForContextRequest](../../models/operations/getsegmentmembershipforcontextrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BigSegmentTarget](../../models/components/bigsegmenttarget.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## createBigExport

Starts a new export process for a big segment. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.segments.createBigExport({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsCreateBigExport } from "@launchdarkly/mcp-server/funcs/segmentsCreateBigExport.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsCreateBigExport(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBigSegmentExportRequest](../../models/operations/createbigsegmentexportrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getExport

Returns information about a big segment export process. This is an export for a synced segment or a list-based segment that can include more than 15,000 entries.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.getExport({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    exportID: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGetExport } from "@launchdarkly/mcp-server/funcs/segmentsGetExport.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGetExport(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    exportID: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBigSegmentExportRequest](../../models/operations/getbigsegmentexportrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Export](../../models/components/export.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## createBigImport

Start a new import process for a big segment. This is an import for a list-based segment that can include more than 15,000 entries.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.segments.createBigImport({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    requestBody: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsCreateBigImport } from "@launchdarkly/mcp-server/funcs/segmentsCreateBigImport.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsCreateBigImport(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    requestBody: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateBigSegmentImportRequest](../../models/operations/createbigsegmentimportrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getImport

Returns information about a big segment import process. This is the import of a list-based segment that can include more than 15,000 entries.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.getImport({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    importID: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGetImport } from "@launchdarkly/mcp-server/funcs/segmentsGetImport.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGetImport(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    importID: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetBigSegmentImportRequest](../../models/operations/getbigsegmentimportrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Import](../../models/components/import.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## updateBigTargets

Update user context targets included or excluded in a big segment. Big segments include larger list-based segments and synced segments. This operation does not support standard segments.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.segments.updateBigTargets({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    segmentUserState: {},
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsUpdateBigTargets } from "@launchdarkly/mcp-server/funcs/segmentsUpdateBigTargets.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsUpdateBigTargets(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    segmentUserState: {},
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateBigSegmentTargetsRequest](../../models/operations/updatebigsegmenttargetsrequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getMembershipForUser

> ### Contexts are now available
>
> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Get the membership status (included/excluded) for a given user in this big segment. This operation does not support standard segments.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.getMembershipForUser({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    userKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGetMembershipForUser } from "@launchdarkly/mcp-server/funcs/segmentsGetMembershipForUser.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGetMembershipForUser(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    userKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSegmentMembershipForUserRequest](../../models/operations/getsegmentmembershipforuserrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BigSegmentTarget](../../models/components/bigsegmenttarget.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getExpiringTargets

Get a list of a segment's context targets that are scheduled for removal.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.getExpiringTargets({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGetExpiringTargets } from "@launchdarkly/mcp-server/funcs/segmentsGetExpiringTargets.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGetExpiringTargets(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExpiringTargetsForSegmentRequest](../../models/operations/getexpiringtargetsforsegmentrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExpiringTargetGetResponse](../../models/components/expiringtargetgetresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patchExpiringTargets


Update expiring context targets for a segment. Updating a context target expiration uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring context targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring context targets</strong></summary>

#### addExpiringTarget

Schedules a date and time when LaunchDarkly will remove a context from segment targeting. The segment must already have the context as an individual target.

##### Parameters

- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.
- `contextKey`: The context key.
- `contextKind`: The kind of context being targeted.
- `value`: The date when the context should expire from the segment targeting, in Unix milliseconds.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addExpiringTarget",
    "targetType": "included",
    "contextKey": "user-key-123abc",
    "contextKind": "user",
    "value": 1754092860000
  }]
}
```

#### updateExpiringTarget

Updates the date and time when LaunchDarkly will remove a context from segment targeting.

##### Parameters

- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.
- `contextKey`: The context key.
- `contextKind`: The kind of context being targeted.
- `value`: The new date when the context should expire from the segment targeting, in Unix milliseconds.
- `version`: (Optional) The version of the expiring target to update. If included, update will fail if version doesn't match current version of the expiring target.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateExpiringTarget",
    "targetType": "included",
    "contextKey": "user-key-123abc",
    "contextKind": "user",
    "value": 1754179260000
  }]
}
```

#### removeExpiringTarget

Removes the scheduled expiration for the context in the segment.

##### Parameters

- `targetType`: The type of individual target for this context. Must be either `included` or `excluded`.
- `contextKey`: The context key.
- `contextKind`: The kind of context being targeted.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeExpiringTarget",
    "targetType": "included",
    "contextKey": "user-key-123abc",
    "contextKind": "user",
  }]
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
  const result = await launchDarkly.segments.patchExpiringTargets({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    patchSegmentExpiringTargetInputRep: {
      comment: "optional comment",
      instructions: [
        {
          kind: "updateExpiringTarget",
          contextKey: "user@email.com",
          contextKind: "user",
          targetType: "included",
          value: 1587582000000,
          version: 0,
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsPatchExpiringTargets } from "@launchdarkly/mcp-server/funcs/segmentsPatchExpiringTargets.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsPatchExpiringTargets(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    patchSegmentExpiringTargetInputRep: {
      comment: "optional comment",
      instructions: [
        {
          kind: "updateExpiringTarget",
          contextKey: "user@email.com",
          contextKind: "user",
          targetType: "included",
          value: 1587582000000,
          version: 0,
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchExpiringTargetsForSegmentRequest](../../models/operations/patchexpiringtargetsforsegmentrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExpiringTargetPatchResponse](../../models/components/expiringtargetpatchresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getExpiringUserTargets

> ### Contexts are now available
>
> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Get expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/get-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Get a list of a segment's user targets that are scheduled for removal.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.getExpiringUserTargets({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsGetExpiringUserTargets } from "@launchdarkly/mcp-server/funcs/segmentsGetExpiringUserTargets.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsGetExpiringUserTargets(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetExpiringUserTargetsForSegmentRequest](../../models/operations/getexpiringusertargetsforsegmentrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExpiringUserTargetGetResponse](../../models/components/expiringusertargetgetresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patchExpiringUserTargets


> ### Contexts are now available
>
> After you have upgraded your LaunchDarkly SDK to use contexts instead of users, you should use [Update expiring targets for segment](https://launchdarkly.com/docs/ld-docs/api/segments/patch-expiring-targets-for-segment) instead of this endpoint. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

Update expiring user targets for a segment. Updating a user target expiration uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

If the request is well-formed but any of its instructions failed to process, this operation returns status code `200`. In this case, the response `errors` array will be non-empty.

### Instructions

Semantic patch requests support the following `kind` instructions for updating expiring user targets.

<details>
<summary>Click to expand instructions for <strong>updating expiring user targets</strong></summary>

#### addExpireUserTargetDate

Schedules a date and time when LaunchDarkly will remove a user from segment targeting.

##### Parameters

- `targetType`: A segment's target type, must be either `included` or `excluded`.
- `userKey`: The user key.
- `value`: The date when the user should expire from the segment targeting, in Unix milliseconds.

#### updateExpireUserTargetDate

Updates the date and time when LaunchDarkly will remove a user from segment targeting.

##### Parameters

- `targetType`: A segment's target type, must be either `included` or `excluded`.
- `userKey`: The user key.
- `value`: The new date when the user should expire from the segment targeting, in Unix milliseconds.
- `version`: The segment version.

#### removeExpireUserTargetDate

Removes the scheduled expiration for the user in the segment.

##### Parameters

- `targetType`: A segment's target type, must be either `included` or `excluded`.
- `userKey`: The user key.

</details>


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.segments.patchExpiringUserTargets({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    patchSegmentRequest: {
      comment: "optional comment",
      instructions: [
        {
          kind: "removeExpireUserTargetDate",
          userKey: "<value>",
          targetType: "included",
          value: 1587582000000,
          version: 0,
        },
      ],
    },
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { segmentsPatchExpiringUserTargets } from "@launchdarkly/mcp-server/funcs/segmentsPatchExpiringUserTargets.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await segmentsPatchExpiringUserTargets(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    patchSegmentRequest: {
      comment: "optional comment",
      instructions: [
        {
          kind: "removeExpireUserTargetDate",
          userKey: "<value>",
          targetType: "included",
          value: 1587582000000,
          version: 0,
        },
      ],
    },
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result);
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchExpiringUserTargetsForSegmentRequest](../../models/operations/patchexpiringusertargetsforsegmentrequest.md)                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExpiringUserTargetPatchResponse](../../models/components/expiringusertargetpatchresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |