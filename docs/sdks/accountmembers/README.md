# AccountMembers
(*accountMembers*)

## Overview

### Available Operations

* [list](#list) - List account members
* [invite](#invite) - Invite new members
* [patch](#patch) - Modify account members
* [get](#get) - Get account member
* [update](#update) - Modify an account member
* [delete](#delete) - Delete account member
* [addToTeam](#addtoteam) - Add a member to teams

## list

Return a list of account members.

By default, this returns the first 20 members. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the returned `_links` field. These links are not present if the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page.

### Filtering members

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the members' emails and names. It is not case sensitive.
- `role` is a `|` separated list of roles and custom roles. It filters the list to members who have any of the roles in the list. For the purposes of this filtering, `Owner` counts as `Admin`.
- `id` is a `|` separated list of member IDs. It filters the list to members who match any of the IDs in the list.
- `email` is a `|` separated list of member emails. It filters the list to members who match any of the emails in the list.
- `team` is a string that matches against the key of the teams the members belong to. It is not case sensitive.
- `noteam` is a boolean that filters the list of members who are not on a team if true and members on a team if false.
- `lastSeen` is a JSON object in one of the following formats:
  - `{"never": true}` - Members that have never been active, such as those who have not accepted their invitation to LaunchDarkly, or have not logged in after being provisioned via SCIM.
  - `{"noData": true}` - Members that have not been active since LaunchDarkly began recording last seen timestamps.
  - `{"before": 1608672063611}` - Members that have not been active since the provided value, which should be a timestamp in Unix epoch milliseconds.
- `accessCheck` is a string that represents a specific action on a specific resource and is in the format `<ActionSpecifier>:<ResourceSpecifier>`. It filters the list to members who have the ability to perform that action on that resource. Note: `accessCheck` is only supported in API version `20220603` and earlier. To learn more, read [Versioning](https://launchdarkly.com/docs/api#versioning).
  - For example, the filter `accessCheck:createApprovalRequest:proj/default:env/test:flag/alternate-page` matches members with the ability to create an approval request for the `alternate-page` flag in the `test` environment of the `default` project.
  - Wildcard and tag filters are not supported when filtering for access.

For example, the filter `query:abc,role:admin|customrole` matches members with the string `abc` in their email or name, ignoring case, who also are either an `Owner` or `Admin` or have the custom role `customrole`.

### Sorting members

LaunchDarkly supports two fields for sorting: `displayName` and `lastSeen`:

- `displayName` sorts by first + last name, using the member's email if no name is set.
- `lastSeen` sorts by the `_lastSeen` property. LaunchDarkly considers members that have never been seen or have no data the oldest.

### Expanding the members response
LaunchDarkly supports two fields for expanding the "List members" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

* `customRoles` includes a list of the roles that you have assigned to the member.
* `roleAttributes` includes a list of the role attributes that you have assigned to the member.

For example, `expand=roleAttributes` includes `roleAttributes` field in the response.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.accountMembers.list({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { accountMembersList } from "@launchdarkly/mcp-server/funcs/accountMembersList.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersList(launchDarkly, {});

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
| `request`                                                                                                                                                                      | [operations.GetMembersRequest](../../models/operations/getmembersrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Members](../../models/components/members.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## invite

Invite one or more new members to join an account. Each member is sent an invitation. Members with "admin" or "owner" roles may create new members, as well as anyone with a "createMember" permission for "member/\*". If a member cannot be invited, the entire request is rejected and no members are invited from that request.

Each member _must_ have an `email` field and either a `role` or a `customRoles` field. If any of the fields are not populated correctly, the request is rejected with the reason specified in the "message" field of the response.

Requests to create account members will not work if SCIM is enabled for the account.

_No more than 50 members may be created per request._

A request may also fail because of conflicts with existing members. These conflicts are reported using the additional `code` and `invalid_emails` response fields with the following possible values for `code`:

- **email_already_exists_in_account**: A member with this email address already exists in this account.
- **email_taken_in_different_account**: A member with this email address exists in another account.
- **duplicate_email**s: This request contains two or more members with the same email address.

A request that fails for one of the above reasons returns an HTTP response code of 400 (Bad Request).


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.accountMembers.invite([
    {
      email: "sandy@acme.com",
      password: "***",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      customRoles: [
        "customRole1",
        "customRole2",
      ],
      teamKeys: [
        "team-1",
        "team-2",
      ],
    },
    {
      email: "sandy@acme.com",
      password: "***",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      customRoles: [
        "customRole1",
        "customRole2",
      ],
      teamKeys: [
        "team-1",
        "team-2",
      ],
    },
    {
      email: "sandy@acme.com",
      password: "***",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      customRoles: [
        "customRole1",
        "customRole2",
      ],
      teamKeys: [
        "team-1",
        "team-2",
      ],
    },
  ]);

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { accountMembersInvite } from "@launchdarkly/mcp-server/funcs/accountMembersInvite.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersInvite(launchDarkly, [
    {
      email: "sandy@acme.com",
      password: "***",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      customRoles: [
        "customRole1",
        "customRole2",
      ],
      teamKeys: [
        "team-1",
        "team-2",
      ],
    },
    {
      email: "sandy@acme.com",
      password: "***",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      customRoles: [
        "customRole1",
        "customRole2",
      ],
      teamKeys: [
        "team-1",
        "team-2",
      ],
    },
    {
      email: "sandy@acme.com",
      password: "***",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      customRoles: [
        "customRole1",
        "customRole2",
      ],
      teamKeys: [
        "team-1",
        "team-2",
      ],
    },
  ]);

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
| `request`                                                                                                                                                                      | [components.NewMemberForm[]](../../models/.md)                                                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Members](../../models/components/members.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## patch

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
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.accountMembers.patch({
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { accountMembersPatch } from "@launchdarkly/mcp-server/funcs/accountMembersPatch.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersPatch(launchDarkly, {
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
| `request`                                                                                                                                                                      | [components.MembersPatchInput](../../models/components/memberspatchinput.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.BulkEditMembersRep](../../models/components/bulkeditmembersrep.md)\>**

### Errors

| Error Type                    | Status Code                   | Content Type                  |
| ----------------------------- | ----------------------------- | ----------------------------- |
| errors.InvalidRequestErrorRep | 400                           | application/json              |
| errors.UnauthorizedErrorRep   | 401                           | application/json              |
| errors.ForbiddenErrorRep      | 403                           | application/json              |
| errors.StatusConflictErrorRep | 409                           | application/json              |
| errors.RateLimitedErrorRep    | 429                           | application/json              |
| errors.APIError               | 4XX, 5XX                      | \*/\*                         |

## get

Get a single account member by member ID.

`me` is a reserved value for the `id` parameter that returns the caller's member information.

### Expanding the member response
LaunchDarkly supports one field for expanding the "Get member" response. By default, this field is **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

* `roleAttributes` includes a list of the role attributes that you have assigned to the member.

For example, `expand=roleAttributes` includes `roleAttributes` field in the response.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.accountMembers.get({
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
import { accountMembersGet } from "@launchdarkly/mcp-server/funcs/accountMembersGet.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersGet(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.GetMemberRequest](../../models/operations/getmemberrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.ForbiddenErrorRep    | 403                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## update


Update a single account member. Updating a member uses a [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) representation of the desired changes. To learn more, read [Updates](https://launchdarkly.com/docs/api#updates).

To update fields in the account member object that are arrays, set the `path` to the name of the field and then append `/<array index>`. Use `/0` to add to the beginning of the array. Use `/-` to add to the end of the array. For example, to add a new custom role to a member, use the following request body:

```
  [
    {
      "op": "add",
      "path": "/customRoles/0",
      "value": "some-role-id"
    }
  ]
```

You can update only an account member's role or custom role using a JSON patch. Members can update their own names and email addresses though the LaunchDarkly UI.

When SAML SSO or SCIM is enabled for the account, account members are managed in the Identity Provider (IdP). Requests to update account members will succeed, but the IdP will override the update shortly afterwards.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.accountMembers.update({
    id: "<value>",
    requestBody: [
      {
        op: "add",
        path: "/role",
        value: "writer",
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
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { accountMembersUpdate } from "@launchdarkly/mcp-server/funcs/accountMembersUpdate.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersUpdate(launchDarkly, {
    id: "<value>",
    requestBody: [
      {
        op: "add",
        path: "/role",
        value: "writer",
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
| `request`                                                                                                                                                                      | [operations.PatchMemberRequest](../../models/operations/patchmemberrequest.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

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

Delete a single account member by ID. Requests to delete account members will not work if SCIM is enabled for the account.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.accountMembers.delete({
    id: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { accountMembersDelete } from "@launchdarkly/mcp-server/funcs/accountMembersDelete.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersDelete(launchDarkly, {
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
| `request`                                                                                                                                                                      | [operations.DeleteMemberRequest](../../models/operations/deletememberrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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

## addToTeam

Add one member to one or more teams.

### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.accountMembers.addToTeam({
    id: "<value>",
    memberTeamsPostInput: {
      teamKeys: [
        "team1",
        "team2",
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
import { accountMembersAddToTeam } from "@launchdarkly/mcp-server/funcs/accountMembersAddToTeam.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await accountMembersAddToTeam(launchDarkly, {
    id: "<value>",
    memberTeamsPostInput: {
      teamKeys: [
        "team1",
        "team2",
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
| `request`                                                                                                                                                                      | [operations.PostMemberTeamsRequest](../../models/operations/postmemberteamsrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Member](../../models/components/member.md)\>**

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