# AccountMembersBeta
(*accountMembersBeta*)

## Overview

> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.


### Available Operations

* [patchMembers](#patchmembers) - Modify account members

## patchMembers

> ### Full use of this API resource is an Enterprise feature
>
> The ability to perform a partial update to multiple members is available to customers on an Enterprise plan. If you are on another plan, you can update members individually. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

Perform a partial update to multiple members. Updating members uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating members.

<details>
<summary>Click to expand instructions for <strong>updating members</strong></summary>

#### replaceMembersRoles

Replaces the roles of the specified members. This also removes all custom roles assigned to the specified members.

##### Parameters

- `value`: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly's built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceMemberRoles",
    "value": "reader",
    "memberIDs": [
      "1234a56b7c89d012345e678f",
      "507f1f77bcf86cd799439011"
    ]
  }]
}
```

#### replaceAllMembersRoles

Replaces the roles of all members. This also removes all custom roles assigned to the specified members.

Members that match any of the filters are **excluded** from the update.

##### Parameters

- `value`: The new role. Must be a valid built-in role. To learn more about built-in roles, read [LaunchDarkly's built-in roles](https://launchdarkly.com/docs/home/account/built-in-roles).
- `filterLastSeen`: (Optional) A JSON object with one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `filterQuery`: (Optional) A string that matches against the members' emails and names. It is not case sensitive.
- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.
- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.
- `ignoredMemberIDs`: (Optional) A list of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceAllMembersRoles",
    "value": "reader",
    "filterLastSeen": { "never": true }
  }]
}
```

#### replaceMembersCustomRoles

Replaces the custom roles of the specified members.

##### Parameters

- `values`: List of new custom roles. Must be a valid custom role key or ID.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceMembersCustomRoles",
    "values": [ "example-custom-role" ],
    "memberIDs": [
      "1234a56b7c89d012345e678f",
      "507f1f77bcf86cd799439011"
    ]
  }]
}
```

#### replaceAllMembersCustomRoles

Replaces the custom roles of all members. Members that match any of the filters are **excluded** from the update.

##### Parameters

- `values`: List of new roles. Must be a valid custom role key or ID.
- `filterLastSeen`: (Optional) A JSON object with one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `filterQuery`: (Optional) A string that matches against the members' emails and names. It is not case sensitive.
- `filterRoles`: (Optional) A `|` separated list of roles and custom roles. For the purposes of this filtering, `Owner` counts as `Admin`.
- `filterTeamKey`: (Optional) A string that matches against the key of the team the members belong to. It is not case sensitive.
- `ignoredMemberIDs`: (Optional) A list of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceAllMembersCustomRoles",
    "values": [ "example-custom-role" ],
    "filterLastSeen": { "never": true }
  }]
}
```

#### replaceMembersRoleAttributes

Replaces the role attributes of the specified members.

##### Parameters

- `value`: Map of role attribute keys to lists of values.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceMembersRoleAttributes",
    "value": {
      "myRoleProjectKey": ["mobile", "web"],
      "myRoleEnvironmentKey": ["production"]
    },
    "memberIDs": [
      "1234a56b7c89d012345e678f",
      "507f1f77bcf86cd799439011"
    ]
  }]
}
```

</details>


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.accountMembersBeta.patchMembers({
    comment: "Optional comment about the update",
    instructions: [
      {
        "kind": "replaceMembersRoles",
        "memberIDs": [
          "1234a56b7c89d012345e678f",
          "507f1f77bcf86cd799439011",
        ],
        "value": "reader",
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
import { accountMembersBetaPatchMembers } from "@launchdarkly/mcp-server/funcs/accountMembersBetaPatchMembers.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersBetaPatchMembers(launchdarklyMcpServer, {
    comment: "Optional comment about the update",
    instructions: [
      {
        "kind": "replaceMembersRoles",
        "memberIDs": [
          "1234a56b7c89d012345e678f",
          "507f1f77bcf86cd799439011",
        ],
        "value": "reader",
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
| `request`                                                                                                                                                                      | [models.MembersPatchInput](../../models/memberspatchinput.md)                                                                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.BulkEditMembersRep](../../models/bulkeditmembersrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |