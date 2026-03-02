# Approvals

## Overview

An account member can request approval on changes to a flag or AI Config's targeting or variations, or to a segment's targeting. Members may be required to request approval depending on the settings in their LaunchDarkly project. Members can optionally request an approval even if it is not required.

An approval request prevents a change from being applied without approval from another member. Select up to ten members as reviewers. Reviewers receive an email notification, but anyone with sufficient permissions can review a pending approval request. A change needs at least one approval before you can apply it. To learn more, read [Approvals](https://launchdarkly.com/docs/home/releases/approvals).

Changes that conflict will fail if approved and applied, and the flag or segment will not be updated.

Several of the endpoints in the approvals API require an approval request ID. The approval request ID is returned as part of the [Create approval request](https://launchdarkly.com/docs/api/approvals/post-approval-request) and [List approval requests for a flag](https://launchdarkly.com/docs/api/approvals/get-approvals-for-flag) responses. It is the `_id` field, or the `_id` field of each element in the `items` array. If you created the approval request as part of a [workflow](https://launchdarkly.com/docs/api/workflows), you can also use a workflow ID as the approval request ID. The workflow ID is returned as part of the [Create workflow](https://launchdarkly.com/docs/api/workflows/post-workflow) and [Get workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) responses. It is the `_id` field, or the `_id` field of each element in the `items` array.


### Available Operations

* [list](#list) - List approval requests
* [listForFlag](#listforflag) - List approval requests for a flag
* [createRequest](#createrequest) - Create approval request for a flag
* [getForFlag](#getforflag) - Get approval request for a flag
* [deleteFlagRequest](#deleteflagrequest) - Delete approval request for a flag
* [applyRequest](#applyrequest) - Apply approval request for a flag
* [reviewFlagRequest](#reviewflagrequest) - Review approval request for a flag

## list

Get all approval requests.

### Filtering approvals

LaunchDarkly supports the `filter` query param for filtering, with the following fields:

- `notifyMemberIds` filters for only approvals that are assigned to a member in the specified list. For example: `filter=notifyMemberIds anyOf ["memberId1", "memberId2"]`.
- `requestorId` filters for only approvals that correspond to the ID of the member who requested the approval. For example: `filter=requestorId equals 457034721476302714390214`.
- `resourceId` filters for only approvals that correspond to the the specified resource identifier. For example: `filter=resourceId equals proj/my-project:env/my-environment:flag/my-flag`.
- `resourceKind` filters for only approvals that correspond to the specified resource kind. For example: `filter=resourceKind equals flag`. Currently, `flag`, `segment`, and `aiConfig` resource kinds are supported.
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

<!-- UsageSnippet language="typescript" operationID="getApprovalRequests" method="get" path="/api/v2/approval-requests" -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.approvals.list({});

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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalsList failed:", res.error);
  }
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

## listForFlag

Get all approval requests for a feature flag.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApprovalsForFlag" method="get" path="/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests" -->
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalsListForFlag failed:", res.error);
  }
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

<!-- UsageSnippet language="typescript" operationID="postApprovalRequestForFlag" method="post" path="/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests" -->
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalsCreateRequest failed:", res.error);
  }
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

## getForFlag

Get a single approval request for a feature flag.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getApprovalForFlag" method="get" path="/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}" -->
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalsGetForFlag failed:", res.error);
  }
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

<!-- UsageSnippet language="typescript" operationID="deleteApprovalRequestForFlag" method="delete" path="/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}" -->
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
  if (res.ok) {
    const { value: result } = res;
    
  } else {
    console.log("approvalsDeleteFlagRequest failed:", res.error);
  }
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

<!-- UsageSnippet language="typescript" operationID="postApprovalRequestApplyForFlag" method="post" path="/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/apply" -->
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalsApplyRequest failed:", res.error);
  }
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

<!-- UsageSnippet language="typescript" operationID="postApprovalRequestReviewForFlag" method="post" path="/api/v2/projects/{projectKey}/flags/{featureFlagKey}/environments/{environmentKey}/approval-requests/{id}/reviews" -->
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
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("approvalsReviewFlagRequest failed:", res.error);
  }
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