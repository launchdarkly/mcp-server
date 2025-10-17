# FeatureFlags
(*featureFlags*)

## Overview

### Available Operations

* [getStatus](#getstatus) - Get flag status across environments
* [list](#list) - List feature flags
* [create](#create) - Create a feature flag
* [get](#get) - Get feature flag
* [patch](#patch) - Update feature flag
* [delete](#delete) - Delete feature flag

## getStatus

Get the status for a particular feature flag across environments.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFeatureFlagStatusAcrossEnvironments" method="get" path="/api/v2/flag-status/{projectKey}/{featureFlagKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.getStatus({
    projectKey: "<value>",
    featureFlagKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { featureFlagsGetStatus } from "@launchdarkly/mcp-server/funcs/featureFlagsGetStatus.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await featureFlagsGetStatus(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("featureFlagsGetStatus failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFeatureFlagStatusAcrossEnvironmentsRequest](../../models/operations/getfeatureflagstatusacrossenvironmentsrequest.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeatureFlagStatusAcrossEnvironments](../../models/components/featureflagstatusacrossenvironments.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## list

Get a list of all feature flags in the given project. You can include information specific to different environments by adding `env` query parameter. For example, setting `env=production` adds configuration details about your production environment to the response. You can also filter feature flags by tag with the `tag` query parameter.

> #### Recommended use
>
> This endpoint can return a large amount of information. We recommend using some or all of these query parameters to decrease response time and overall payload size: `limit`, `env`, `query`, and `filter=creationDate`.

### Filtering flags

You can filter on certain fields using the `filter` query parameter. For example, setting `filter=query:dark-mode,tags:beta+test` matches flags with the string `dark-mode` in their key or name, ignoring case, which also have the tags `beta` and `test`.

The `filter` query parameter supports the following arguments:

| Filter argument       | Description | Example              |
|-----------------------|-------------|----------------------|
| `applicationEvaluated`  | A string. It filters the list to flags that are evaluated in the application with the given key. | `filter=applicationEvaluated:com.launchdarkly.cafe` |
| `archived`              | (deprecated) A boolean value. It filters the list to archived flags. | Use `filter=state:archived` instead |
| `contextKindsEvaluated` | A `+`-separated list of context kind keys. It filters the list to flags which have been evaluated in the past 30 days for all of the context kinds in the list. | `filter=contextKindsEvaluated:user+application` |
| `codeReferences.max`    | An integer value. Use `0` to return flags that do not have code references. | `filter=codeReferences.max:0` |
| `codeReferences.min`    | An integer value. Use `1` to return flags that do have code references. | `filter=codeReferences.min:1` |
| `creationDate`          | An object with an optional `before` field whose value is Unix time in milliseconds. It filters the list to flags created before the date. | `filter=creationDate:{"before":1690527600000}` |
| `evaluated`             | An object that contains a key of `after` and a value in Unix time in milliseconds. It filters the list to all flags that have been evaluated since the time you specify, in the environment provided. This filter requires the `filterEnv` filter. | `filter=evaluated:{"after":1690527600000},filterEnv:production` |
| `filterEnv`             | A valid environment key. You must use this field for filters that are environment-specific. If there are multiple environment-specific filters, you only need to include this field once. | `filter=evaluated:{"after": 1590768455282},filterEnv:production` |
| `guardedRollout` | A string, one of `any`, `monitoring`, `regressed`, `rolledBack`, `completed`, `archived`. It filters the list to flags that are part of guarded rollouts. | `filter=guardedRollout:monitoring` |
| `hasExperiment`         | A boolean value. It filters the list to flags that are used in an experiment. | `filter=hasExperiment:true` |
| `maintainerId`          | A valid member ID. It filters the list to flags that are maintained by this member. | `filter=maintainerId:12ab3c45de678910abc12345` |
| `maintainerTeamKey`     | A string. It filters the list to flags that are maintained by the team with this key. | `filter=maintainerTeamKey:example-team-key` |
| `query`                 | A string. It filters the list to flags that include the specified string in their key or name. It is not case sensitive. | `filter=query:example` |
| `releasePipeline`       | A release pipeline key. It filters the list to flags that are either currently active in the release pipeline or have completed the release pipeline. | `filter=releasePipeline:default-release-pipeline` |
| `state`                 | A string, either `live`, `deprecated`, or `archived`. It filters the list to flags in this state. | `filter=state:archived` |
| `sdkAvailability`       | A string, one of `client`, `mobile`, `anyClient`, `server`. Using `client` filters the list to flags whose client-side SDK availability is set to use the client-side ID. Using `mobile` filters to flags set to use the mobile key. Using `anyClient` filters to flags set to use either the client-side ID or the mobile key. Using `server` filters to flags set to use neither, that is, to flags only available in server-side SDKs.  | `filter=sdkAvailability:client` |
| `tags`                  | A `+`-separated list of tags. It filters the list to flags that have all of the tags in the list. | `filter=tags:beta+test` |
| `type`                  | A string, either `temporary` or `permanent`. It filters the list to flags with the specified type. | `filter=type:permanent` |

The documented values for the `filter` query are prior to URL encoding. For example, the `+` in `filter=tags:beta+test` must be encoded to `%2B`.

By default, this endpoint returns all flags. You can page through the list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links will not be present if the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page.

### Sorting flags

You can sort flags based on the following fields:

- `creationDate` sorts by the creation date of the flag.
- `key` sorts by the key of the flag.
- `maintainerId` sorts by the flag maintainer.
- `name` sorts by flag name.
- `tags` sorts by tags.
- `targetingModifiedDate` sorts by the date that the flag's targeting rules were last modified in a given environment. It must be used with `env` parameter and it can not be combined with any other sort. If multiple `env` values are provided, it will perform sort using the first one. For example, `sort=-targetingModifiedDate&env=production&env=staging` returns results sorted by `targetingModifiedDate` for the `production` environment.
- `type` sorts by flag type

All fields are sorted in ascending order by default. To sort in descending order, prefix the field with a dash ( - ). For example, `sort=-name` sorts the response by flag name in descending order.

### Expanding response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `codeReferences` includes code references for the feature flag
- `evaluation` includes evaluation information within returned environments, including which context kinds the flag has been evaluated for in the past 30 days
- `migrationSettings` includes migration settings information within the flag and within returned environments. These settings are only included for migration flags, that is, where `purpose` is `migration`.

For example, `expand=evaluation` includes the `evaluation` field in the response.

### Migration flags
For migration flags, the cohort information is included in the `rules` property of a flag's response, and default cohort information is included in the `fallthrough` property of a flag's response.
To learn more, read [Migration Flags](https://launchdarkly.com/docs/home/flags/migration).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFeatureFlags" method="get" path="/api/v2/flags/{projectKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.list({
    projectKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { featureFlagsList } from "@launchdarkly/mcp-server/funcs/featureFlagsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await featureFlagsList(launchDarkly, {
    projectKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("featureFlagsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFeatureFlagsRequest](../../models/operations/getfeatureflagsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeatureFlags](../../models/components/featureflags.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## create

Create a feature flag with the given name, key, and variations.

<details>
<summary>Click to expand instructions for <strong>creating a migration flag</strong></summary>

### Creating a migration flag

When you create a migration flag, the variations are pre-determined based on the number of stages in the migration.

To create a migration flag, omit the `variations` and `defaults` information. Instead, provide a `purpose` of `migration`, and `migrationSettings`. If you create a migration flag with six stages, `contextKind` is required. Otherwise, it should be omitted.

Here's an example:

```json
{
  "key": "flag-key-123",
  "purpose": "migration",
  "migrationSettings": {
    "stageCount": 6,
    "contextKind": "account"
  }
}
```

To learn more, read [Migration Flags](https://launchdarkly.com/docs/home/flags/migration).

</details>


### Example Usage

<!-- UsageSnippet language="typescript" operationID="postFeatureFlag" method="post" path="/api/v2/flags/{projectKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.create({
    projectKey: "<value>",
    featureFlagBody: {
      name: "My Flag",
      key: "flag-key-123abc",
      clientSideAvailability: {
        usingEnvironmentId: true,
        usingMobileKey: true,
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
import { featureFlagsCreate } from "@launchdarkly/mcp-server/funcs/featureFlagsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await featureFlagsCreate(launchDarkly, {
    projectKey: "<value>",
    featureFlagBody: {
      name: "My Flag",
      key: "flag-key-123abc",
      clientSideAvailability: {
        usingEnvironmentId: true,
        usingMobileKey: true,
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("featureFlagsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostFeatureFlagRequest](../../models/operations/postfeatureflagrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeatureFlag](../../models/components/featureflag.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Get a single feature flag by key. By default, this returns the configurations for all environments. You can filter environments with the `env` query parameter. For example, setting `env=production` restricts the returned configurations to just the `production` environment.

> #### Recommended use
>
> This endpoint can return a large amount of information. Specifying one or multiple environments with the `env` parameter can decrease response time and overall payload size. We recommend using this parameter to return only the environments relevant to your query.

### Expanding response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `evaluation` includes evaluation information within returned environments, including which context kinds the flag has been evaluated for in the past 30 days 
- `migrationSettings` includes migration settings information within the flag and within returned environments. These settings are only included for migration flags, that is, where `purpose` is `migration`.

For example, `expand=evaluation` includes the `evaluation` field in the response.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="getFeatureFlag" method="get" path="/api/v2/flags/{projectKey}/{featureFlagKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.get({
    projectKey: "<value>",
    featureFlagKey: "<value>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { featureFlagsGet } from "@launchdarkly/mcp-server/funcs/featureFlagsGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await featureFlagsGet(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("featureFlagsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetFeatureFlagRequest](../../models/operations/getfeatureflagrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeatureFlag](../../models/components/featureflag.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patch

Perform a partial update to a feature flag. The request body must be a valid semantic patch, JSON patch, or JSON merge patch. To learn more the different formats, read [Updates](https://launchdarkly.com/docs/api#updates).

### Using semantic patches on a feature flag

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

The body of a semantic patch request for updating feature flags takes the following properties:

* `comment` (string): (Optional) A description of the update.
* `environmentKey` (string): (Required for some instructions only) The key of the LaunchDarkly environment.
* `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the action requires parameters, you must include those parameters as additional fields in the object. The body of a single semantic patch can contain many different instructions.

### Instructions

Semantic patch requests support the following `kind` instructions for updating feature flags.

<details>
<summary>Click to expand instructions for <strong>turning flags on and off</strong></summary>

These instructions require the `environmentKey` parameter.

#### turnFlagOff

Sets the flag's targeting state to **Off**.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "turnFlagOff" } ]
}
```

#### turnFlagOn

Sets the flag's targeting state to **On**.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "turnFlagOn" } ]
}
```

</details><br />

<details>
<summary>Click to expand instructions for <strong>working with targeting and variations</strong></summary>

These instructions require the `environmentKey` parameter.

Several of the instructions for working with targeting and variations require flag rule IDs, variation IDs, or clause IDs as parameters. Each of these are returned as part of the [Get feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. The flag rule ID is the `_id` field of each element in the `rules` array within each environment listed in the `environments` object. The variation ID is the `_id` field in each element of the `variations` array. The clause ID is the `_id` field of each element of the `clauses` array within the `rules` array within each environment listed in the `environments` object.

#### addClauses

Adds the given clauses to the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the flag.
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

#### addPrerequisite

Adds the flag indicated by `key` with variation `variationId` as a prerequisite to the flag in the path parameter.

##### Parameters

- `key`: Flag key of the prerequisite flag.
- `variationId`: ID of a variation of the prerequisite flag.

Here's an example:

```json
{
	"environmentKey": "environment-key-123abc",
	"instructions": [{
		"kind": "addPrerequisite",
		"key": "example-prereq-flag-key",
		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
	}]
}
```

#### addRule

Adds a new targeting rule to the flag. The rule may contain `clauses` and serve the variation that `variationId` indicates, or serve a percentage rollout that `rolloutWeights`, `rolloutBucketBy`, and `rolloutContextKind` indicate.

If you set `beforeRuleId`, this adds the new rule before the indicated rule. Otherwise, adds the new rule to the end of the list.

##### Parameters

- `clauses`: Array of clause objects, with `contextKind` (string), `attribute` (string), `op` (string), `negate` (boolean), and `values` (array of strings, numbers, or dates) properties. The `contextKind`, `attribute`, and `values` are case sensitive. The `op` must be lower-case.
- `beforeRuleId`: (Optional) ID of a flag rule.
- Either
  - `variationId`: ID of a variation of the flag.

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

Adds context keys to the individual context targets for the context kind that `contextKind` specifies and the variation that `variationId` specifies. Returns an error if this causes the flag to target the same context key in multiple variations.

##### Parameters

- `values`: List of context keys.
- `contextKind`: (Optional) Context kind to target, defaults to `user`
- `variationId`: ID of a variation on the flag.

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

#### addUserTargets

Adds user keys to the individual user targets for the variation that `variationId` specifies. Returns an error if this causes the flag to target the same user key in multiple variations. If you are working with contexts, use `addTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.
- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
	"environmentKey": "environment-key-123abc",
	"instructions": [{
		"kind": "addUserTargets",
		"values": ["user-key-123abc", "user-key-456def"],
		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
	}]
}
```

#### addValuesToClause

Adds `values` to the values of the clause that `ruleId` and `clauseId` indicate. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the flag.
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

#### addVariation

Adds a variation to the flag.

##### Parameters

- `value`: The variation value.
- `name`: (Optional) The variation name.
- `description`: (Optional) A description for the variation.

Here's an example:

```json
{
	"instructions": [ { "kind": "addVariation", "value": 20, "name": "New variation" } ]
}
```

#### clearTargets

Removes all individual targets from the variation that `variationId` specifies. This includes both user and non-user targets.

##### Parameters

- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "clearTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
}
```

#### clearUserTargets

Removes all individual user targets from the variation that `variationId` specifies. If you are working with contexts, use `clearTargets` instead of this instruction.

##### Parameters

- `variationId`: ID of a variation on the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "clearUserTargets", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
}
```

#### removeClauses

Removes the clauses specified by `clauseIds` from the rule indicated by `ruleId`.

##### Parameters

- `ruleId`: ID of a rule in the flag.
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

#### removePrerequisite

Removes the prerequisite flag indicated by `key`. Does nothing if this prerequisite does not exist.

##### Parameters

- `key`: Flag key of an existing prerequisite flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "removePrerequisite", "key": "prereq-flag-key-123abc" } ]
}
```

#### removeRule

Removes the targeting rule specified by `ruleId`. Does nothing if the rule does not exist.

##### Parameters

- `ruleId`: ID of a rule in the flag.

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
- `variationId`: ID of a flag variation.

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

#### removeUserTargets

Removes user keys from the individual user targets for the variation that `variationId` specifies. Does nothing if the flag does not target the user keys. If you are working with contexts, use `removeTargets` instead of this instruction.

##### Parameters

- `values`: List of user keys.
- `variationId`: ID of a flag variation.

Here's an example:

```json
{
	"environmentKey": "environment-key-123abc",
	"instructions": [{
		"kind": "removeUserTargets",
		"values": ["user-key-123abc", "user-key-456def"],
		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
	}]
}
```

#### removeValuesFromClause

Removes `values` from the values of the clause indicated by `ruleId` and `clauseId`. Does not update the context kind, attribute, or operator.

##### Parameters

- `ruleId`: ID of a rule in the flag.
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

#### removeVariation

Removes a variation from the flag.

##### Parameters

- `variationId`: ID of a variation of the flag to remove.

Here's an example:

```json
{
	"instructions": [ { "kind": "removeVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
}
```

#### reorderRules

Rearranges the rules to match the order given in `ruleIds`. Returns an error if `ruleIds` does not match the current set of rules on the flag.

##### Parameters

- `ruleIds`: Array of IDs of all rules in the flag.

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

#### replacePrerequisites

Removes all existing prerequisites and replaces them with the list you provide.

##### Parameters

- `prerequisites`: A list of prerequisites. Each item in the list must include a flag `key` and `variationId`.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "replacePrerequisites",
      "prerequisites": [
        {
          "key": "prereq-flag-key-123abc",
          "variationId": "10a58772-3121-400f-846b-b8a04e8944ed"
        },
        {
          "key": "another-prereq-flag-key-456def",
          "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43"
        }
      ]
    }
  ]
}
```

#### replaceRules

Removes all targeting rules for the flag and replaces them with the list you provide.

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
          ],
          "trackEvents": true
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

#### replaceUserTargets

Removes all existing user targeting and replaces it with the list of targets you provide. In the list of targets, you must include a target for each of the flag's variations. If you are working with contexts, use `replaceTargets` instead of this instruction.

##### Parameters

- `targets`: A list of user targeting. Each item in the list must include a `variationId` and a list of `values`.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [
    {
      "kind": "replaceUserTargets",
      "targets": [
        {
          "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00",
          "values": ["user-key-123abc", "user-key-456def"]
        },
        {
          "variationId": "e5830889-1ec5-4b0c-9cc9-c48790090c43",
          "values": ["user-key-789ghi"]
        }
      ]
    }
  ]
}
```

#### updateClause

Replaces the clause indicated by `ruleId` and `clauseId` with `clause`.

##### Parameters

- `ruleId`: ID of a rule in the flag.
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

Updates the default on or off variation of the flag.

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

Updates the default or "fallthrough" rule for the flag, which the flag serves when a context matches none of the targeting rules. The rule can serve either the variation that `variationId` indicates, or a percentage rollout that `rolloutWeights` and `rolloutBucketBy` indicate.

##### Parameters

- `variationId`: ID of a variation of the flag.

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

Updates the default off variation to `variationId`. The flag serves the default off variation when the flag's targeting is **Off**.

##### Parameters

- `variationId`: ID of a variation of the flag.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "updateOffVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00" } ]
}
```

#### updatePrerequisite

Changes the prerequisite flag that `key` indicates to use the variation that `variationId` indicates. Returns an error if this prerequisite does not exist.

##### Parameters

- `key`: Flag key of an existing prerequisite flag.
- `variationId`: ID of a variation of the prerequisite flag.

Here's an example:

```json
{
	"environmentKey": "environment-key-123abc",
	"instructions": [{
		"kind": "updatePrerequisite",
		"key": "example-prereq-flag-key",
		"variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00"
	}]
}
```

#### updateRuleDescription

Updates the description of the feature flag rule.

##### Parameters

- `description`: The new human-readable description for this rule.
- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the flag.

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

Updates whether or not LaunchDarkly tracks events for the feature flag associated with this rule.

##### Parameters

- `ruleId`: The ID of the rule. You can retrieve this by making a GET request for the flag.
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

- `ruleId`: ID of a rule in the flag.
- `variationId`: ID of a variation of the flag.

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

Updates whether or not LaunchDarkly tracks events for the feature flag, for all rules.

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

Updates whether or not LaunchDarkly tracks events for the feature flag, for the default rule.

##### Parameters

- `trackEvents`: Whether or not events are tracked.

Here's an example:

```json
{
  "environmentKey": "environment-key-123abc",
  "instructions": [ { "kind": "updateTrackEventsFallthrough", "trackEvents": true } ]
}
```

#### updateVariation

Updates a variation of the flag.

##### Parameters

- `variationId`: The ID of the variation to update.
- `name`: (Optional) The updated variation name.
- `value`: (Optional) The updated variation value.
- `description`: (Optional) The updated variation description.

Here's an example:

```json
{
	"instructions": [ { "kind": "updateVariation", "variationId": "2f43f67c-3e4e-4945-a18a-26559378ca00", "value": 20 } ]
}
```

</details><br />

<details>
<summary>Click to expand instructions for <strong>updating flag settings</strong></summary>

These instructions do not require the `environmentKey` parameter. They make changes that apply to the flag across all environments.

#### addCustomProperties

Adds a new custom property to the feature flag. Custom properties are used to associate feature flags with LaunchDarkly integrations. For example, if you create an integration with an issue tracking service, you may want to associate a flag with a list of issues related to a feature's development.

##### Parameters

 - `key`: The custom property key.
 - `name`: The custom property name.
 - `values`: A list of the associated values for the custom property.

Here's an example:

```json
{
	"instructions": [{
		"kind": "addCustomProperties",
		"key": "example-custom-property",
		"name": "Example custom property",
		"values": ["value1", "value2"]
	}]
}
```

#### addTags

Adds tags to the feature flag.

##### Parameters

- `values`: A list of tags to add.

Here's an example:

```json
{
  "instructions": [ { "kind": "addTags", "values": ["tag1", "tag2"] } ]
}
```

#### makeFlagPermanent

Marks the feature flag as permanent. LaunchDarkly does not prompt you to remove permanent flags, even if one variation is rolled out to all your customers.

Here's an example:

```json
{
  "instructions": [ { "kind": "makeFlagPermanent" } ]
}
```

#### makeFlagTemporary

Marks the feature flag as temporary.

Here's an example:

```json
{
  "instructions": [ { "kind": "makeFlagTemporary" } ]
}
```

#### removeCustomProperties

Removes the associated values from a custom property. If all the associated values are removed, this instruction also removes the custom property.

##### Parameters

 - `key`: The custom property key.
 - `values`: A list of the associated values to remove from the custom property.

```json
{
	"instructions": [{
		"kind": "replaceCustomProperties",
		"key": "example-custom-property",
		"values": ["value1", "value2"]
	}]
}
```

#### removeMaintainer

Removes the flag's maintainer. To set a new maintainer, use the `updateMaintainerMember` or `updateMaintainerTeam` instructions.

Here's an example:

```json
{
  "instructions": [ { "kind": "removeMaintainer" } ]
}
```

#### removeTags

Removes tags from the feature flag.

##### Parameters

- `values`: A list of tags to remove.

Here's an example:

```json
{
  "instructions": [ { "kind": "removeTags", "values": ["tag1", "tag2"] } ]
}
```

#### replaceCustomProperties

Replaces the existing associated values for a custom property with the new values.

##### Parameters

 - `key`: The custom property key.
 - `name`: The custom property name.
 - `values`: A list of the new associated values for the custom property.

Here's an example:

```json
{
 "instructions": [{
   "kind": "replaceCustomProperties",
   "key": "example-custom-property",
   "name": "Example custom property",
   "values": ["value1", "value2"]
 }]
}
```

#### turnOffClientSideAvailability

Turns off client-side SDK availability for the flag. This is equivalent to unchecking the **SDKs using Mobile key** and/or **SDKs using Client-side ID** boxes for the flag. If you're using a client-side or mobile SDK, you must expose your feature flags in order for the client-side or mobile SDKs to evaluate them.

##### Parameters

- `value`: Use "usingMobileKey" to turn off availability for mobile SDKs. Use "usingEnvironmentId" to turn on availability for client-side SDKs.

Here's an example:

```json
{
  "instructions": [ { "kind": "turnOffClientSideAvailability", "value": "usingMobileKey" } ]
}
```

#### turnOnClientSideAvailability

Turns on client-side SDK availability for the flag. This is equivalent to checking the **SDKs using Mobile key** and/or **SDKs using Client-side ID** boxes for the flag. If you're using a client-side or mobile SDK, you must expose your feature flags in order for the client-side or mobile SDKs to evaluate them.

##### Parameters

- `value`: Use "usingMobileKey" to turn on availability for mobile SDKs. Use "usingEnvironmentId" to turn on availability for client-side SDKs.

Here's an example:

```json
{
  "instructions": [ { "kind": "turnOnClientSideAvailability", "value": "usingMobileKey" } ]
}
```

#### updateDescription

Updates the feature flag description.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "instructions": [ { "kind": "updateDescription", "value": "Updated flag description" } ]
}
```
#### updateMaintainerMember

Updates the maintainer of the flag to an existing member and removes the existing maintainer.

##### Parameters

- `value`: The ID of the member.

Here's an example:

```json
{
  "instructions": [ { "kind": "updateMaintainerMember", "value": "61e9b714fd47591727db558a" } ]
}
```

#### updateMaintainerTeam

Updates the maintainer of the flag to an existing team and removes the existing maintainer.

##### Parameters

- `value`: The key of the team.

Here's an example:

```json
{
  "instructions": [ { "kind": "updateMaintainerTeam", "value": "example-team-key" } ]
}
```

#### updateName

Updates the feature flag name.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "instructions": [ { "kind": "updateName", "value": "Updated flag name" } ]
}
```

</details><br />

<details>
<summary>Click to expand instructions for <strong>updating the flag lifecycle</strong></summary>

These instructions do not require the `environmentKey` parameter. They make changes that apply to the flag across all environments.

#### archiveFlag

Archives the feature flag. This retires it from LaunchDarkly without deleting it. You cannot archive a flag that is a prerequisite of other flags.

```json
{
  "instructions": [ { "kind": "archiveFlag" } ]
}
```

#### deleteFlag

Deletes the feature flag and its rules. You cannot restore a deleted flag. If this flag is requested again, the flag value defined in code will be returned for all contexts.

Here's an example:

```json
{
  "instructions": [ { "kind": "deleteFlag" } ]
}
```

#### deprecateFlag

Deprecates the feature flag. This hides it from the live flags list without archiving or deleting it.

Here's an example:

```json
{
  "instructions": [ { "kind": "deprecateFlag" } ]
}
```

#### restoreDeprecatedFlag

Restores the feature flag if it was previously deprecated.

Here's an example:

```json
{
  "instructions": [ { "kind": "restoreDeprecatedFlag" } ]
}
```

#### restoreFlag

Restores the feature flag if it was previously archived.

Here's an example:

```json
{
  "instructions": [ { "kind": "restoreFlag" } ]
}
```

</details>

### Using JSON patches on a feature flag

If you do not include the semantic patch header described above, you can use a [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) or [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) representation of the desired changes.

In the JSON patch representation, use a JSON pointer in the `path` element to describe what field to change. Use the [Get feature flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) endpoint to find the field you want to update.

There are a few special cases to keep in mind when determining the value of the `path` element:

  * To add an individual target to a specific variation if the flag variation already has individual targets, the path for the JSON patch operation is:

  ```json
  [
    {
      "op": "add",
      "path": "/environments/devint/targets/0/values/-",
      "value": "TestClient10"
    }
  ]
  ```

  * To add an individual target to a specific variation if the flag variation does not already have individual targets, the path for the JSON patch operation is:

  ```json
  [
    {
      "op": "add",
      "path": "/environments/devint/targets/-",
      "value": { "variation": 0, "values": ["TestClient10"] }
    }
  ]
  ```

  * To add a flag to a release pipeline, the path for the JSON patch operation is:

  ```json
  [
    {
      "op": "add",
      "path": "/releasePipelineKey",
      "value": "example-release-pipeline-key"
    }
  ]
  ```

### Required approvals
If a request attempts to alter a flag configuration in an environment where approvals are required for the flag, the request will fail with a 405. Changes to the flag configuration in that environment will require creating an [approval request](https://launchdarkly.com/docs/api/approvals) or a [workflow](https://launchdarkly.com/docs/api/workflows).

### Conflicts
If a flag configuration change made through this endpoint would cause a pending scheduled change or approval request to fail, this endpoint will return a 400. You can ignore this check by adding an `ignoreConflicts` query parameter set to `true`.

### Migration flags
For migration flags, the cohort information is included in the `rules` property of a flag's response. You can update cohorts by updating `rules`. Default cohort information is included in the `fallthrough` property of a flag's response. You can update the default cohort by updating `fallthrough`.
When you update the rollout for a cohort or the default cohort through the API, provide a rollout instead of a single `variationId`.
To learn more, read [Migration flags](https://launchdarkly.com/docs/home/flags/migration).


### Example Usage

<!-- UsageSnippet language="typescript" operationID="patchFeatureFlag" method="patch" path="/api/v2/flags/{projectKey}/{featureFlagKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.featureFlags.patch({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    patchWithComment: {
      patch: [
        {
          op: "replace",
          path: "/description",
          value: "New description for this flag",
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
import { featureFlagsPatch } from "@launchdarkly/mcp-server/funcs/featureFlagsPatch.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await featureFlagsPatch(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    patchWithComment: {
      patch: [
        {
          op: "replace",
          path: "/description",
          value: "New description for this flag",
        },
      ],
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("featureFlagsPatch failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PatchFeatureFlagRequest](../../models/operations/patchfeatureflagrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FeatureFlag](../../models/components/featureflag.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.StatusConflictErrorRep   | 409                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## delete

Delete a feature flag in all environments. Use with caution: only delete feature flags your application no longer uses.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteFeatureFlag" method="delete" path="/api/v2/flags/{projectKey}/{featureFlagKey}" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.featureFlags.delete({
    projectKey: "<value>",
    featureFlagKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { featureFlagsDelete } from "@launchdarkly/mcp-server/funcs/featureFlagsDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await featureFlagsDelete(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
  });
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("featureFlagsDelete failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteFeatureFlagRequest](../../models/operations/deletefeatureflagrequest.md)                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |