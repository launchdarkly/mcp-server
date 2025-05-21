# IntegrationAuditLogSubscriptions
(*integrationAuditLogSubscriptions*)

## Overview

Audit log integration subscriptions allow you to send audit log events hooks to one of dozens of external tools. For example, you can send flag change event webhooks to external third party software. To learn more, read [Building your own integrations](https://launchdarkly.com/docs/integrations/building-integrations#building-your-own-integrations).

You can use the integration subscriptions API to create, delete, and manage your integration audit log subscriptions.

Each of these operations requires an `integrationKey` that refers to the type of integration. The required `config` fields to create a subscription vary depending on the `integrationKey`. You can find a full list of the fields for each integration below.

Several of these operations require a subscription ID. The subscription ID is returned as part of the [Create audit log subscription](https://launchdarkly.com/docs/api/integration-audit-log-subscriptions/create-subscription) and [Get audit log subscriptions by integration](https://launchdarkly.com/docs/api/integration-audit-log-subscriptions/get-subscriptions) responses. It is the `_id` field, or the `_id` field of each element in the `items` array.

### Configuration bodies by integrationKey

#### datadog

`apiKey` is a sensitive value.

`hostURL` must evaluate to either `"https://api.datadoghq.com"` or `"https://api.datadoghq.eu"` and will default to the former if not explicitly defined.

```
"config": {
    "apiKey": <string, optional>, # sensitive value
    "hostURL": <string, optional>
}
```

#### dynatrace

`apiToken` is a sensitive value.

`entity` must evaluate to one of the following fields and will default to `"APPLICATION"` if not explicitly defined:

<details>
<summary>Click to expand list of fields</summary>
<br/>
"APPLICATION"<br/>
"APPLICATION_METHOD"<br/>
"APPLICATION_METHOD_GROUP"<br/>
"AUTO_SCALING_GROUP"<br/>
"AUXILIARY_SYNTHETIC_TEST"<br/>
"AWS_APPLICATION_LOAD_BALANCER"<br/>
"AWS_AVAILABILITY_ZONE"<br/>
"AWS_CREDENTIALS"<br/>
"AWS_LAMBDA_FUNCTION"<br/>
"AWS_NETWORK_LOAD_BALANCER"<br/>
"AZURE_API_MANAGEMENT_SERVICE"<br/>
"AZURE_APPLICATION_GATEWAY"<br/>
"AZURE_COSMOS_DB"<br/>
"AZURE_CREDENTIALS"<br/>
"AZURE_EVENT_HUB"<br/>
"AZURE_EVENT_HUB_NAMESPACE"<br/>
"AZURE_FUNCTION_APP"<br/>
"AZURE_IOT_HUB"<br/>
"AZURE_LOAD_BALANCER"<br/>
"AZURE_MGMT_GROUP"<br/>
"AZURE_REDIS_CACHE"<br/>
"AZURE_REGION"<br/>
"AZURE_SERVICE_BUS_NAMESPACE"<br/>
"AZURE_SERVICE_BUS_QUEUE"<br/>
"AZURE_SERVICE_BUS_TOPIC"<br/>
"AZURE_SQL_DATABASE"<br/>
"AZURE_SQL_ELASTIC_POOL"<br/>
"AZURE_SQL_SERVER"<br/>
"AZURE_STORAGE_ACCOUNT"<br/>
"AZURE_SUBSCRIPTION"<br/>
"AZURE_TENANT"<br/>
"AZURE_VM"<br/>
"AZURE_VM_SCALE_SET"<br/>
"AZURE_WEB_APP"<br/>
"CF_APPLICATION"<br/>
"CF_FOUNDATION"<br/>
"CINDER_VOLUME"<br/>
"CLOUD_APPLICATION"<br/>
"CLOUD_APPLICATION_INSTANCE"<br/>
"CLOUD_APPLICATION_NAMESPACE"<br/>
"CONTAINER_GROUP"<br/>
"CONTAINER_GROUP_INSTANCE"<br/>
"CUSTOM_APPLICATION"<br/>
"CUSTOM_DEVICE"<br/>
"CUSTOM_DEVICE_GROUP"<br/>
"DCRUM_APPLICATION"<br/>
"DCRUM_SERVICE"<br/>
"DCRUM_SERVICE_INSTANCE"<br/>
"DEVICE_APPLICATION_METHOD"<br/>
"DISK"<br/>
"DOCKER_CONTAINER_GROUP_INSTANCE"<br/>
"DYNAMO_DB_TABLE"<br/>
"EBS_VOLUME"<br/>
"EC2_INSTANCE"<br/>
"ELASTIC_LOAD_BALANCER"<br/>
"ENVIRONMENT"<br/>
"EXTERNAL_SYNTHETIC_TEST_STEP"<br/>
"GCP_ZONE"<br/>
"GEOLOCATION"<br/>
"GEOLOC_SITE"<br/>
"GOOGLE_COMPUTE_ENGINE"<br/>
"HOST"<br/>
"HOST_GROUP"<br/>
"HTTP_CHECK"<br/>
"HTTP_CHECK_STEP"<br/>
"HYPERVISOR"<br/>
"KUBERNETES_CLUSTER"<br/>
"KUBERNETES_NODE"<br/>
"MOBILE_APPLICATION"<br/>
"NETWORK_INTERFACE"<br/>
"NEUTRON_SUBNET"<br/>
"OPENSTACK_PROJECT"<br/>
"OPENSTACK_REGION"<br/>
"OPENSTACK_VM"<br/>
"OS"<br/>
"PROCESS_GROUP"<br/>
"PROCESS_GROUP_INSTANCE"<br/>
"RELATIONAL_DATABASE_SERVICE"<br/>
"SERVICE"<br/>
"SERVICE_INSTANCE"<br/>
"SERVICE_METHOD"<br/>
"SERVICE_METHOD_GROUP"<br/>
"SWIFT_CONTAINER"<br/>
"SYNTHETIC_LOCATION"<br/>
"SYNTHETIC_TEST"<br/>
"SYNTHETIC_TEST_STEP"<br/>
"VIRTUALMACHINE"<br/>
"VMWARE_DATACENTER"
</details>

```
"config": {
    "apiToken": <string, required>,
    "url": <string, required>,
    "entity": <string, optional>
}
```

#### elastic

`token` is a sensitive field.

```
"config": {
    "url": <string, required>,
    "token": <string, required>,
    "index": <string, required>
}
```

#### honeycomb

`apiKey` is a sensitive field.

```
"config": {
    "datasetName": <string, required>,
    "apiKey": <string, required>
}
```

#### logdna

`ingestionKey` is a sensitive field.

```
"config": {
    "ingestionKey": <string, required>,
    "level": <string, optional>
}
```

#### msteams

```
"config": {
    "url": <string, required>
}
```

#### new-relic-apm

`apiKey` is a sensitive field.

`domain` must evaluate to either `"api.newrelic.com"` or `"api.eu.newrelic.com"` and will default to the former if not explicitly defined.

```
"config": {
    "apiKey": <string, required>,
    "applicationId": <string, required>,
    "domain": <string, optional>
}
```

#### signalfx

`accessToken` is a sensitive field.

```
"config": {
    "accessToken": <string, required>,
    "realm": <string, required>
}
```

#### splunk

`token` is a sensitive field.

```
"config": {
    "base-url": <string, required>,
    "token": <string, required>,
    "skip-ca-verification": <boolean, required>
}
```


### Available Operations

* [getSubscriptions](#getsubscriptions) - Get audit log subscriptions by integration
* [createSubscription](#createsubscription) - Create audit log subscription
* [getSubscriptionByID](#getsubscriptionbyid) - Get audit log subscription by ID
* [deleteSubscription](#deletesubscription) - Delete audit log subscription
* [updateSubscription](#updatesubscription) - Update audit log subscription

## getSubscriptions

Get all audit log subscriptions associated with a given integration.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.integrationAuditLogSubscriptions.getSubscriptions({
    integrationKey: "<value>",
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
import { integrationAuditLogSubscriptionsGetSubscriptions } from "@launchdarkly/mcp-server/funcs/integrationAuditLogSubscriptionsGetSubscriptions.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await integrationAuditLogSubscriptionsGetSubscriptions(launchdarklyMcpServer, {
    integrationKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetSubscriptionsRequest](../../models/operations/getsubscriptionsrequest.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Integrations](../../models/integrations.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## createSubscription

Create an audit log subscription.<br /><br />For each subscription, you must specify the set of resources you wish to subscribe to audit log notifications for. You can describe these resources using a custom role policy. To learn more, read [Custom role concepts](https://launchdarkly.com/docs/home/account/role-concepts).

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.integrationAuditLogSubscriptions.createSubscription({
    integrationKey: "<value>",
    subscriptionPost: {
      name: "Example audit log subscription.",
      statements: [
        {
          resources: [
            "proj/*:env/*:flag/*;testing-tag",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      ],
      on: false,
      tags: [
        "testing-tag",
      ],
      config: {
        "optional": "an optional property",
        "required": "the required property",
        "url": "https://example.com",
      },
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
import { integrationAuditLogSubscriptionsCreateSubscription } from "@launchdarkly/mcp-server/funcs/integrationAuditLogSubscriptionsCreateSubscription.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await integrationAuditLogSubscriptionsCreateSubscription(launchdarklyMcpServer, {
    integrationKey: "<value>",
    subscriptionPost: {
      name: "Example audit log subscription.",
      statements: [
        {
          resources: [
            "proj/*:env/*:flag/*;testing-tag",
          ],
          actions: [
            "*",
          ],
          effect: "allow",
        },
      ],
      on: false,
      tags: [
        "testing-tag",
      ],
      config: {
        "optional": "an optional property",
        "required": "the required property",
        "url": "https://example.com",
      },
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
| `request`                                                                                                                                                                      | [operations.CreateSubscriptionRequest](../../models/operations/createsubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Integration](../../models/integration.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getSubscriptionByID

Get an audit log subscription by ID.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.integrationAuditLogSubscriptions.getSubscriptionByID({
    integrationKey: "<value>",
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
import { integrationAuditLogSubscriptionsGetSubscriptionByID } from "@launchdarkly/mcp-server/funcs/integrationAuditLogSubscriptionsGetSubscriptionByID.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await integrationAuditLogSubscriptionsGetSubscriptionByID(launchdarklyMcpServer, {
    integrationKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetSubscriptionByIDRequest](../../models/operations/getsubscriptionbyidrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Integration](../../models/integration.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## deleteSubscription

Delete an audit log subscription.

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.integrationAuditLogSubscriptions.deleteSubscription({
    integrationKey: "<value>",
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { integrationAuditLogSubscriptionsDeleteSubscription } from "@launchdarkly/mcp-server/funcs/integrationAuditLogSubscriptionsDeleteSubscription.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await integrationAuditLogSubscriptionsDeleteSubscription(launchdarklyMcpServer, {
    integrationKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteSubscriptionRequest](../../models/operations/deletesubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## updateSubscription

Update an audit log subscription configuration. Updating an audit log subscription uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.integrationAuditLogSubscriptions.updateSubscription({
    integrationKey: "<value>",
    id: "<value>",
    requestBody: [
      {
        op: "replace",
        path: "/on",
        value: false,
      },
    ],
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
import { integrationAuditLogSubscriptionsUpdateSubscription } from "@launchdarkly/mcp-server/funcs/integrationAuditLogSubscriptionsUpdateSubscription.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await integrationAuditLogSubscriptionsUpdateSubscription(launchdarklyMcpServer, {
    integrationKey: "<value>",
    id: "<value>",
    requestBody: [
      {
        op: "replace",
        path: "/on",
        value: false,
      },
    ],
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
| `request`                                                                                                                                                                      | [operations.UpdateSubscriptionRequest](../../models/operations/updatesubscriptionrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Integration](../../models/integration.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |