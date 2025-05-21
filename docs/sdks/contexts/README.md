# Contexts
(*contexts*)

## Overview


Contexts are people, services, machines, or other resources that encounter feature flags in your product. Contexts are identified by their `kind`, which describes the type of resources encountering flags, and by their `key`. Each unique combination of one or more contexts that have encountered a feature flag in your product is called a context instance.

When you use the LaunchDarkly SDK to evaluate a flag, you provide a context to that call. LaunchDarkly records the key and attributes of each context instance. You can view these in the LaunchDarkly user interface from the **Contexts** list, or use the Context APIs. To learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).

LaunchDarkly provides APIs for you to:

* retrieve contexts, context instances, and context attribute names and values
* search for contexts or context instances
* delete context instances
* fetch context kinds
* create and update context kinds

To learn more about context kinds, read [Context kinds](https://launchdarkly.com/docs/home/observability/context-kinds).

Contexts are always scoped within a project and an environment. Each environment has its own set of context instance records.

Several of the endpoints in the contexts API require a context instance ID or application ID. Both of these IDs are returned as part of the [Search for context instances](https://launchdarkly.com/docs/api/contexts/search-context-instances) response. The context instance ID is the `id` field of each element in the `items` array. The application ID is the `applicationId` field of each element in the `items` array. By default, the application ID is set to the SDK you are using. In the LaunchDarkly UI, the application ID and application version appear on the context details page in the "From source" field. You can change the application ID as part of your SDK configuration. To learn more, read [Application metadata configuration](https://launchdarkly.com/docs/sdk/features/app-config).

### Filtering contexts and context instances

When you [search for contexts](https://launchdarkly.com/docs/api/contexts/search-contexts) or [context instances](https://launchdarkly.com/docs/api/contexts/search-context-instances), you can filter on certain fields using the `filter` parameter either as a query parameter or as a request body parameter.

The `filter` parameter supports the following operators: `after`, `anyOf`, `before`, `contains`, `equals`, `exists`, `notEquals`, `startsWith`.

<details>
<summary>Expand for details on operators and syntax</summary>

#### after

Returns contexts or context instances if any of the values in a field, which should be dates, are after the provided time. For example:

* `myField after "2022-09-21T19:03:15+00:00"`

#### anyOf

Returns contexts or context instances if any of the values in a field match any of the values in the match value. For example:

* `myField anyOf [44]`
* `myField anyOf ["phone","tablet"]`
* `myField anyOf [true]"`

#### before

Returns contexts or context instances if any of the values in a field, which should be dates, are before the provided time. For example:

* `myField before "2022-09-21T19:03:15+00:00"`

#### contains

Returns contexts or context instances if all the match values are found in the list of values in this field. For example:

* `myListField contains 44`
* `myListField contains ["phone","tablet"]`
* `myListField contains true`

#### equals

Returns contexts or context instances if there is an exact match on the entire field. For example:

* `myField equals 44`
* `myField equals "device"`
* `myField equals true`
* `myField equals [1,2,3,4]`
* `myField equals ["hello","goodbye"]`

#### exists

Returns contexts or context instances if the field matches the specified existence. For example:

* `myField exists true`
* `myField exists false`
* `*.name exists true`

#### notEquals

Returns contexts or context instances if there is not an exact match on the entire field. For example:

* `myField notEquals 44`
* `myField notEquals "device"`
* `myField notEquals true`
* `myField notEquals [1,2,3,4]`
* `myField notEquals ["hello","goodbye"]`

#### startsWith

Returns contexts or context instances if the value in a field, which should be a singular string, begins with the provided substring. For example:

* `myField startsWith "do"`

</details>

You can also combine filters in the following ways:

* Use a comma (`,`) as an AND operator
* Use a vertical bar (`|`) as an OR operator
* Use parentheses `()` to group filters

For example:

* `myField notEquals 0, myField notEquals 1` returns contexts or context instances where `myField` is not 0 and is not 1
* `myFirstField equals "device",(mySecondField equals "iPhone"|mySecondField equals "iPad")` returns contexts or context instances where `myFirstField` is equal to "device" and `mySecondField` is equal to either "iPhone" or "iPad"

#### Supported fields and operators

You can only filter certain fields in contexts and context instances when using the `filter` parameter. Additionally, you can only filter some fields with certain operators.

When you search for [contexts](https://launchdarkly.com/docs/api/contexts/search-contexts), the `filter` parameter supports the following fields and operators:

|<div style="width:120px">Field</div> |Description |Supported operators |
|---|---|---|
|`applicationId` |An identifier representing the application where the LaunchDarkly SDK is running. |`equals`, `notEquals`, `anyOf` |
|`id` |Unique identifier for the context. |`equals`, `notEquals`, `anyOf` |
|`key` |The context key. |`equals`, `notEquals`, `anyOf`, `startsWith` |
|`kind` |The context kind. |`equals`, `notEquals`, `anyOf` |
|`kinds` |A list of all kinds found in the context. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
|`kindKey` |The kind and key for the context. They are joined with `:`, for example, `user:user-key-abc123`. |`equals`, `notEquals`, `anyOf` |
|`kindKeys` |A list of all kinds and keys found in the context. The kind and key are joined with `:`, for example, `user:user-key-abc123`. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
|`q` |A "fuzzy" search across context attribute values and the context key. Supply a string or list of strings to the operator.  |`equals` |
|`name` |The name for the context. |`equals`, `notEquals`, `exists`, `anyOf`, `startsWith` |
|`<a kind>.<an attribute name>` |A kind and the name of any attribute that appears in a context of that kind, for example, `user.email`. To filter all kinds, use `*` in place of the kind, for example, `*.email`. You can use either a literal attribute name or a JSON path to specify the attribute. If you use a JSON path, then you must escape the `/` character, using `~1`, and the `~` character, using `~0`. For example, use `user.job/title` or `user./job~1title` to filter the `/job/title` field in a user context kind. If the field or value includes whitespace, it should be enclosed in double quotes. |`equals`, `notEquals`, `exists`, `startsWith`, `before`, `after`.|

When searching for [context instances](https://launchdarkly.com/docs/api/contexts/search-context-instances), the `filter` parameter supports the following fields and operators

|<div style="width:120px">Field</div> |Description |Supported operators |
|---|---|---|
|`applicationId` |An identifier representing the application where the LaunchDarkly SDK is running. |`equals`, `notEquals`, `anyOf` |
|`id` |Unique identifier for the context instance. |`equals`, `notEquals`, `anyOf` |
|`kinds` |A list of all kinds found in the context instance. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
|`kindKeys` |A list of all kinds and keys found in the context instance. The kind and key are joined with `:`, for example, `user:user-key-abc123`. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |


### Available Operations

* [getContextKindsByProjectKey](#getcontextkindsbyprojectkey) - Get context kinds
* [putContextKind](#putcontextkind) - Create or update context kind
* [getContextAttributeNames](#getcontextattributenames) - Get context attribute names
* [getContextAttributeValues](#getcontextattributevalues) - Get context attribute values
* [searchContextInstances](#searchcontextinstances) - Search for context instances
* [getContextInstances](#getcontextinstances) - Get context instances
* [deleteContextInstances](#deletecontextinstances) - Delete context instances
* [searchContexts](#searchcontexts) - Search for contexts
* [getContexts](#getcontexts) - Get contexts
* [evaluateContextInstance](#evaluatecontextinstance) - Evaluate flags for context instance

## getContextKindsByProjectKey

Get all context kinds for a given project.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.getContextKindsByProjectKey({
    projectKey: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsGetContextKindsByProjectKey } from "@launchdarkly/mcp-server/funcs/contextsGetContextKindsByProjectKey.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsGetContextKindsByProjectKey(launchdarklyMcpServer, {
    projectKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetContextKindsByProjectKeyRequest](../../models/operations/getcontextkindsbyprojectkeyrequest.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContextKindsCollectionRep](../../models/contextkindscollectionrep.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## putContextKind

Create or update a context kind by key. Only the included fields will be updated.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.putContextKind({
    projectKey: "<value>",
    key: "<value>",
    upsertContextKindPayload: {
      name: "organization",
      description: "An example context kind for organizations",
      hideInTargeting: false,
      archived: false,
      version: 1,
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsPutContextKind } from "@launchdarkly/mcp-server/funcs/contextsPutContextKind.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsPutContextKind(launchdarklyMcpServer, {
    projectKey: "<value>",
    key: "<value>",
    upsertContextKindPayload: {
      name: "organization",
      description: "An example context kind for organizations",
      hideInTargeting: false,
      archived: false,
      version: 1,
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
| `request`                                                                                                                                                                      | [operations.PutContextKindRequest](../../models/operations/putcontextkindrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.UpsertResponseRep](../../models/upsertresponserep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getContextAttributeNames

Get context attribute names.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.getContextAttributeNames({
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsGetContextAttributeNames } from "@launchdarkly/mcp-server/funcs/contextsGetContextAttributeNames.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsGetContextAttributeNames(launchdarklyMcpServer, {
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
| `request`                                                                                                                                                                      | [operations.GetContextAttributeNamesRequest](../../models/operations/getcontextattributenamesrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContextAttributeNamesCollection](../../models/contextattributenamescollection.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getContextAttributeValues

Get context attribute values.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.getContextAttributeValues({
    projectKey: "<value>",
    environmentKey: "<value>",
    attributeName: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsGetContextAttributeValues } from "@launchdarkly/mcp-server/funcs/contextsGetContextAttributeValues.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsGetContextAttributeValues(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    attributeName: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetContextAttributeValuesRequest](../../models/operations/getcontextattributevaluesrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContextAttributeValuesCollection](../../models/contextattributevaluescollection.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## searchContextInstances


Search for context instances.

You can use either the query parameters or the request body parameters. If both are provided, there is an error.

To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). To learn more about context instances, read [Context instances](https://launchdarkly.com/docs/home/observability/multi-contexts#context-instances).


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.searchContextInstances({
    projectKey: "<value>",
    environmentKey: "<value>",
    contextInstanceSearch: {
      filter: "{\"filter\": \"kindKeys:{\"contains\": [\"user:Henry\"]},\"sort\": \"-ts\",\"limit\": 50}",
      sort: "-ts",
      limit: 10,
      continuationToken: "QAGFKH1313KUGI2351",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsSearchContextInstances } from "@launchdarkly/mcp-server/funcs/contextsSearchContextInstances.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsSearchContextInstances(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    contextInstanceSearch: {
      filter: "{\"filter\": \"kindKeys:{\"contains\": [\"user:Henry\"]},\"sort\": \"-ts\",\"limit\": 50}",
      sort: "-ts",
      limit: 10,
      continuationToken: "QAGFKH1313KUGI2351",
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
| `request`                                                                                                                                                                      | [operations.SearchContextInstancesRequest](../../models/operations/searchcontextinstancesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContextInstances](../../models/contextinstances.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getContextInstances

Get context instances by ID.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.getContextInstances({
    projectKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsGetContextInstances } from "@launchdarkly/mcp-server/funcs/contextsGetContextInstances.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsGetContextInstances(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetContextInstancesRequest](../../models/operations/getcontextinstancesrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContextInstances](../../models/contextinstances.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## deleteContextInstances

Delete context instances by ID.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.contexts.deleteContextInstances({
    projectKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsDeleteContextInstances } from "@launchdarkly/mcp-server/funcs/contextsDeleteContextInstances.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsDeleteContextInstances(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteContextInstancesRequest](../../models/operations/deletecontextinstancesrequest.md)                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## searchContexts


Search for contexts.

You can use either the query parameters or the request body parameters. If both are provided, there is an error.

To learn more about the filter syntax, read [Filtering contexts and context instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances). To learn more about contexts, read [Contexts and context kinds](https://launchdarkly.com/docs/home/observability/contexts#contexts-and-context-kinds).


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.searchContexts({
    projectKey: "<value>",
    environmentKey: "<value>",
    contextSearch: {
      filter: "*.name startsWith Jo,kind anyOf [\"user\",\"organization\"]",
      sort: "-ts",
      limit: 10,
      continuationToken: "QAGFKH1313KUGI2351",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsSearchContexts } from "@launchdarkly/mcp-server/funcs/contextsSearchContexts.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsSearchContexts(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    contextSearch: {
      filter: "*.name startsWith Jo,kind anyOf [\"user\",\"organization\"]",
      sort: "-ts",
      limit: 10,
      continuationToken: "QAGFKH1313KUGI2351",
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
| `request`                                                                                                                                                                      | [operations.SearchContextsRequest](../../models/operations/searchcontextsrequest.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Contexts](../../models/contexts.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getContexts

Get contexts based on kind and key.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.getContexts({
    projectKey: "<value>",
    environmentKey: "<value>",
    kind: "<value>",
    key: "<value>",
  });

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsGetContexts } from "@launchdarkly/mcp-server/funcs/contextsGetContexts.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsGetContexts(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    kind: "<value>",
    key: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetContextsRequest](../../models/operations/getcontextsrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Contexts](../../models/contexts.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## evaluateContextInstance

Evaluate flags for a context instance, for example, to determine the expected flag variation. **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks of evaluating feature flags in your application at scale and generating analytics events based on those evaluations. This API is not designed for that use case. Any evaluations you perform with this API will not be reflected in features such as flag statuses and flag insights. Context instances evaluated by this API will not appear in the Contexts list. To learn more, read [Comparing LaunchDarkly's SDKs and REST API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).

### Filtering

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `query` filters for a string that matches against the flags' keys and names. It is not case sensitive. For example: `filter=query equals dark-mode`.
- `tags` filters the list to flags that have all of the tags in the list. For example: `filter=tags contains ["beta","q1"]`.

You can also apply multiple filters at once. For example, setting `filter=query equals dark-mode, tags contains ["beta","q1"]` matches flags which match the key or name `dark-mode` and are tagged `beta` and `q1`.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.contexts.evaluateContextInstance({
    projectKey: "<value>",
    environmentKey: "<value>",
    requestBody: {
      "key": "user-key-123abc",
      "kind": "user",
      "otherAttribute": "other attribute value",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { contextsEvaluateContextInstance } from "@launchdarkly/mcp-server/funcs/contextsEvaluateContextInstance.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await contextsEvaluateContextInstance(launchdarklyMcpServer, {
    projectKey: "<value>",
    environmentKey: "<value>",
    requestBody: {
      "key": "user-key-123abc",
      "kind": "user",
      "otherAttribute": "other attribute value",
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
| `request`                                                                                                                                                                      | [operations.EvaluateContextInstanceRequest](../../models/operations/evaluatecontextinstancerequest.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.ContextInstanceEvaluations](../../models/contextinstanceevaluations.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |