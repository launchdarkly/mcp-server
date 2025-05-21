# Approvals
(*approvals*)

## Overview

### Available Operations

* [list](#list) - List approval requests
* [create](#create) - Create approval request
* [getRequest](#getrequest) - Get approval request
* [deleteRequest](#deleterequest) - Delete approval request
* [apply](#apply) - Apply approval request
* [reviewRequest](#reviewrequest) - Review approval request
* [listForFlag](#listforflag) - List approval requests for a flag
* [createRequest](#createrequest) - Create approval request for a flag
* [createCopyConfigRequest](#createcopyconfigrequest) - Create approval request to copy flag configurations across environments
* [getForFlag](#getforflag) - Get approval request for a flag
* [deleteFlagRequest](#deleteflagrequest) - Delete approval request for a flag
* [applyRequest](#applyrequest) - Apply approval request for a flag
* [reviewFlagRequest](#reviewflagrequest) - Review approval request for a flag
* [patchRequest](#patchrequest) - Update approval request
* [patchFlagConfigApprovalRequest](#patchflagconfigapprovalrequest) - Update flag approval request

## list

Get all approval requests.

### Filtering approvals

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `notifyMemberIds` filters for only approvals that are assigned to a member in the specified list. For example: `filter=notifyMemberIds anyOf ["memberId1", "memberId2"]`.
- `requestorId` filters for only approvals that correspond to the ID of the member who requested the approval. For example: `filter=requestorId equals 457034721476302714390214`.
- `resourceId` filters for only approvals that correspond to the the specified resource identifier. For example: `filter=resourceId equals proj/my-project:env/my-environment:flag/my-flag`.
- `resourceKind` filters for only approvals that correspond to the specified resource kind. For example: `filter=resourceKind equals flag`. Currently, `flag` and `segment` resource kinds are supported.
- `reviewStatus` filters for only approvals which correspond to the review status in the specified list. The possible values are `approved`, `declined`, and `pending`. For example: `filter=reviewStatus anyOf ["pending", "approved"]`.
- `status` filters for only approvals which correspond to the status in the specified list. The possible values are `pending`, `scheduled`, `failed`, and `completed`. For example: `filter=status anyOf ["pending", "scheduled"]`.

You can also apply multiple filters at once. For example, setting `filter=projectKey equals my-project, reviewStatus anyOf ["pending","approved"]` matches approval requests which correspond to the `my-project` project key, and a review status of either `pending` or `approved`.

### Expanding approval response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `flag` includes the flag the approval request belongs to
- `project` includes the project the approval request belongs to
- `environments` includes the environments the approval request relates to

For example, `expand=project,flag` includes the `project` and `flag` fields in the response.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsList } from "@launchdarkly/mcp-server/funcs/approvalsList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsList(launchDarkly, {});

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
| `request`                                                                                                                                                                      | [operations.GetApprovalRequestsRequest](../../models/operations/getapprovalrequestsrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExpandableApprovalRequestsResponse](../../models/components/expandableapprovalrequestsresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## create

Create an approval request.

This endpoint requires a list of `instructions`, in semantic patch format, that will be applied when the approval request is approved and applied.

If you are creating an approval request for a flag, you can use the following `instructions`:

- `addVariation`
- `removeVariation`
- `updateVariation`
- `updateDefaultVariation`

For details on using these instructions, read [Update feature flag](https://launchdarkly.com/docs/api/feature-flags/patch-feature-flag).

To create an approval for a flag specific to an environment, use [Create approval request for a flag](https://launchdarkly.com/docs/api/approvals/post-approval-request-for-flag).

If you are creating an approval request for a segment, you can use the following read [Patch segment](https://launchdarkly.com/docs/api/segments/patch-segment) for details on the available `instructions`.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.create({
    resourceId: "proj/projKey:env/envKey:flag/flagKey",
    comment: "optional comment",
    description: "Requesting to update targeting",
    instructions: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
      },
    ],
    notifyMemberIds: [
      "1234a56b7c89d012345e678f",
    ],
    notifyTeamKeys: [
      "example-reviewer-team",
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsCreate } from "@launchdarkly/mcp-server/funcs/approvalsCreate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsCreate(launchDarkly, {
    resourceId: "proj/projKey:env/envKey:flag/flagKey",
    comment: "optional comment",
    description: "Requesting to update targeting",
    instructions: [
      {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
      },
      {
        "key": "<value>",
        "key1": "<value>",
      },
    ],
    notifyMemberIds: [
      "1234a56b7c89d012345e678f",
    ],
    notifyTeamKeys: [
      "example-reviewer-team",
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
| `request`                                                                                                                                                                      | [components.CreateApprovalRequestRequest](../../models/components/createapprovalrequestrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApprovalRequestResponse](../../models/components/approvalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getRequest

Get an approval request by approval request ID.

### Expanding approval response

LaunchDarkly supports the `expand` query param to include additional fields in the response, with the following fields:

- `environments` includes the environments the approval request relates to
- `flag` includes the flag the approval request belongs to
- `project` includes the project the approval request belongs to
- `resource` includes details on the resource (flag or segment) the approval request relates to

For example, `expand=project,flag` includes the `project` and `flag` fields in the response.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.getRequest({
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsGetRequest } from "@launchdarkly/mcp-server/funcs/approvalsGetRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsGetRequest(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetApprovalRequestRequest](../../models/operations/getapprovalrequestrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ExpandableApprovalRequestResponse](../../models/components/expandableapprovalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## deleteRequest

Delete an approval request.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.approvals.deleteRequest({
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsDeleteRequest } from "@launchdarkly/mcp-server/funcs/approvalsDeleteRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsDeleteRequest(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.DeleteApprovalRequestRequest](../../models/operations/deleteapprovalrequestrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## apply

Apply an approval request that has been approved. This endpoint works with approval requests for either flag or segment changes.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.apply({
    id: "<value>",
    postApprovalRequestApplyRequest: {
      comment: "Looks good, thanks for updating",
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
import { approvalsApply } from "@launchdarkly/mcp-server/funcs/approvalsApply.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsApply(launchDarkly, {
    id: "<value>",
    postApprovalRequestApplyRequest: {
      comment: "Looks good, thanks for updating",
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
| `request`                                                                                                                                                                      | [operations.PostApprovalRequestApplyRequest](../../models/operations/postapprovalrequestapplyrequest.md)                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApprovalRequestResponse](../../models/components/approvalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## reviewRequest

Review an approval request by approving or denying changes.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.reviewRequest({
    id: "<value>",
    postApprovalRequestReviewRequest: {
      kind: "approve",
      comment: "Looks good, thanks for updating",
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
import { approvalsReviewRequest } from "@launchdarkly/mcp-server/funcs/approvalsReviewRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsReviewRequest(launchDarkly, {
    id: "<value>",
    postApprovalRequestReviewRequest: {
      kind: "approve",
      comment: "Looks good, thanks for updating",
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
| `request`                                                                                                                                                                      | [operations.PostApprovalRequestReviewRequest](../../models/operations/postapprovalrequestreviewrequest.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.ApprovalRequestResponse](../../models/components/approvalrequestresponse.md)\>**

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

## listForFlag

Get all approval requests for a feature flag.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.listForFlag({
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
import { approvalsListForFlag } from "@launchdarkly/mcp-server/funcs/approvalsListForFlag.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsListForFlag(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetApprovalsForFlagRequest](../../models/operations/getapprovalsforflagrequest.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestsResponse](../../models/components/flagconfigapprovalrequestsresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## createRequest

Create an approval request for a feature flag.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.createRequest({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    createFlagConfigApprovalRequestRequest: {
      comment: "optional comment",
      description: "Requesting to update targeting",
      instructions: [
        {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
      ],
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      notifyTeamKeys: [
        "example-reviewer-team",
      ],
      operatingOnId: "6297ed79dee7dc14e1f9a80c",
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
import { approvalsCreateRequest } from "@launchdarkly/mcp-server/funcs/approvalsCreateRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsCreateRequest(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    createFlagConfigApprovalRequestRequest: {
      comment: "optional comment",
      description: "Requesting to update targeting",
      instructions: [
        {
          "key": "<value>",
          "key1": "<value>",
          "key2": "<value>",
        },
      ],
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      notifyTeamKeys: [
        "example-reviewer-team",
      ],
      operatingOnId: "6297ed79dee7dc14e1f9a80c",
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
| `request`                                                                                                                                                                      | [operations.PostApprovalRequestForFlagRequest](../../models/operations/postapprovalrequestforflagrequest.md)                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## createCopyConfigRequest

Create an approval request to copy a feature flag's configuration across environments.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.createCopyConfigRequest({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    createCopyFlagConfigApprovalRequestRequest: {
      comment: "optional comment",
      description: "copy flag settings to another environment",
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      notifyTeamKeys: [
        "example-reviewer-team",
      ],
      source: {
        key: "environment-key-123abc",
        version: 1,
      },
      includedActions: [
        "updateOn",
      ],
      excludedActions: [
        "updateOn",
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
import { approvalsCreateCopyConfigRequest } from "@launchdarkly/mcp-server/funcs/approvalsCreateCopyConfigRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsCreateCopyConfigRequest(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    createCopyFlagConfigApprovalRequestRequest: {
      comment: "optional comment",
      description: "copy flag settings to another environment",
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      notifyTeamKeys: [
        "example-reviewer-team",
      ],
      source: {
        key: "environment-key-123abc",
        version: 1,
      },
      includedActions: [
        "updateOn",
      ],
      excludedActions: [
        "updateOn",
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
| `request`                                                                                                                                                                      | [operations.PostFlagCopyConfigApprovalRequestRequest](../../models/operations/postflagcopyconfigapprovalrequestrequest.md)                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## getForFlag

Get a single approval request for a feature flag.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.getForFlag({
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsGetForFlag } from "@launchdarkly/mcp-server/funcs/approvalsGetForFlag.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsGetForFlag(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetApprovalForFlagRequest](../../models/operations/getapprovalforflagrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## deleteFlagRequest

Delete an approval request for a feature flag.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.approvals.deleteFlagRequest({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsDeleteFlagRequest } from "@launchdarkly/mcp-server/funcs/approvalsDeleteFlagRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsDeleteFlagRequest(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteApprovalRequestForFlagRequest](../../models/operations/deleteapprovalrequestforflagrequest.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## applyRequest

Apply an approval request that has been approved. This endpoint requires a feature flag key, and can only be used for applying approval requests on flags.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.applyRequest({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
    postApprovalRequestApplyRequest: {
      comment: "Looks good, thanks for updating",
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
import { approvalsApplyRequest } from "@launchdarkly/mcp-server/funcs/approvalsApplyRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsApplyRequest(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
    postApprovalRequestApplyRequest: {
      comment: "Looks good, thanks for updating",
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
| `request`                                                                                                                                                                      | [operations.PostApprovalRequestApplyForFlagRequest](../../models/operations/postapprovalrequestapplyforflagrequest.md)                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## reviewFlagRequest

Review an approval request by approving or denying changes.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.reviewFlagRequest({
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
    postApprovalRequestReviewRequest: {
      kind: "approve",
      comment: "Looks good, thanks for updating",
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
import { approvalsReviewFlagRequest } from "@launchdarkly/mcp-server/funcs/approvalsReviewFlagRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsReviewFlagRequest(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
    environmentKey: "<value>",
    id: "<value>",
    postApprovalRequestReviewRequest: {
      kind: "approve",
      comment: "Looks good, thanks for updating",
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
| `request`                                                                                                                                                                      | [operations.PostApprovalRequestReviewForFlagRequest](../../models/operations/postapprovalrequestreviewforflagrequest.md)                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.NotFoundErrorRep       | 404                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## patchRequest

Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint works with approval requests for either flag or segment changes.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instruction for updating an approval request.

#### addReviewers

Adds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.

##### Parameters

- `notifyMemberIds`: (Optional) List of member IDs.
- `notifyTeamKeys`: (Optional) List of team keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addReviewers",
    "notifyMemberIds": [ "user-key-123abc", "user-key-456def" ],
    "notifyTeamKeys": [ "team-key-789abc"]
  }]
}
```


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.patchRequest({
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsPatchRequest } from "@launchdarkly/mcp-server/funcs/approvalsPatchRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsPatchRequest(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.PatchApprovalRequestRequest](../../models/operations/patchapprovalrequestrequest.md)                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patchFlagConfigApprovalRequest

Perform a partial update to an approval request. Updating an approval request uses the semantic patch format. This endpoint requires a feature flag key, and can only be used for updating approval requests for flags.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instruction for updating an approval request.

#### addReviewers

Adds the specified members and teams to the existing list of reviewers. You must include at least one of `notifyMemberIds` and `notifyTeamKeys`.

##### Parameters

- `notifyMemberIds`: (Optional) List of member IDs.
- `notifyTeamKeys`: (Optional) List of team keys.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.patchFlagConfigApprovalRequest({
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { approvalsPatchFlagConfigApprovalRequest } from "@launchdarkly/mcp-server/funcs/approvalsPatchFlagConfigApprovalRequest.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await approvalsPatchFlagConfigApprovalRequest(launchDarkly, {
    projectKey: "<value>",
    featureFlagKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.PatchFlagConfigApprovalRequestRequest](../../models/operations/patchflagconfigapprovalrequestrequest.md)                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.FlagConfigApprovalRequestResponse](../../models/components/flagconfigapprovalrequestresponse.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |