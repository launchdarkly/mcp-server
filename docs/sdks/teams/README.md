# Teams
(*teams*)

## Overview

> ### Teams is an Enterprise feature
>
> Teams is available to customers on an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).

A team is a group of members in your LaunchDarkly account. Members of the team have access to various resources in LaunchDarkly, such as projects or flags, based on the role or roles you assign to the team. To learn more, read [Teams](https://launchdarkly.com/docs/home/account/teams).

The Teams API allows you to create, read, update, and delete a team.

Several of the endpoints in the Teams API require one or more member IDs. The member ID is returned as part of the [List account members](https://launchdarkly.com/docs/api/account-members/get-members) response. It is the `_id` field of each element in the `items` array.


### Available Operations

* [getTeams](#getteams) - List teams
* [postTeam](#postteam) - Create team
* [getTeam](#getteam) - Get team
* [deleteTeam](#deleteteam) - Delete team
* [patchTeam](#patchteam) - Update team
* [getTeamMaintainers](#getteammaintainers) - Get team maintainers
* [postTeamMembers](#postteammembers) - Add multiple members to team
* [getTeamRoles](#getteamroles) - Get team custom roles

## getTeams

Return a list of teams.

By default, this returns the first 20 teams. Page through this list with the `limit` parameter and by following the `first`, `prev`, `next`, and `last` links in the `_links` field that returns. If those links do not appear, the pages they refer to don't exist. For example, the `first` and `prev` links will be missing from the response on the first page, because there is no previous page and you cannot return to the first page when you are already on the first page.

### Filtering teams

LaunchDarkly supports the following fields for filters:

- `query` is a string that matches against the teams' names and keys. It is not case-sensitive.
  - A request with `query:abc` returns teams with the string `abc` in their name or key.
- `nomembers` is a boolean that filters the list of teams who have 0 members
  - A request with `nomembers:true` returns teams that have 0 members
  - A request with `nomembers:false` returns teams that have 1 or more members

### Expanding the teams response
LaunchDarkly supports expanding several fields in the "List teams" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

* `members` includes the total count of members that belong to the team.
* `roles` includes a paginated list of the custom roles that you have assigned to the team.
* `roleAttributes` includes a list of the role attributes that you have assigned to the team.
* `projects` includes a paginated list of the projects that the team has any write access to.
* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,maintainers` includes the `members` and `maintainers` fields in the response.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.getTeams({});

  // Handle the result
  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { teamsGetTeams } from "@launchdarkly/mcp-server/funcs/teamsGetTeams.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsGetTeams(launchdarklyMcpServer, {});

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
| `request`                                                                                                                                                                      | [operations.GetTeamsRequest](../../models/operations/getteamsrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Teams](../../models/teams.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## postTeam

Create a team. To learn more, read [Creating a team](https://launchdarkly.com/docs/home/account/create-teams).

### Expanding the teams response
LaunchDarkly supports four fields for expanding the "Create team" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

* `members` includes the total count of members that belong to the team.
* `roles` includes a paginated list of the custom roles that you have assigned to the team.
* `projects` includes a paginated list of the projects that the team has any write access to.
* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,roles` includes the `members` and `roles` fields in the response.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.postTeam({
    teamPostInput: {
      customRoleKeys: [
        "example-role1",
        "example-role2",
      ],
      description: "An example team",
      key: "team-key-123abc",
      memberIDs: [
        "12ab3c45de678910fgh12345",
      ],
      name: "Example team",
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
import { teamsPostTeam } from "@launchdarkly/mcp-server/funcs/teamsPostTeam.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsPostTeam(launchdarklyMcpServer, {
    teamPostInput: {
      customRoleKeys: [
        "example-role1",
        "example-role2",
      ],
      description: "An example team",
      key: "team-key-123abc",
      memberIDs: [
        "12ab3c45de678910fgh12345",
      ],
      name: "Example team",
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
| `request`                                                                                                                                                                      | [operations.PostTeamRequest](../../models/operations/postteamrequest.md)                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Team](../../models/team.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getTeam

Fetch a team by key.

### Expanding the teams response
LaunchDarkly supports several fields for expanding the "Get team" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

* `members` includes the total count of members that belong to the team.
* `roles` includes a paginated list of the custom roles that you have assigned to the team.
* `roleAttributes` includes a list of the role attributes that you have assigned to the team.
* `projects` includes a paginated list of the projects that the team has any write access to.
* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,roles` includes the `members` and `roles` fields in the response.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.getTeam({
    teamKey: "<value>",
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
import { teamsGetTeam } from "@launchdarkly/mcp-server/funcs/teamsGetTeam.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsGetTeam(launchdarklyMcpServer, {
    teamKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetTeamRequest](../../models/operations/getteamrequest.md)                                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Team](../../models/team.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## deleteTeam

Delete a team by key. To learn more, read [Deleting teams](https://launchdarkly.com/docs/home/account/delete-teams).

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.teams.deleteTeam({
    teamKey: "<value>",
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { teamsDeleteTeam } from "@launchdarkly/mcp-server/funcs/teamsDeleteTeam.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsDeleteTeam(launchdarklyMcpServer, {
    teamKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.DeleteTeamRequest](../../models/operations/deleteteamrequest.md)                                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<void\>**

### Errors

| Error Type                  | Status Code                 | Content Type                |
| --------------------------- | --------------------------- | --------------------------- |
| errors.UnauthorizedErrorRep | 401                         | application/json            |
| errors.NotFoundErrorRep     | 404                         | application/json            |
| errors.RateLimitedErrorRep  | 429                         | application/json            |
| errors.APIError             | 4XX, 5XX                    | \*/\*                       |

## patchTeam

Perform a partial update to a team. Updating a team uses the semantic patch format.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header. To learn more, read [Updates using semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch).

### Instructions

Semantic patch requests support the following `kind` instructions for updating teams. Several of the instructions require one or more member IDs as parameters. The member ID is returned as part of the [List account members](https://launchdarkly.com/docs/ld-docs/api/account-members/get-members) response. It is the `_id` field of each element in the `items` array.


<details>
<summary>Click to expand instructions for <strong>updating teams</strong></summary>

#### addCustomRoles

Adds custom roles to the team. Team members will have these custom roles granted to them.

##### Parameters

- `values`: List of custom role keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addCustomRoles",
    "values": [ "example-custom-role" ]
  }]
}
```

#### addMembers

Adds members to the team.

##### Parameters

- `values`: List of member IDs to add.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addMembers",
    "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
  }]
}
```

#### addPermissionGrants

Adds permission grants to members for the team. For example, a permission grant could allow a member to act as a team maintainer. A permission grant may have either an `actionSet` or a list of `actions` but not both at the same time. The members do not have to be team members to have a permission grant for the team.

##### Parameters

- `actionSet`: Name of the action set.
- `actions`: List of actions.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "addPermissionGrants",
    "actions": [ "updateTeamName", "updateTeamDescription" ],
    "memberIDs": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
  }]
}
```

#### addRoleAttribute

Adds a role attribute to a team. Team members will have these role attribute values scoped for all custom roles granted to them.

##### Parameters

- `key`: The role attribute key to add.
- `values`: List of role attribute values for that key.

Here's an example:

```json
{
  "instructions": [
    {
      "kind": "addRoleAttribute",
      "key": "testAttribute",
      "values": ["someNewValue", "someOtherNewValue"]
    }
  ]
}
```

#### removeCustomRoles

Removes custom roles from the team. The app will no longer grant these custom roles to the team members.

##### Parameters

- `values`: List of custom role keys.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeCustomRoles",
    "values": [ "example-custom-role" ]
  }]
}
```

#### removeMembers

Removes members from the team.

##### Parameters

- `values`: List of member IDs to remove.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removeMembers",
    "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
  }]
}
```

#### removePermissionGrants

Removes permission grants from members for the team. A permission grant may have either an `actionSet` or a list of `actions` but not both at the same time. The `actionSet` and `actions` must match an existing permission grant.

##### Parameters

- `actionSet`: Name of the action set.
- `actions`: List of actions.
- `memberIDs`: List of member IDs.

Here's an example:

```json
{
  "instructions": [{
    "kind": "removePermissionGrants",
    "actions": [ "updateTeamName", "updateTeamDescription" ],
    "memberIDs": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
  }]
}
```

#### removeRoleAttribute

Removes a role attribute from the team.

##### Parameters

- `key`: The role attribute key to remove.

Here's an example:
```json
{
  "instructions": [
    {
      "kind": "removeRoleAttribute",
      "key": "testAttribute"
    }
  ]
}
```

#### replaceMembers

Replaces the existing members of the team with the new members.

##### Parameters

- `values`: List of member IDs of the new members.

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceMembers",
    "values": [ "1234a56b7c89d012345e678f", "507f1f77bcf86cd799439011" ]
  }]
}
```

#### replaceRoleAttributes

Replaces the existing role attributes for the team with new role attributes.

##### Parameters

- `values`: A map of role attribute keys to lists of role attribute values

Here's an example:

```json
{
  "instructions": [{
    "kind": "replaceRoleAttributes",
    "values": {
      "testAttribute": [ "someNewValue", "someOtherNewValue" ],
      "projectRoleAttribute": [ "project1", "project2"]
    }
  }]
}
```

#### updateDescription

Updates the description of the team.

##### Parameters

- `value`: The new description.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateDescription",
    "value": "Updated team description"
  }]
}
```

#### updateName

Updates the name of the team.

##### Parameters

- `value`: The new name.

Here's an example:

```json
{
  "instructions": [{
    "kind": "updateName",
    "value": "Updated team name"
  }]
}
```

#### updateRoleAttribute

Updates a role attribute on the team. Any existing values for the given key will be replaced with the new values. Team members will have these role attribute values scoped for all custom roles granted to them.

##### Parameters

- `key`: The role attribute key to update.
- `values`: List of role attribute values for that key.

Here's an example:
```json
{
  "instructions": [
    {
      "kind": "updateRoleAttribute",
      "key": "testAttribute",
      "values": ["someNewValue", "someOtherNewValue"]
    }
  ]
}
```

</details>

### Expanding the teams response
LaunchDarkly supports four fields for expanding the "Update team" response. By default, these fields are **not** included in the response.

To expand the response, append the `expand` query parameter and add a comma-separated list with any of the following fields:

* `members` includes the total count of members that belong to the team.
* `roles` includes a paginated list of the custom roles that you have assigned to the team.
* `projects` includes a paginated list of the projects that the team has any write access to.
* `maintainers` includes a paginated list of the maintainers that you have assigned to the team.

For example, `expand=members,roles` includes the `members` and `roles` fields in the response.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.patchTeam({
    teamKey: "<value>",
    teamPatchInput: {
      comment: "Optional comment about the update",
      instructions: [
        {
          "kind": "updateDescription",
          "value": "New description for the team",
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
import { LaunchdarklyMcpServerCore } from "@launchdarkly/mcp-server/core.js";
import { teamsPatchTeam } from "@launchdarkly/mcp-server/funcs/teamsPatchTeam.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsPatchTeam(launchdarklyMcpServer, {
    teamKey: "<value>",
    teamPatchInput: {
      comment: "Optional comment about the update",
      instructions: [
        {
          "kind": "updateDescription",
          "value": "New description for the team",
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
| `request`                                                                                                                                                                      | [operations.PatchTeamRequest](../../models/operations/patchteamrequest.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.Team](../../models/team.md)\>**

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

## getTeamMaintainers

Fetch the maintainers that have been assigned to the team. To learn more, read [Managing team maintainers](https://launchdarkly.com/docs/home/account/team-maintainers).

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.getTeamMaintainers({
    teamKey: "<value>",
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
import { teamsGetTeamMaintainers } from "@launchdarkly/mcp-server/funcs/teamsGetTeamMaintainers.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsGetTeamMaintainers(launchdarklyMcpServer, {
    teamKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetTeamMaintainersRequest](../../models/operations/getteammaintainersrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TeamMaintainers](../../models/teammaintainers.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## postTeamMembers

Add multiple members to an existing team by uploading a CSV file of member email addresses. Your CSV file must include email addresses in the first column. You can include data in additional columns, but LaunchDarkly ignores all data outside the first column. Headers are optional. To learn more, read [Manage team members](https://launchdarkly.com/docs/home/account/manage-teams#manage-team-members).

**Members are only added on a `201` response.** A `207` indicates the CSV file contains a combination of valid and invalid entries. A `207` results in no members being added to the team.

On a `207` response, if an entry contains bad input, the `message` field contains the row number as well as the reason for the error. The `message` field is omitted if the entry is valid.

Example `207` response:
```json
{
  "items": [
    {
      "status": "success",
      "value": "new-team-member@acme.com"
    },
    {
      "message": "Line 2: empty row",
      "status": "error",
      "value": ""
    },
    {
      "message": "Line 3: email already exists in the specified team",
      "status": "error",
      "value": "existing-team-member@acme.com"
    },
    {
      "message": "Line 4: invalid email formatting",
      "status": "error",
      "value": "invalid email format"
    }
  ]
}
```

Message | Resolution
--- | ---
Empty row | This line is blank. Add an email address and try again.
Duplicate entry | This email address appears in the file twice. Remove the email from the file and try again.
Email already exists in the specified team | This member is already on your team. Remove the email from the file and try again.
Invalid formatting | This email address is not formatted correctly. Fix the formatting and try again.
Email does not belong to a LaunchDarkly member | The email address doesn't belong to a LaunchDarkly account member. Invite them to LaunchDarkly, then re-add them to the team.

On a `400` response, the `message` field may contain errors specific to this endpoint.

Example `400` response:
```json
{
  "code": "invalid_request",
  "message": "Unable to process file"
}
```

Message | Resolution
--- | ---
Unable to process file | LaunchDarkly could not process the file for an unspecified reason. Review your file for errors and try again.
File exceeds 25mb | Break up your file into multiple files of less than 25mbs each.
All emails have invalid formatting | None of the email addresses in the file are in the correct format. Fix the formatting and try again.
All emails belong to existing team members | All listed members are already on this team. Populate the file with member emails that do not belong to the team and try again.
File is empty | The CSV file does not contain any email addresses. Populate the file and try again.
No emails belong to members of your LaunchDarkly organization | None of the email addresses belong to members of your LaunchDarkly account. Invite these members to LaunchDarkly, then re-add them to the team.


### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.postTeamMembers({
    teamKey: "<value>",
    requestBody: {},
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
import { teamsPostTeamMembers } from "@launchdarkly/mcp-server/funcs/teamsPostTeamMembers.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsPostTeamMembers(launchdarklyMcpServer, {
    teamKey: "<value>",
    requestBody: {},
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
| `request`                                                                                                                                                                      | [operations.PostTeamMembersRequest](../../models/operations/postteammembersrequest.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TeamImportsRep](../../models/teamimportsrep.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |

## getTeamRoles

Fetch the custom roles that have been assigned to the team. To learn more, read [Managing team permissions](https://launchdarkly.com/docs/home/account/team-permissions).

### Example Usage

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.teams.getTeamRoles({
    teamKey: "<value>",
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
import { teamsGetTeamRoles } from "@launchdarkly/mcp-server/funcs/teamsGetTeamRoles.js";

// Use `LaunchdarklyMcpServerCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchdarklyMcpServer = new LaunchdarklyMcpServerCore({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const res = await teamsGetTeamRoles(launchdarklyMcpServer, {
    teamKey: "<value>",
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
| `request`                                                                                                                                                                      | [operations.GetTeamRolesRequest](../../models/operations/getteamrolesrequest.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[models.TeamCustomRoles](../../models/teamcustomroles.md)\>**

### Errors

| Error Type                      | Status Code                     | Content Type                    |
| ------------------------------- | ------------------------------- | ------------------------------- |
| errors.InvalidRequestErrorRep   | 400                             | application/json                |
| errors.UnauthorizedErrorRep     | 401                             | application/json                |
| errors.ForbiddenErrorRep        | 403                             | application/json                |
| errors.NotFoundErrorRep         | 404                             | application/json                |
| errors.MethodNotAllowedErrorRep | 405                             | application/json                |
| errors.RateLimitedErrorRep      | 429                             | application/json                |
| errors.APIError                 | 4XX, 5XX                        | \*/\*                           |