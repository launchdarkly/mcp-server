# @launchdarkly/mcp-server

Developer-friendly & type-safe Typescript SDK specifically catered to leverage *@launchdarkly/mcp-server* API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@launchdarkly/mcp-server&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


<br /><br />
> [!IMPORTANT]
> This SDK is not yet ready for production use. To complete setup please follow the steps outlined in your [workspace](https://app.speakeasy.com/org/launchdarkly/mcp). Delete this section before > publishing to a package manager.

<!-- Start Summary [summary] -->
## Summary

LaunchDarkly REST API: This documentation describes LaunchDarkly's REST API.

To access the complete OpenAPI spec directly, use [Get OpenAPI spec](https://launchdarkly.com/docs/api/other/get-openapi-spec).

## Authentication

LaunchDarkly's REST API uses the HTTPS protocol with a minimum TLS version of 1.2.

All REST API resources are authenticated with either [personal or service access tokens](https://launchdarkly.com/docs/home/account/api), or session cookies. Other authentication mechanisms are not supported. You can manage personal access tokens on your [**Authorization**](https://app.launchdarkly.com/settings/authorization) page in the LaunchDarkly UI.

LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side SDKs, mobile SDKs, and JavaScript-based SDKs, respectively. **These keys cannot be used to access our REST API**. These keys are environment-specific, and can only perform read-only operations such as fetching feature flag settings.

| Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| [Personal or service access tokens](https://launchdarkly.com/docs/home/account/api) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export. |
| SDK keys                                                                                        | Can only access read-only resources specific to server-side SDKs. Restricted to a single environment. | Server-side SDKs                     |
| Mobile keys                                                                                     | Can only access read-only resources specific to mobile SDKs, and only for flags marked available to mobile keys. Restricted to a single environment.           | Mobile SDKs                                        |
| Client-side ID                                                                                  | Can only access read-only resources specific to JavaScript-based client-side SDKs, and only for flags marked available to client-side. Restricted to a single environment.           | Client-side JavaScript                             |

> #### Keep your access tokens and SDK keys private
>
> Access tokens should _never_ be exposed in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If you accidentally expose an access token or SDK key, you can reset it from your [**Authorization**](https://app.launchdarkly.com/settings/authorization) page.
>
> The client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side JavaScript.

### Authentication using request header

The preferred way to authenticate with the API is by adding an `Authorization` header containing your access token to your requests. The value of the `Authorization` header must be your access token.

Manage personal access tokens from the [**Authorization**](https://app.launchdarkly.com/settings/authorization) page.

### Authentication using session cookie

For testing purposes, you can make API calls directly from your web browser. If you are logged in to the LaunchDarkly application, the API will use your existing session to authenticate calls.

If you have a [role](https://launchdarkly.com/docs/home/account/built-in-roles) other than Admin, or have a [custom role](https://launchdarkly.com/docs/home/account/custom-roles) defined, you may not have permission to perform some API calls. You will receive a `401` response code in that case.

> ### Modifying the Origin header causes an error
>
> LaunchDarkly validates that the Origin header for any API request authenticated by a session cookie matches the expected Origin header. The expected Origin header is `https://app.launchdarkly.com`.
>
> If the Origin header does not match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app from working correctly.
>
> Any browser extension that intentionally changes the Origin header can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes the Origin header to `http://evil.com` and causes the app to fail.
>
> To prevent this error, do not modify your Origin header.
>
> LaunchDarkly does not require origin matching when authenticating with an access token, so this issue does not affect normal API usage.

## Representations

All resources expect and return JSON response bodies. Error responses also send a JSON body. To learn more about the error format of the API, read [Errors](https://launchdarkly.com/docs/api#errors).

In practice this means that you always get a response with a `Content-Type` header set to `application/json`.

In addition, request bodies for `PATCH`, `POST`, and `PUT` requests must be encoded as JSON with a `Content-Type` header set to `application/json`.

### Summary and detailed representations

When you fetch a list of resources, the response includes only the most important attributes of each resource. This is a _summary representation_ of the resource. When you fetch an individual resource, such as a single feature flag, you receive a _detailed representation_ of the resource.

The best way to find a detailed representation is to follow links. Every summary representation includes a link to its detailed representation.

### Expanding responses

Sometimes the detailed representation of a resource does not include all of the attributes of the resource by default. If this is the case, the request method will clearly document this and describe which attributes you can include in an expanded response.

To include the additional attributes, append the `expand` request parameter to your request and add a comma-separated list of the attributes to include. For example, when you append `?expand=members,maintainers` to the [Get team](https://launchdarkly.com/docs/api/teams/get-team) endpoint, the expanded response includes both of these attributes.

### Links and addressability

The best way to navigate the API is by following links. These are attributes in representations that link to other resources. The API always uses the same format for links:

- Links to other resources within the API are encapsulated in a `_links` object
- If the resource has a corresponding link to HTML content on the site, it is stored in a special `_site` link

Each link has two attributes:

- An `href`, which contains the URL
- A `type`, which describes the content type

For example, a feature resource might return the following:

```json
{
  "_links": {
    "parent": {
      "href": "/api/features",
      "type": "application/json"
    },
    "self": {
      "href": "/api/features/sort.order",
      "type": "application/json"
    }
  },
  "_site": {
    "href": "/features/sort.order",
    "type": "text/html"
  }
}
```

From this, you can navigate to the parent collection of features by following the `parent` link, or navigate to the site page for the feature by following the `_site` link.

Collections are always represented as a JSON object with an `items` attribute containing an array of representations. Like all other representations, collections have `_links` defined at the top level.

Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the respective set of elements in the collection.

## Updates

Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON patch](https://launchdarkly.com/docs/api#updates-using-json-patch) format. Some resources also support the [JSON merge patch](https://launchdarkly.com/docs/api#updates-using-json-merge-patch) format, and some resources support the [semantic patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch) format, which is a way to specify the modifications to perform as a set of executable instructions. Each resource supports optional [comments](https://launchdarkly.com/docs/api#updates-with-comments) that you can submit with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.

When a resource supports both JSON patch and semantic patch, we document both in the request method. However, the specific request body fields and descriptions included in our documentation only match one type of patch or the other.

### Updates using JSON patch

[JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications to perform on a resource. JSON patch uses paths and a limited set of operations to describe how to transform the current state of the resource into a new state. JSON patch documents are always arrays, where each element contains an operation, a path to the field to update, and the new value.

For example, in this feature flag representation:

```json
{
    "name": "New recommendations engine",
    "key": "engine.enable",
    "description": "This is the description",
    ...
}
```
You can change the feature flag's description with the following patch document:

```json
[{ "op": "replace", "path": "/description", "value": "This is the new description" }]
```

You can specify multiple modifications to perform in a single request. You can also test that certain preconditions are met before applying the patch:

```json
[
  { "op": "test", "path": "/version", "value": 10 },
  { "op": "replace", "path": "/description", "value": "The new description" }
]
```

The above patch request tests whether the feature flag's `version` is `10`, and if so, changes the feature flag's description.

Attributes that are not editable, such as a resource's `_links`, have names that start with an underscore.

### Updates using JSON merge patch

[JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for specifying the modifications to perform on a resource. JSON merge patch is less expressive than JSON patch. However, in many cases it is simpler to construct a merge patch document. For example, you can change a feature flag's description with the following merge patch document:

```json
{
  "description": "New flag description"
}
```

### Updates using semantic patch

Some resources support the semantic patch format. A semantic patch is a way to specify the modifications to perform on a resource as a set of executable instructions.

Semantic patch allows you to be explicit about intent using precise, custom instructions. In many cases, you can define semantic patch instructions independently of the current state of the resource. This can be useful when defining a change that may be applied at a future date.

To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to your `Content-Type` header.

Here's how:

```
Content-Type: application/json; domain-model=launchdarkly.semanticpatch
```

If you call a semantic patch resource without this header, you will receive a `400` response because your semantic patch will be interpreted as a JSON patch.

The body of a semantic patch request takes the following properties:

* `comment` (string): (Optional) A description of the update.
* `environmentKey` (string): (Required for some resources only) The environment key.
* `instructions` (array): (Required) A list of actions the update should perform. Each action in the list must be an object with a `kind` property that indicates the instruction. If the instruction requires parameters, you must include those parameters as additional fields in the object. The documentation for each resource that supports semantic patch includes the available instructions and any additional parameters.

For example:

```json
{
  "comment": "optional comment",
  "instructions": [ {"kind": "turnFlagOn"} ]
}
```

Semantic patches are not applied partially; either all of the instructions are applied or none of them are. If **any** instruction is invalid, the endpoint returns an error and will not change the resource. If all instructions are valid, the request succeeds and the resources are updated if necessary, or left unchanged if they are already in the state you request.

### Updates with comments

You can submit optional comments with `PATCH` changes.

To submit a comment along with a JSON patch document, use the following format:

```json
{
  "comment": "This is a comment string",
  "patch": [{ "op": "replace", "path": "/description", "value": "The new description" }]
}
```

To submit a comment along with a JSON merge patch document, use the following format:

```json
{
  "comment": "This is a comment string",
  "merge": { "description": "New flag description" }
}
```

To submit a comment along with a semantic patch, use the following format:

```json
{
  "comment": "This is a comment string",
  "instructions": [ {"kind": "turnFlagOn"} ]
}
```

## Errors

The API always returns errors in a common format. Here's an example:

```json
{
  "code": "invalid_request",
  "message": "A feature with that key already exists",
  "id": "30ce6058-87da-11e4-b116-123b93f75cba"
}
```

The `code` indicates the general class of error. The `message` is a human-readable explanation of what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly Support to debug a problem with a specific API call.

### HTTP status error response codes

| Code | Definition        | Description                                                                                       | Possible Solution                                                |
| ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   |
| 401  | Invalid access token      | Requestor is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     |
| 403  | Forbidden         | Requestor does not have access to this resource.                                                | Ensure that the account member or access token has proper permissions set. |
| 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by ID or key. |
| 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. |
| 409  | Conflict          | The API request can not be completed because it conflicts with a concurrent API request. | Retry your request.                                              |
| 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using, either JSON patch or semantic patch.
| 429  | Too many requests | Read [Rate limiting](https://launchdarkly.com/docs/api#rate-limiting).                                               | Wait and try again later.                                        |

## CORS

The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed origin. Otherwise the request returns a wildcard, `Access-Control-Allow-Origin: *`. For more information on CORS, read the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS headers might look like:

```http
Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization
Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH
Access-Control-Allow-Origin: *
Access-Control-Max-Age: 300
```

You can make authenticated CORS calls just as you would make same-origin calls, using either [token or session-based authentication](https://launchdarkly.com/docs/api#authentication). If you are using session authentication, you should set the `withCredentials` property for your `xhr` request to `true`. You should never expose your access tokens to untrusted entities.

## Rate limiting

We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited calls to our APIs return a `429` status code. Calls to our APIs include headers indicating the current rate limit status. The specific headers returned depend on the API route being called. The limits differ based on the route, authentication mechanism, and other factors. Routes that are not rate limited may not contain any of the headers described below.

> ### Rate limiting and SDKs
>
> LaunchDarkly SDKs are never rate limited and do not use the API endpoints defined here. LaunchDarkly uses a different set of approaches, including streaming/server-sent events and a global CDN, to ensure availability to the routes used by LaunchDarkly SDKs.

### Global rate limits

Authenticated requests are subject to a global limit. This is the maximum number of calls that your account can make to the API per ten seconds. All service and personal access tokens on the account share this limit, so exceeding the limit with one access token will impact other tokens. Calls that are subject to global rate limits may return the headers below:

| Header name                    | Description                                                                      |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. |
| `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |

We do not publicly document the specific number of calls that can be made globally. This limit may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limit.

### Route-level rate limits

Some authenticated routes have custom rate limits. These also reset every ten seconds. Any service or personal access tokens hitting the same route share this limit, so exceeding the limit with one access token may impact other tokens. Calls that are subject to route-level rate limits return the headers below:

| Header name                   | Description                                                                                           |
| ----------------------------- | ----------------------------------------------------------------------------------------------------- |
| `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. |
| `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |

A _route_ represents a specific URL pattern and verb. For example, the [Delete environment](https://launchdarkly.com/docs/api/environments/delete-environment) endpoint is considered a single route, and each call to delete an environment counts against your route-level rate limit for that route.

We do not publicly document the specific number of calls that an account can make to each endpoint per ten seconds. These limits may change, and we encourage clients to program against the specification, relying on the two headers defined above, rather than hardcoding to the current limits.

### IP-based rate limiting

We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your API response will include a `Retry-After` header indicating how long to wait before re-trying the call. Clients must wait at least `Retry-After` seconds before making additional calls to our API, and should employ jitter and backoff strategies to avoid triggering rate limits again.

## OpenAPI (Swagger) and client libraries

We have a [complete OpenAPI (Swagger) specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.

We auto-generate multiple client libraries based on our OpenAPI specification. To learn more, visit the [collection of client libraries on GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories). You can also use this specification to generate client libraries to interact with our REST API in your language of choice.

Our OpenAPI specification is supported by several API-based tools such as Postman and Insomnia. In many cases, you can directly import our specification to explore our APIs.

## Method overriding

Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those environments, our API endpoints that use `DELETE`, `PATCH`, and `PUT` verbs are inaccessible.

To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to "tunnel" `DELETE`, `PATCH`, and `PUT` requests using a `POST` request.

For example, to call a `PATCH` endpoint using a `POST` request, you can include `X-HTTP-Method-Override:PATCH` as a header.

## Beta resources

We sometimes release new API resources in **beta** status before we release them with general availability.

Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

We try to promote resources into general availability as quickly as possible. This happens after sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible changes.

We mark beta resources with a "Beta" callout in our documentation, pictured below:

> ### This feature is in beta
>
> To use this feature, pass in a header including the `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more, read [Beta resources](https://launchdarkly.com/docs/api#beta-resources).
>
> Resources that are in beta are still undergoing testing and development. They may change without notice, including becoming backwards incompatible.

### Using beta resources

To use a beta resource, you must include a header in the request. If you call a beta resource without this header, you receive a `403` response.

Use this header:

```
LD-API-Version: beta
```

## Federal environments

The version of LaunchDarkly that is available on domains controlled by the United States government is different from the version of LaunchDarkly available to the general public. If you are an employee or contractor for a United States federal agency and use LaunchDarkly in your work, you likely use the federal instance of LaunchDarkly.

If you are working in the federal instance of LaunchDarkly, the base URI for each request is `https://app.launchdarkly.us`.

To learn more, read [LaunchDarkly in federal environments](https://launchdarkly.com/docs/home/infrastructure/federal).

## Versioning

We try hard to keep our REST API backwards compatible, but we occasionally have to make backwards-incompatible changes in the process of shipping new features. These breaking changes can cause unexpected behavior if you don't prepare for them accordingly.

Updates to our REST API include support for the latest features in LaunchDarkly. We also release a new version of our REST API every time we make a breaking change. We provide simultaneous support for multiple API versions so you can migrate from your current API version to a new version at your own pace.

### Setting the API version per request

You can set the API version on a specific request by sending an `LD-API-Version` header, as shown in the example below:

```
LD-API-Version: 20240415
```

The header value is the version number of the API version you would like to request. The number for each version corresponds to the date the version was released in `yyyymmdd` format. In the example above the version `20240415` corresponds to April 15, 2024.

### Setting the API version per access token

When you create an access token, you must specify a specific version of the API to use. This ensures that integrations using this token cannot be broken by version changes.

Tokens created before versioning was released have their version set to `20160426`, which is the version of the API that existed before the current versioning scheme, so that they continue working the same way they did before versioning.

If you would like to upgrade your integration to use a new API version, you can explicitly set the header described above.

> ### Best practice: Set the header for every client or integration
>
> We recommend that you set the API version header explicitly in any client or integration you build.
>
> Only rely on the access token API version during manual testing.

### API version changelog

<table>
  <tr>
    <th>Version</th>
    <th>Changes</th>
    <th>End of life (EOL)</th>
  </tr>
  <tr>
    <td>`20240415`</td>
    <td>
      <ul><li>Changed several endpoints from unpaginated to paginated. Use the `limit` and `offset` query parameters to page through the results.</li> <li>Changed the [list access tokens](https://launchdarkly.com/docs/api/access-tokens/get-tokens) endpoint: <ul><li>Response is now paginated with a default limit of `25`</li></ul></li> <li>Changed the [list account members](https://launchdarkly.com/docs/api/account-members/get-members) endpoint: <ul><li>The `accessCheck` filter is no longer available</li></ul></li> <li>Changed the [list custom roles](https://launchdarkly.com/docs/api/custom-roles/get-custom-roles) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li><li>The `environments` field is now only returned if the request is filtered by environment, using the `filterEnv` query parameter</li><li>The `followerId`, `hasDataExport`, `status`, `contextKindTargeted`, and `segmentTargeted` filters are no longer available</li><li>The `compare` query parameter is no longer available</li></ul></li> <li>Changed the [list segments](https://launchdarkly.com/docs/api/segments/get-segments) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list teams](https://launchdarkly.com/docs/api/teams/get-teams) endpoint: <ul><li>The `expand` parameter no longer supports including `projects` or `roles`</li><li>In paginated results, the maximum page size is now 100</li></ul></li> <li>Changed the [get workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) endpoint: <ul><li>Response is now paginated with a default limit of `20`</li><li>The `_conflicts` field in the response is no longer available</li></ul></li> </ul>
    </td>
    <td>Current</td>
  </tr>
  <tr>
    <td>`20220603`</td>
    <td>
      <ul><li>Changed the [list projects](https://launchdarkly.com/docs/api/projects/get-projects) return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added support for filter and sort.</li><li>The project `environments` field is now expandable. This field is omitted by default.</li></ul></li><li>Changed the [get project](https://launchdarkly.com/docs/api/projects/get-project) return value:<ul><li>The `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul>
    </td>
    <td>2025-04-15</td>
  </tr>
  <tr>
    <td>`20210729`</td>
    <td>
      <ul><li>Changed the [create approval request](https://launchdarkly.com/docs/api/approvals/post-approval-request) return value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get user](https://launchdarkly.com/docs/api/users/get-user) return value. It now returns a user record, not a user. </li><li>Added additional optional fields to environment, segments, flags, members, and segments, including the ability to create big segments. </li><li> Added default values for flag variations when new environments are created. </li><li>Added filtering and pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query parameters. </li><li>Added endpoints for expiring user targets for flags and segments, scheduled changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals. </li></ul>
    </td>
    <td>2023-06-03</td>
  </tr>
  <tr>
    <td>`20191212`</td>
    <td>
      <ul><li>[List feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) now defaults to sending summaries of feature flag configurations, equivalent to setting the query parameter `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload. </li><li> Added endpoints for flags, flag status, projects, environments, audit logs, members, users, custom roles, segments, usage, streams, events, and data export. </li></ul>
    </td>
    <td>2022-07-29</td>
  </tr>
  <tr>
    <td>`20160426`</td>
    <td>
      <ul><li>Initial versioning of API. Tokens created before versioning have their version set to this.</li></ul>
    </td>
    <td>2020-12-12</td>
  </tr>
</table>

To learn more about how EOL is determined, read LaunchDarkly's [End of Life (EOL) Policy](https://launchdarkly.com/policies/end-of-life-policy/).
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@launchdarkly/mcp-server](#launchdarklymcp-server)
  * [Authentication](#authentication)
  * [Representations](#representations)
  * [Updates](#updates)
  * [Errors](#errors)
  * [CORS](#cors)
  * [Rate limiting](#rate-limiting)
  * [OpenAPI (Swagger) and client libraries](#openapi-swagger-and-client-libraries)
  * [Method overriding](#method-overriding)
  * [Beta resources](#beta-resources)
  * [Federal environments](#federal-environments)
  * [Versioning](#versioning)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication-1)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [File uploads](#file-uploads)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

> [!TIP]
> To finish publishing your SDK to npm and others you must [run your first generation action](https://www.speakeasy.com/docs/github-setup#step-by-step-guide).


The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add <UNSET>
```

### PNPM

```bash
pnpm add <UNSET>
```

### Bun

```bash
bun add <UNSET>
```

### Yarn

```bash
yarn add <UNSET> zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.


### Model Context Protocol (MCP) Server

This SDK is also an installable MCP server where the various SDK methods are
exposed as tools that can be invoked by AI applications.

> Node.js v20 or greater is required to run the MCP server from npm.

<details>
<summary>Claude installation steps</summary>

Add the following server definition to your `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "LaunchdarklyMcpServer": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

<details>
<summary>Cursor installation steps</summary>

Create a `.cursor/mcp.json` file in your project root with the following content:

```json
{
  "mcpServers": {
    "LaunchdarklyMcpServer": {
      "command": "npx",
      "args": [
        "-y", "--package", "@launchdarkly/mcp-server",
        "--",
        "mcp", "start",
        "--api-key", "..."
      ]
    }
  }
}
```

</details>

You can also run MCP servers as a standalone binary with no additional dependencies. You must pull these binaries from available Github releases:

```bash
curl -L -o mcp-server \
    https://github.com/{org}/{repo}/releases/download/{tag}/mcp-server-bun-darwin-arm64 && \
chmod +x mcp-server
```

If the repo is a private repo you must add your Github PAT to download a release `-H "Authorization: Bearer {GITHUB_PAT}"`.


```json
{
  "mcpServers": {
    "Todos": {
      "command": "./DOWNLOAD/PATH/mcp-server",
      "args": [
        "start"
      ]
    }
  }
}
```

For a full list of server arguments, run:

```sh
npx -y --package @launchdarkly/mcp-server -- mcp start --help
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name     | Type   | Scheme  | Environment Variable            |
| -------- | ------ | ------- | ------------------------------- |
| `apiKey` | apiKey | API key | `LAUNCHDARKLYMCPSERVER_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [accessTokens](docs/sdks/accesstokens/README.md)

* [getTokens](docs/sdks/accesstokens/README.md#gettokens) - List access tokens
* [postToken](docs/sdks/accesstokens/README.md#posttoken) - Create access token
* [getToken](docs/sdks/accesstokens/README.md#gettoken) - Get access token
* [deleteToken](docs/sdks/accesstokens/README.md#deletetoken) - Delete access token
* [patchToken](docs/sdks/accesstokens/README.md#patchtoken) - Patch access token
* [resetToken](docs/sdks/accesstokens/README.md#resettoken) - Reset access token

### [accountMembers](docs/sdks/accountmembers/README.md)

* [getMembers](docs/sdks/accountmembers/README.md#getmembers) - List account members
* [postMembers](docs/sdks/accountmembers/README.md#postmembers) - Invite new members
* [getMember](docs/sdks/accountmembers/README.md#getmember) - Get account member
* [deleteMember](docs/sdks/accountmembers/README.md#deletemember) - Delete account member
* [patchMember](docs/sdks/accountmembers/README.md#patchmember) - Modify an account member
* [postMemberTeams](docs/sdks/accountmembers/README.md#postmemberteams) - Add a member to teams

### [accountMembersBeta](docs/sdks/accountmembersbeta/README.md)

* [patchMembers](docs/sdks/accountmembersbeta/README.md#patchmembers) - Modify account members

### [accountUsageBeta](docs/sdks/accountusagebeta/README.md)

* [getDataExportEventsUsage](docs/sdks/accountusagebeta/README.md#getdataexporteventsusage) - Get data export events usage
* [getEvaluationsUsage](docs/sdks/accountusagebeta/README.md#getevaluationsusage) - Get evaluations usage
* [getEventsUsage](docs/sdks/accountusagebeta/README.md#geteventsusage) - Get events usage
* [getExperimentationKeysUsage](docs/sdks/accountusagebeta/README.md#getexperimentationkeysusage) - Get experimentation keys usage
* [getExperimentationUnitsUsage](docs/sdks/accountusagebeta/README.md#getexperimentationunitsusage) - Get experimentation units usage
* [getMauUsage](docs/sdks/accountusagebeta/README.md#getmauusage) - Get MAU usage
* [getMauUsageByCategory](docs/sdks/accountusagebeta/README.md#getmauusagebycategory) - Get MAU usage by category
* [getMauSdksByType](docs/sdks/accountusagebeta/README.md#getmausdksbytype) - Get MAU SDKs by type
* [getServiceConnectionUsage](docs/sdks/accountusagebeta/README.md#getserviceconnectionusage) - Get service connection usage
* [getStreamUsage](docs/sdks/accountusagebeta/README.md#getstreamusage) - Get stream usage
* [getStreamUsageBySDKVersion](docs/sdks/accountusagebeta/README.md#getstreamusagebysdkversion) - Get stream usage by SDK version
* [getStreamUsageSdkversion](docs/sdks/accountusagebeta/README.md#getstreamusagesdkversion) - Get stream usage SDK versions

### [aiConfigsBeta](docs/sdks/aiconfigsbeta/README.md)

* [getAIConfigs](docs/sdks/aiconfigsbeta/README.md#getaiconfigs) - List AI Configs
* [postAIConfig](docs/sdks/aiconfigsbeta/README.md#postaiconfig) - Create new AI Config
* [getAIConfig](docs/sdks/aiconfigsbeta/README.md#getaiconfig) - Get AI Config
* [deleteAIConfig](docs/sdks/aiconfigsbeta/README.md#deleteaiconfig) - Delete AI Config
* [patchAIConfig](docs/sdks/aiconfigsbeta/README.md#patchaiconfig) - Update AI Config
* [postAIConfigVariation](docs/sdks/aiconfigsbeta/README.md#postaiconfigvariation) - Create AI Config variation
* [getAIConfigVariation](docs/sdks/aiconfigsbeta/README.md#getaiconfigvariation) - Get AI Config variation
* [deleteAIConfigVariation](docs/sdks/aiconfigsbeta/README.md#deleteaiconfigvariation) - Delete AI Config variation
* [patchAIConfigVariation](docs/sdks/aiconfigsbeta/README.md#patchaiconfigvariation) - Update AI Config variation
* [getAIConfigMetrics](docs/sdks/aiconfigsbeta/README.md#getaiconfigmetrics) - Get AI Config metrics
* [getAIConfigMetricsByVariation](docs/sdks/aiconfigsbeta/README.md#getaiconfigmetricsbyvariation) - Get AI Config metrics by variation
* [postRestrictedModels](docs/sdks/aiconfigsbeta/README.md#postrestrictedmodels) - Add AI models to the restricted list
* [deleteRestrictedModels](docs/sdks/aiconfigsbeta/README.md#deleterestrictedmodels) - Remove AI models from the restricted list
* [listModelConfigs](docs/sdks/aiconfigsbeta/README.md#listmodelconfigs) - List AI model configs
* [postModelConfig](docs/sdks/aiconfigsbeta/README.md#postmodelconfig) - Create an AI model config
* [getModelConfig](docs/sdks/aiconfigsbeta/README.md#getmodelconfig) - Get AI model config
* [deleteModelConfig](docs/sdks/aiconfigsbeta/README.md#deletemodelconfig) - Delete an AI model config

### [announcements](docs/sdks/announcements/README.md)

* [getAnnouncementsPublic](docs/sdks/announcements/README.md#getannouncementspublic) - Get announcements
* [createAnnouncementPublic](docs/sdks/announcements/README.md#createannouncementpublic) - Create an announcement
* [deleteAnnouncementPublic](docs/sdks/announcements/README.md#deleteannouncementpublic) - Delete an announcement
* [updateAnnouncementPublic](docs/sdks/announcements/README.md#updateannouncementpublic) - Update an announcement

### [applicationsBeta](docs/sdks/applicationsbeta/README.md)

* [getApplications](docs/sdks/applicationsbeta/README.md#getapplications) - Get applications
* [getApplication](docs/sdks/applicationsbeta/README.md#getapplication) - Get application by key
* [deleteApplication](docs/sdks/applicationsbeta/README.md#deleteapplication) - Delete application
* [patchApplication](docs/sdks/applicationsbeta/README.md#patchapplication) - Update application
* [getApplicationVersions](docs/sdks/applicationsbeta/README.md#getapplicationversions) - Get application versions by application key
* [deleteApplicationVersion](docs/sdks/applicationsbeta/README.md#deleteapplicationversion) - Delete application version
* [patchApplicationVersion](docs/sdks/applicationsbeta/README.md#patchapplicationversion) - Update application version

### [approvals](docs/sdks/approvals/README.md)

* [getApprovalRequests](docs/sdks/approvals/README.md#getapprovalrequests) - List approval requests
* [postApprovalRequest](docs/sdks/approvals/README.md#postapprovalrequest) - Create approval request
* [getApprovalRequest](docs/sdks/approvals/README.md#getapprovalrequest) - Get approval request
* [deleteApprovalRequest](docs/sdks/approvals/README.md#deleteapprovalrequest) - Delete approval request
* [postApprovalRequestApply](docs/sdks/approvals/README.md#postapprovalrequestapply) - Apply approval request
* [postApprovalRequestReview](docs/sdks/approvals/README.md#postapprovalrequestreview) - Review approval request
* [getApprovalsForFlag](docs/sdks/approvals/README.md#getapprovalsforflag) - List approval requests for a flag
* [postApprovalRequestForFlag](docs/sdks/approvals/README.md#postapprovalrequestforflag) - Create approval request for a flag
* [postFlagCopyConfigApprovalRequest](docs/sdks/approvals/README.md#postflagcopyconfigapprovalrequest) - Create approval request to copy flag configurations across environments
* [getApprovalForFlag](docs/sdks/approvals/README.md#getapprovalforflag) - Get approval request for a flag
* [deleteApprovalRequestForFlag](docs/sdks/approvals/README.md#deleteapprovalrequestforflag) - Delete approval request for a flag
* [postApprovalRequestApplyForFlag](docs/sdks/approvals/README.md#postapprovalrequestapplyforflag) - Apply approval request for a flag
* [postApprovalRequestReviewForFlag](docs/sdks/approvals/README.md#postapprovalrequestreviewforflag) - Review approval request for a flag

### [approvalsBeta](docs/sdks/approvalsbeta/README.md)

* [patchApprovalRequest](docs/sdks/approvalsbeta/README.md#patchapprovalrequest) - Update approval request
* [patchFlagConfigApprovalRequest](docs/sdks/approvalsbeta/README.md#patchflagconfigapprovalrequest) - Update flag approval request

### [auditLog](docs/sdks/auditlog/README.md)

* [getAuditLogEntries](docs/sdks/auditlog/README.md#getauditlogentries) - List audit log entries
* [postAuditLogEntries](docs/sdks/auditlog/README.md#postauditlogentries) - Search audit log entries
* [getAuditLogEntry](docs/sdks/auditlog/README.md#getauditlogentry) - Get audit log entry

### [codeReferences](docs/sdks/codereferences/README.md)

* [getExtinctions](docs/sdks/codereferences/README.md#getextinctions) - List extinctions
* [getRepositories](docs/sdks/codereferences/README.md#getrepositories) - List repositories
* [postRepository](docs/sdks/codereferences/README.md#postrepository) - Create repository
* [getRepository](docs/sdks/codereferences/README.md#getrepository) - Get repository
* [deleteRepository](docs/sdks/codereferences/README.md#deleterepository) - Delete repository
* [patchRepository](docs/sdks/codereferences/README.md#patchrepository) - Update repository
* [deleteBranches](docs/sdks/codereferences/README.md#deletebranches) - Delete branches
* [getBranches](docs/sdks/codereferences/README.md#getbranches) - List branches
* [getBranch](docs/sdks/codereferences/README.md#getbranch) - Get branch
* [putBranch](docs/sdks/codereferences/README.md#putbranch) - Upsert branch
* [postExtinction](docs/sdks/codereferences/README.md#postextinction) - Create extinction
* [getRootStatistic](docs/sdks/codereferences/README.md#getrootstatistic) - Get links to code reference repositories for each project
* [getStatistics](docs/sdks/codereferences/README.md#getstatistics) - Get code references statistics for flags

### [contexts](docs/sdks/contexts/README.md)

* [getContextKindsByProjectKey](docs/sdks/contexts/README.md#getcontextkindsbyprojectkey) - Get context kinds
* [putContextKind](docs/sdks/contexts/README.md#putcontextkind) - Create or update context kind
* [getContextAttributeNames](docs/sdks/contexts/README.md#getcontextattributenames) - Get context attribute names
* [getContextAttributeValues](docs/sdks/contexts/README.md#getcontextattributevalues) - Get context attribute values
* [searchContextInstances](docs/sdks/contexts/README.md#searchcontextinstances) - Search for context instances
* [getContextInstances](docs/sdks/contexts/README.md#getcontextinstances) - Get context instances
* [deleteContextInstances](docs/sdks/contexts/README.md#deletecontextinstances) - Delete context instances
* [searchContexts](docs/sdks/contexts/README.md#searchcontexts) - Search for contexts
* [getContexts](docs/sdks/contexts/README.md#getcontexts) - Get contexts
* [evaluateContextInstance](docs/sdks/contexts/README.md#evaluatecontextinstance) - Evaluate flags for context instance

### [contextSettings](docs/sdks/contextsettings/README.md)

* [putContextFlagSetting](docs/sdks/contextsettings/README.md#putcontextflagsetting) - Update flag settings for context

### [customRoles](docs/sdks/customroles/README.md)

* [getCustomRoles](docs/sdks/customroles/README.md#getcustomroles) - List custom roles
* [postCustomRole](docs/sdks/customroles/README.md#postcustomrole) - Create custom role
* [getCustomRole](docs/sdks/customroles/README.md#getcustomrole) - Get custom role
* [deleteCustomRole](docs/sdks/customroles/README.md#deletecustomrole) - Delete custom role
* [patchCustomRole](docs/sdks/customroles/README.md#patchcustomrole) - Update custom role

### [dataExportDestinations](docs/sdks/dataexportdestinations/README.md)

* [getDestinations](docs/sdks/dataexportdestinations/README.md#getdestinations) - List destinations
* [postGenerateWarehouseDestinationKeyPair](docs/sdks/dataexportdestinations/README.md#postgeneratewarehousedestinationkeypair) - Generate Snowflake destination key pair
* [postDestination](docs/sdks/dataexportdestinations/README.md#postdestination) - Create Data Export destination
* [getDestination](docs/sdks/dataexportdestinations/README.md#getdestination) - Get destination
* [deleteDestination](docs/sdks/dataexportdestinations/README.md#deletedestination) - Delete Data Export destination
* [patchDestination](docs/sdks/dataexportdestinations/README.md#patchdestination) - Update Data Export destination

### [environments](docs/sdks/environments/README.md)

* [getEnvironmentsByProject](docs/sdks/environments/README.md#getenvironmentsbyproject) - List environments
* [postEnvironment](docs/sdks/environments/README.md#postenvironment) - Create environment
* [getEnvironment](docs/sdks/environments/README.md#getenvironment) - Get environment
* [deleteEnvironment](docs/sdks/environments/README.md#deleteenvironment) - Delete environment
* [patchEnvironment](docs/sdks/environments/README.md#patchenvironment) - Update environment
* [resetEnvironmentSDKKey](docs/sdks/environments/README.md#resetenvironmentsdkkey) - Reset environment SDK key
* [resetEnvironmentMobileKey](docs/sdks/environments/README.md#resetenvironmentmobilekey) - Reset environment mobile SDK key

### [experiments](docs/sdks/experiments/README.md)

* [getExperiments](docs/sdks/experiments/README.md#getexperiments) - Get experiments
* [createExperiment](docs/sdks/experiments/README.md#createexperiment) - Create experiment
* [getExperiment](docs/sdks/experiments/README.md#getexperiment) - Get experiment
* [patchExperiment](docs/sdks/experiments/README.md#patchexperiment) - Patch experiment
* [createIteration](docs/sdks/experiments/README.md#createiteration) - Create iteration
* [~~getExperimentResultsForMetricGroup~~](docs/sdks/experiments/README.md#getexperimentresultsformetricgroup) - Get experiment results for metric group (Deprecated) :warning: **Deprecated**
* [~~getExperimentResults~~](docs/sdks/experiments/README.md#getexperimentresults) - Get experiment results (Deprecated) :warning: **Deprecated**
* [getExperimentationSettings](docs/sdks/experiments/README.md#getexperimentationsettings) - Get experimentation settings
* [putExperimentationSettings](docs/sdks/experiments/README.md#putexperimentationsettings) - Update experimentation settings

### [featureFlags](docs/sdks/featureflags/README.md)

* [getFeatureFlagStatusAcrossEnvironments](docs/sdks/featureflags/README.md#getfeatureflagstatusacrossenvironments) - Get flag status across environments
* [getFeatureFlagStatuses](docs/sdks/featureflags/README.md#getfeatureflagstatuses) - List feature flag statuses
* [getFeatureFlagStatus](docs/sdks/featureflags/README.md#getfeatureflagstatus) - Get feature flag status
* [getFeatureFlags](docs/sdks/featureflags/README.md#getfeatureflags) - List feature flags
* [postFeatureFlag](docs/sdks/featureflags/README.md#postfeatureflag) - Create a feature flag
* [getFeatureFlag](docs/sdks/featureflags/README.md#getfeatureflag) - Get feature flag
* [deleteFeatureFlag](docs/sdks/featureflags/README.md#deletefeatureflag) - Delete feature flag
* [patchFeatureFlag](docs/sdks/featureflags/README.md#patchfeatureflag) - Update feature flag
* [copyFeatureFlag](docs/sdks/featureflags/README.md#copyfeatureflag) - Copy feature flag
* [getExpiringContextTargets](docs/sdks/featureflags/README.md#getexpiringcontexttargets) - Get expiring context targets for feature flag
* [patchExpiringTargets](docs/sdks/featureflags/README.md#patchexpiringtargets) - Update expiring context targets on feature flag
* [getExpiringUserTargets](docs/sdks/featureflags/README.md#getexpiringusertargets) - Get expiring user targets for feature flag
* [patchExpiringUserTargets](docs/sdks/featureflags/README.md#patchexpiringusertargets) - Update expiring user targets on feature flag
* [postMigrationSafetyIssues](docs/sdks/featureflags/README.md#postmigrationsafetyissues) - Get migration safety issues

### [featureFlagsBeta](docs/sdks/featureflagsbeta/README.md)

* [getDependentFlagsByEnv](docs/sdks/featureflagsbeta/README.md#getdependentflagsbyenv) - List dependent feature flags by environment
* [getDependentFlags](docs/sdks/featureflagsbeta/README.md#getdependentflags) - List dependent feature flags

### [flagImportConfigurationsBeta](docs/sdks/flagimportconfigurationsbeta/README.md)

* [getFlagImportConfigurations](docs/sdks/flagimportconfigurationsbeta/README.md#getflagimportconfigurations) - List all flag import configurations
* [createFlagImportConfiguration](docs/sdks/flagimportconfigurationsbeta/README.md#createflagimportconfiguration) - Create a flag import configuration
* [getFlagImportConfiguration](docs/sdks/flagimportconfigurationsbeta/README.md#getflagimportconfiguration) - Get a single flag import configuration
* [deleteFlagImportConfiguration](docs/sdks/flagimportconfigurationsbeta/README.md#deleteflagimportconfiguration) - Delete a flag import configuration
* [patchFlagImportConfiguration](docs/sdks/flagimportconfigurationsbeta/README.md#patchflagimportconfiguration) - Update a flag import configuration
* [triggerFlagImportJob](docs/sdks/flagimportconfigurationsbeta/README.md#triggerflagimportjob) - Trigger a single flag import run

### [flagLinksBeta](docs/sdks/flaglinksbeta/README.md)

* [getFlagLinks](docs/sdks/flaglinksbeta/README.md#getflaglinks) - List flag links
* [createFlagLink](docs/sdks/flaglinksbeta/README.md#createflaglink) - Create flag link
* [deleteFlagLink](docs/sdks/flaglinksbeta/README.md#deleteflaglink) - Delete flag link
* [updateFlagLink](docs/sdks/flaglinksbeta/README.md#updateflaglink) - Update flag link

### [flagTriggers](docs/sdks/flagtriggers/README.md)

* [getTriggerWorkflows](docs/sdks/flagtriggers/README.md#gettriggerworkflows) - List flag triggers
* [createTriggerWorkflow](docs/sdks/flagtriggers/README.md#createtriggerworkflow) - Create flag trigger
* [getTriggerWorkflowById](docs/sdks/flagtriggers/README.md#gettriggerworkflowbyid) - Get flag trigger by ID
* [deleteTriggerWorkflow](docs/sdks/flagtriggers/README.md#deletetriggerworkflow) - Delete flag trigger
* [patchTriggerWorkflow](docs/sdks/flagtriggers/README.md#patchtriggerworkflow) - Update flag trigger

### [followFlags](docs/sdks/followflags/README.md)

* [getFollowersByProjEnv](docs/sdks/followflags/README.md#getfollowersbyprojenv) - Get followers of all flags in a given project and environment
* [getFlagFollowers](docs/sdks/followflags/README.md#getflagfollowers) - Get followers of a flag in a project and environment
* [putFlagFollower](docs/sdks/followflags/README.md#putflagfollower) - Add a member as a follower of a flag in a project and environment
* [deleteFlagFollower](docs/sdks/followflags/README.md#deleteflagfollower) - Remove a member as a follower of a flag in a project and environment

### [holdoutsBeta](docs/sdks/holdoutsbeta/README.md)

* [getAllHoldouts](docs/sdks/holdoutsbeta/README.md#getallholdouts) - Get all holdouts
* [postHoldout](docs/sdks/holdoutsbeta/README.md#postholdout) - Create holdout
* [getHoldoutById](docs/sdks/holdoutsbeta/README.md#getholdoutbyid) - Get Holdout by Id
* [getHoldout](docs/sdks/holdoutsbeta/README.md#getholdout) - Get holdout
* [patchHoldout](docs/sdks/holdoutsbeta/README.md#patchholdout) - Patch holdout

### [insightsChartsBeta](docs/sdks/insightschartsbeta/README.md)

* [getDeploymentFrequencyChart](docs/sdks/insightschartsbeta/README.md#getdeploymentfrequencychart) - Get deployment frequency chart data
* [getStaleFlagsChart](docs/sdks/insightschartsbeta/README.md#getstaleflagschart) - Get stale flags chart data
* [getFlagStatusChart](docs/sdks/insightschartsbeta/README.md#getflagstatuschart) - Get flag status chart data
* [getLeadTimeChart](docs/sdks/insightschartsbeta/README.md#getleadtimechart) - Get lead time chart data
* [getReleaseFrequencyChart](docs/sdks/insightschartsbeta/README.md#getreleasefrequencychart) - Get release frequency chart data

### [insightsDeploymentsBeta](docs/sdks/insightsdeploymentsbeta/README.md)

* [createDeploymentEvent](docs/sdks/insightsdeploymentsbeta/README.md#createdeploymentevent) - Create deployment event
* [getDeployments](docs/sdks/insightsdeploymentsbeta/README.md#getdeployments) - List deployments
* [getDeployment](docs/sdks/insightsdeploymentsbeta/README.md#getdeployment) - Get deployment
* [updateDeployment](docs/sdks/insightsdeploymentsbeta/README.md#updatedeployment) - Update deployment

### [insightsFlagEventsBeta](docs/sdks/insightsflageventsbeta/README.md)

* [getFlagEvents](docs/sdks/insightsflageventsbeta/README.md#getflagevents) - List flag events

### [insightsPullRequestsBeta](docs/sdks/insightspullrequestsbeta/README.md)

* [getPullRequests](docs/sdks/insightspullrequestsbeta/README.md#getpullrequests) - List pull requests

### [insightsRepositoriesBeta](docs/sdks/insightsrepositoriesbeta/README.md)

* [getInsightsRepositories](docs/sdks/insightsrepositoriesbeta/README.md#getinsightsrepositories) - List repositories
* [associateRepositoriesAndProjects](docs/sdks/insightsrepositoriesbeta/README.md#associaterepositoriesandprojects) - Associate repositories with projects
* [deleteRepositoryProject](docs/sdks/insightsrepositoriesbeta/README.md#deleterepositoryproject) - Remove repository project association

### [insightsScoresBeta](docs/sdks/insightsscoresbeta/README.md)

* [createInsightGroup](docs/sdks/insightsscoresbeta/README.md#createinsightgroup) - Create insight group
* [getInsightGroups](docs/sdks/insightsscoresbeta/README.md#getinsightgroups) - List insight groups
* [getInsightGroup](docs/sdks/insightsscoresbeta/README.md#getinsightgroup) - Get insight group
* [deleteInsightGroup](docs/sdks/insightsscoresbeta/README.md#deleteinsightgroup) - Delete insight group
* [patchInsightGroup](docs/sdks/insightsscoresbeta/README.md#patchinsightgroup) - Patch insight group
* [getInsightsScores](docs/sdks/insightsscoresbeta/README.md#getinsightsscores) - Get insight scores

### [integrationAuditLogSubscriptions](docs/sdks/integrationauditlogsubscriptions/README.md)

* [getSubscriptions](docs/sdks/integrationauditlogsubscriptions/README.md#getsubscriptions) - Get audit log subscriptions by integration
* [createSubscription](docs/sdks/integrationauditlogsubscriptions/README.md#createsubscription) - Create audit log subscription
* [getSubscriptionByID](docs/sdks/integrationauditlogsubscriptions/README.md#getsubscriptionbyid) - Get audit log subscription by ID
* [deleteSubscription](docs/sdks/integrationauditlogsubscriptions/README.md#deletesubscription) - Delete audit log subscription
* [updateSubscription](docs/sdks/integrationauditlogsubscriptions/README.md#updatesubscription) - Update audit log subscription

### [integrationDeliveryConfigurationsBeta](docs/sdks/integrationdeliveryconfigurationsbeta/README.md)

* [getIntegrationDeliveryConfigurations](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#getintegrationdeliveryconfigurations) - List all delivery configurations
* [getIntegrationDeliveryConfigurationByEnvironment](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#getintegrationdeliveryconfigurationbyenvironment) - Get delivery configurations by environment
* [createIntegrationDeliveryConfiguration](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#createintegrationdeliveryconfiguration) - Create delivery configuration
* [getIntegrationDeliveryConfigurationById](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#getintegrationdeliveryconfigurationbyid) - Get delivery configuration by ID
* [deleteIntegrationDeliveryConfiguration](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#deleteintegrationdeliveryconfiguration) - Delete delivery configuration
* [patchIntegrationDeliveryConfiguration](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#patchintegrationdeliveryconfiguration) - Update delivery configuration
* [validateIntegrationDeliveryConfiguration](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#validateintegrationdeliveryconfiguration) - Validate delivery configuration

### [integrationsBeta](docs/sdks/integrationsbeta/README.md)

* [getAllIntegrationConfigurations](docs/sdks/integrationsbeta/README.md#getallintegrationconfigurations) - Get all configurations for the integration
* [createIntegrationConfiguration](docs/sdks/integrationsbeta/README.md#createintegrationconfiguration) - Create integration configuration
* [getIntegrationConfiguration](docs/sdks/integrationsbeta/README.md#getintegrationconfiguration) - Get an integration configuration
* [deleteIntegrationConfiguration](docs/sdks/integrationsbeta/README.md#deleteintegrationconfiguration) - Delete integration configuration
* [updateIntegrationConfiguration](docs/sdks/integrationsbeta/README.md#updateintegrationconfiguration) - Update integration configuration


### [layers](docs/sdks/layers/README.md)

* [getLayers](docs/sdks/layers/README.md#getlayers) - Get layers
* [createLayer](docs/sdks/layers/README.md#createlayer) - Create layer
* [updateLayer](docs/sdks/layers/README.md#updatelayer) - Update layer

### [metrics](docs/sdks/metrics/README.md)

* [getMetrics](docs/sdks/metrics/README.md#getmetrics) - List metrics
* [postMetric](docs/sdks/metrics/README.md#postmetric) - Create metric
* [getMetric](docs/sdks/metrics/README.md#getmetric) - Get metric
* [deleteMetric](docs/sdks/metrics/README.md#deletemetric) - Delete metric
* [patchMetric](docs/sdks/metrics/README.md#patchmetric) - Update metric

### [metricsBeta](docs/sdks/metricsbeta/README.md)

* [getMetricGroups](docs/sdks/metricsbeta/README.md#getmetricgroups) - List metric groups
* [createMetricGroup](docs/sdks/metricsbeta/README.md#createmetricgroup) - Create metric group
* [getMetricGroup](docs/sdks/metricsbeta/README.md#getmetricgroup) - Get metric group
* [deleteMetricGroup](docs/sdks/metricsbeta/README.md#deletemetricgroup) - Delete metric group
* [patchMetricGroup](docs/sdks/metricsbeta/README.md#patchmetricgroup) - Patch metric group

### [oAuth2Clients](docs/sdks/oauth2clients/README.md)

* [getOAuthClients](docs/sdks/oauth2clients/README.md#getoauthclients) - Get clients
* [createOAuth2Client](docs/sdks/oauth2clients/README.md#createoauth2client) - Create a LaunchDarkly OAuth 2.0 client
* [getOAuthClientById](docs/sdks/oauth2clients/README.md#getoauthclientbyid) - Get client by ID
* [deleteOAuthClient](docs/sdks/oauth2clients/README.md#deleteoauthclient) - Delete OAuth 2.0 client
* [patchOAuthClient](docs/sdks/oauth2clients/README.md#patchoauthclient) - Patch client by ID

### [other](docs/sdks/other/README.md)

* [getRoot](docs/sdks/other/README.md#getroot) - Root resource
* [getCallerIdentity](docs/sdks/other/README.md#getcalleridentity) - Identify the caller
* [getOpenapiSpec](docs/sdks/other/README.md#getopenapispec) - Gets the OpenAPI spec in json
* [getIps](docs/sdks/other/README.md#getips) - Gets the public IP list
* [getVersions](docs/sdks/other/README.md#getversions) - Get version information

### [persistentStoreIntegrationsBeta](docs/sdks/persistentstoreintegrationsbeta/README.md)

* [getBigSegmentStoreIntegrations](docs/sdks/persistentstoreintegrationsbeta/README.md#getbigsegmentstoreintegrations) - List all big segment store integrations
* [createBigSegmentStoreIntegration](docs/sdks/persistentstoreintegrationsbeta/README.md#createbigsegmentstoreintegration) - Create big segment store integration
* [getBigSegmentStoreIntegration](docs/sdks/persistentstoreintegrationsbeta/README.md#getbigsegmentstoreintegration) - Get big segment store integration by ID
* [deleteBigSegmentStoreIntegration](docs/sdks/persistentstoreintegrationsbeta/README.md#deletebigsegmentstoreintegration) - Delete big segment store integration
* [patchBigSegmentStoreIntegration](docs/sdks/persistentstoreintegrationsbeta/README.md#patchbigsegmentstoreintegration) - Update big segment store integration

### [projects](docs/sdks/projects/README.md)

* [getProjects](docs/sdks/projects/README.md#getprojects) - List projects
* [postProject](docs/sdks/projects/README.md#postproject) - Create project
* [getProject](docs/sdks/projects/README.md#getproject) - Get project
* [deleteProject](docs/sdks/projects/README.md#deleteproject) - Delete project
* [patchProject](docs/sdks/projects/README.md#patchproject) - Update project
* [getFlagDefaultsByProject](docs/sdks/projects/README.md#getflagdefaultsbyproject) - Get flag defaults for project
* [putFlagDefaultsByProject](docs/sdks/projects/README.md#putflagdefaultsbyproject) - Create or update flag defaults for project
* [patchFlagDefaultsByProject](docs/sdks/projects/README.md#patchflagdefaultsbyproject) - Update flag default for project

### [relayProxyConfigurations](docs/sdks/relayproxyconfigurations/README.md)

* [getRelayProxyConfigs](docs/sdks/relayproxyconfigurations/README.md#getrelayproxyconfigs) - List Relay Proxy configs
* [postRelayAutoConfig](docs/sdks/relayproxyconfigurations/README.md#postrelayautoconfig) - Create a new Relay Proxy config
* [getRelayProxyConfig](docs/sdks/relayproxyconfigurations/README.md#getrelayproxyconfig) - Get Relay Proxy config
* [deleteRelayAutoConfig](docs/sdks/relayproxyconfigurations/README.md#deleterelayautoconfig) - Delete Relay Proxy config by ID
* [patchRelayAutoConfig](docs/sdks/relayproxyconfigurations/README.md#patchrelayautoconfig) - Update a Relay Proxy config
* [resetRelayAutoConfig](docs/sdks/relayproxyconfigurations/README.md#resetrelayautoconfig) - Reset Relay Proxy configuration key

### [releasePipelinesBeta](docs/sdks/releasepipelinesbeta/README.md)

* [getAllReleasePipelines](docs/sdks/releasepipelinesbeta/README.md#getallreleasepipelines) - Get all release pipelines
* [postReleasePipeline](docs/sdks/releasepipelinesbeta/README.md#postreleasepipeline) - Create a release pipeline
* [getReleasePipelineByKey](docs/sdks/releasepipelinesbeta/README.md#getreleasepipelinebykey) - Get release pipeline by key
* [putReleasePipeline](docs/sdks/releasepipelinesbeta/README.md#putreleasepipeline) - Update a release pipeline
* [deleteReleasePipeline](docs/sdks/releasepipelinesbeta/README.md#deletereleasepipeline) - Delete release pipeline
* [getAllReleaseProgressionsForReleasePipeline](docs/sdks/releasepipelinesbeta/README.md#getallreleaseprogressionsforreleasepipeline) - Get release progressions for release pipeline

### [releasesBeta](docs/sdks/releasesbeta/README.md)

* [getReleaseByFlagKey](docs/sdks/releasesbeta/README.md#getreleasebyflagkey) - Get release for flag
* [deleteReleaseByFlagKey](docs/sdks/releasesbeta/README.md#deletereleasebyflagkey) - Delete a release for flag
* [patchReleaseByFlagKey](docs/sdks/releasesbeta/README.md#patchreleasebyflagkey) - Patch release for flag
* [createReleaseForFlag](docs/sdks/releasesbeta/README.md#createreleaseforflag) - Create a new release for flag
* [updatePhaseStatus](docs/sdks/releasesbeta/README.md#updatephasestatus) - Update phase status for release

### [scheduledChanges](docs/sdks/scheduledchanges/README.md)

* [getFlagConfigScheduledChanges](docs/sdks/scheduledchanges/README.md#getflagconfigscheduledchanges) - List scheduled changes
* [postFlagConfigScheduledChanges](docs/sdks/scheduledchanges/README.md#postflagconfigscheduledchanges) - Create scheduled changes workflow
* [getFeatureFlagScheduledChange](docs/sdks/scheduledchanges/README.md#getfeatureflagscheduledchange) - Get a scheduled change
* [deleteFlagConfigScheduledChanges](docs/sdks/scheduledchanges/README.md#deleteflagconfigscheduledchanges) - Delete scheduled changes workflow
* [patchFlagConfigScheduledChange](docs/sdks/scheduledchanges/README.md#patchflagconfigscheduledchange) - Update scheduled changes workflow

### [segments](docs/sdks/segments/README.md)

* [getContextInstanceSegmentsMembershipByEnv](docs/sdks/segments/README.md#getcontextinstancesegmentsmembershipbyenv) - List segment memberships for context instance
* [getSegments](docs/sdks/segments/README.md#getsegments) - List segments
* [postSegment](docs/sdks/segments/README.md#postsegment) - Create segment
* [getSegment](docs/sdks/segments/README.md#getsegment) - Get segment
* [deleteSegment](docs/sdks/segments/README.md#deletesegment) - Delete segment
* [patchSegment](docs/sdks/segments/README.md#patchsegment) - Patch segment
* [updateBigSegmentContextTargets](docs/sdks/segments/README.md#updatebigsegmentcontexttargets) - Update context targets on a big segment
* [getSegmentMembershipForContext](docs/sdks/segments/README.md#getsegmentmembershipforcontext) - Get big segment membership for context
* [createBigSegmentExport](docs/sdks/segments/README.md#createbigsegmentexport) - Create big segment export
* [getBigSegmentExport](docs/sdks/segments/README.md#getbigsegmentexport) - Get big segment export
* [createBigSegmentImport](docs/sdks/segments/README.md#createbigsegmentimport) - Create big segment import
* [getBigSegmentImport](docs/sdks/segments/README.md#getbigsegmentimport) - Get big segment import
* [updateBigSegmentTargets](docs/sdks/segments/README.md#updatebigsegmenttargets) - Update user context targets on a big segment
* [getSegmentMembershipForUser](docs/sdks/segments/README.md#getsegmentmembershipforuser) - Get big segment membership for user
* [getExpiringTargetsForSegment](docs/sdks/segments/README.md#getexpiringtargetsforsegment) - Get expiring targets for segment
* [patchExpiringTargetsForSegment](docs/sdks/segments/README.md#patchexpiringtargetsforsegment) - Update expiring targets for segment
* [getExpiringUserTargetsForSegment](docs/sdks/segments/README.md#getexpiringusertargetsforsegment) - Get expiring user targets for segment
* [patchExpiringUserTargetsForSegment](docs/sdks/segments/README.md#patchexpiringusertargetsforsegment) - Update expiring user targets for segment

### [tags](docs/sdks/tags/README.md)

* [getTags](docs/sdks/tags/README.md#gettags) - List tags

### [teams](docs/sdks/teams/README.md)

* [getTeams](docs/sdks/teams/README.md#getteams) - List teams
* [postTeam](docs/sdks/teams/README.md#postteam) - Create team
* [getTeam](docs/sdks/teams/README.md#getteam) - Get team
* [deleteTeam](docs/sdks/teams/README.md#deleteteam) - Delete team
* [patchTeam](docs/sdks/teams/README.md#patchteam) - Update team
* [getTeamMaintainers](docs/sdks/teams/README.md#getteammaintainers) - Get team maintainers
* [postTeamMembers](docs/sdks/teams/README.md#postteammembers) - Add multiple members to team
* [getTeamRoles](docs/sdks/teams/README.md#getteamroles) - Get team custom roles

### [teamsBeta](docs/sdks/teamsbeta/README.md)

* [patchTeams](docs/sdks/teamsbeta/README.md#patchteams) - Update teams

### [~~users~~](docs/sdks/users/README.md)

* [~~getSearchUsers~~](docs/sdks/users/README.md#getsearchusers) - Find users :warning: **Deprecated**
* [~~getUsers~~](docs/sdks/users/README.md#getusers) - List users :warning: **Deprecated**
* [~~getUser~~](docs/sdks/users/README.md#getuser) - Get user :warning: **Deprecated**
* [~~deleteUser~~](docs/sdks/users/README.md#deleteuser) - Delete user :warning: **Deprecated**

### [~~usersBeta~~](docs/sdks/usersbeta/README.md)

* [~~getUserAttributeNames~~](docs/sdks/usersbeta/README.md#getuserattributenames) - Get user attribute names :warning: **Deprecated**

### [~~userSettings~~](docs/sdks/usersettings/README.md)

* [~~getUserFlagSettings~~](docs/sdks/usersettings/README.md#getuserflagsettings) - List flag settings for user :warning: **Deprecated**
* [~~getUserFlagSetting~~](docs/sdks/usersettings/README.md#getuserflagsetting) - Get flag setting for user :warning: **Deprecated**
* [~~putFlagSetting~~](docs/sdks/usersettings/README.md#putflagsetting) - Update flag settings for user :warning: **Deprecated**
* [~~getExpiringFlagsForUser~~](docs/sdks/usersettings/README.md#getexpiringflagsforuser) - Get expiring dates on flags for user :warning: **Deprecated**
* [~~patchExpiringFlagsForUser~~](docs/sdks/usersettings/README.md#patchexpiringflagsforuser) - Update expiring user target for flags :warning: **Deprecated**

### [webhooks](docs/sdks/webhooks/README.md)

* [getAllWebhooks](docs/sdks/webhooks/README.md#getallwebhooks) - List webhooks
* [postWebhook](docs/sdks/webhooks/README.md#postwebhook) - Creates a webhook
* [getWebhook](docs/sdks/webhooks/README.md#getwebhook) - Get webhook
* [deleteWebhook](docs/sdks/webhooks/README.md#deletewebhook) - Delete webhook
* [patchWebhook](docs/sdks/webhooks/README.md#patchwebhook) - Update webhook

### [workflows](docs/sdks/workflows/README.md)

* [getWorkflows](docs/sdks/workflows/README.md#getworkflows) - Get workflows
* [postWorkflow](docs/sdks/workflows/README.md#postworkflow) - Create workflow
* [getCustomWorkflow](docs/sdks/workflows/README.md#getcustomworkflow) - Get custom workflow
* [deleteWorkflow](docs/sdks/workflows/README.md#deleteworkflow) - Delete workflow

### [workflowTemplates](docs/sdks/workflowtemplates/README.md)

* [getWorkflowTemplates](docs/sdks/workflowtemplates/README.md#getworkflowtemplates) - Get workflow templates
* [createWorkflowTemplate](docs/sdks/workflowtemplates/README.md#createworkflowtemplate) - Create workflow template
* [deleteWorkflowTemplate](docs/sdks/workflowtemplates/README.md#deleteworkflowtemplate) - Delete workflow template

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`accessTokensDeleteToken`](docs/sdks/accesstokens/README.md#deletetoken) - Delete access token
- [`accessTokensGetToken`](docs/sdks/accesstokens/README.md#gettoken) - Get access token
- [`accessTokensGetTokens`](docs/sdks/accesstokens/README.md#gettokens) - List access tokens
- [`accessTokensPatchToken`](docs/sdks/accesstokens/README.md#patchtoken) - Patch access token
- [`accessTokensPostToken`](docs/sdks/accesstokens/README.md#posttoken) - Create access token
- [`accessTokensResetToken`](docs/sdks/accesstokens/README.md#resettoken) - Reset access token
- [`accountMembersBetaPatchMembers`](docs/sdks/accountmembersbeta/README.md#patchmembers) - Modify account members
- [`accountMembersDeleteMember`](docs/sdks/accountmembers/README.md#deletemember) - Delete account member
- [`accountMembersGetMember`](docs/sdks/accountmembers/README.md#getmember) - Get account member
- [`accountMembersGetMembers`](docs/sdks/accountmembers/README.md#getmembers) - List account members
- [`accountMembersPatchMember`](docs/sdks/accountmembers/README.md#patchmember) - Modify an account member
- [`accountMembersPostMembers`](docs/sdks/accountmembers/README.md#postmembers) - Invite new members
- [`accountMembersPostMemberTeams`](docs/sdks/accountmembers/README.md#postmemberteams) - Add a member to teams
- [`accountUsageBetaGetDataExportEventsUsage`](docs/sdks/accountusagebeta/README.md#getdataexporteventsusage) - Get data export events usage
- [`accountUsageBetaGetEvaluationsUsage`](docs/sdks/accountusagebeta/README.md#getevaluationsusage) - Get evaluations usage
- [`accountUsageBetaGetEventsUsage`](docs/sdks/accountusagebeta/README.md#geteventsusage) - Get events usage
- [`accountUsageBetaGetExperimentationKeysUsage`](docs/sdks/accountusagebeta/README.md#getexperimentationkeysusage) - Get experimentation keys usage
- [`accountUsageBetaGetExperimentationUnitsUsage`](docs/sdks/accountusagebeta/README.md#getexperimentationunitsusage) - Get experimentation units usage
- [`accountUsageBetaGetMauSdksByType`](docs/sdks/accountusagebeta/README.md#getmausdksbytype) - Get MAU SDKs by type
- [`accountUsageBetaGetMauUsage`](docs/sdks/accountusagebeta/README.md#getmauusage) - Get MAU usage
- [`accountUsageBetaGetMauUsageByCategory`](docs/sdks/accountusagebeta/README.md#getmauusagebycategory) - Get MAU usage by category
- [`accountUsageBetaGetServiceConnectionUsage`](docs/sdks/accountusagebeta/README.md#getserviceconnectionusage) - Get service connection usage
- [`accountUsageBetaGetStreamUsage`](docs/sdks/accountusagebeta/README.md#getstreamusage) - Get stream usage
- [`accountUsageBetaGetStreamUsageBySDKVersion`](docs/sdks/accountusagebeta/README.md#getstreamusagebysdkversion) - Get stream usage by SDK version
- [`accountUsageBetaGetStreamUsageSdkversion`](docs/sdks/accountusagebeta/README.md#getstreamusagesdkversion) - Get stream usage SDK versions
- [`aiConfigsBetaDeleteAIConfig`](docs/sdks/aiconfigsbeta/README.md#deleteaiconfig) - Delete AI Config
- [`aiConfigsBetaDeleteAIConfigVariation`](docs/sdks/aiconfigsbeta/README.md#deleteaiconfigvariation) - Delete AI Config variation
- [`aiConfigsBetaDeleteModelConfig`](docs/sdks/aiconfigsbeta/README.md#deletemodelconfig) - Delete an AI model config
- [`aiConfigsBetaDeleteRestrictedModels`](docs/sdks/aiconfigsbeta/README.md#deleterestrictedmodels) - Remove AI models from the restricted list
- [`aiConfigsBetaGetAIConfig`](docs/sdks/aiconfigsbeta/README.md#getaiconfig) - Get AI Config
- [`aiConfigsBetaGetAIConfigMetrics`](docs/sdks/aiconfigsbeta/README.md#getaiconfigmetrics) - Get AI Config metrics
- [`aiConfigsBetaGetAIConfigMetricsByVariation`](docs/sdks/aiconfigsbeta/README.md#getaiconfigmetricsbyvariation) - Get AI Config metrics by variation
- [`aiConfigsBetaGetAIConfigs`](docs/sdks/aiconfigsbeta/README.md#getaiconfigs) - List AI Configs
- [`aiConfigsBetaGetAIConfigVariation`](docs/sdks/aiconfigsbeta/README.md#getaiconfigvariation) - Get AI Config variation
- [`aiConfigsBetaGetModelConfig`](docs/sdks/aiconfigsbeta/README.md#getmodelconfig) - Get AI model config
- [`aiConfigsBetaListModelConfigs`](docs/sdks/aiconfigsbeta/README.md#listmodelconfigs) - List AI model configs
- [`aiConfigsBetaPatchAIConfig`](docs/sdks/aiconfigsbeta/README.md#patchaiconfig) - Update AI Config
- [`aiConfigsBetaPatchAIConfigVariation`](docs/sdks/aiconfigsbeta/README.md#patchaiconfigvariation) - Update AI Config variation
- [`aiConfigsBetaPostAIConfig`](docs/sdks/aiconfigsbeta/README.md#postaiconfig) - Create new AI Config
- [`aiConfigsBetaPostAIConfigVariation`](docs/sdks/aiconfigsbeta/README.md#postaiconfigvariation) - Create AI Config variation
- [`aiConfigsBetaPostModelConfig`](docs/sdks/aiconfigsbeta/README.md#postmodelconfig) - Create an AI model config
- [`aiConfigsBetaPostRestrictedModels`](docs/sdks/aiconfigsbeta/README.md#postrestrictedmodels) - Add AI models to the restricted list
- [`announcementsCreateAnnouncementPublic`](docs/sdks/announcements/README.md#createannouncementpublic) - Create an announcement
- [`announcementsDeleteAnnouncementPublic`](docs/sdks/announcements/README.md#deleteannouncementpublic) - Delete an announcement
- [`announcementsGetAnnouncementsPublic`](docs/sdks/announcements/README.md#getannouncementspublic) - Get announcements
- [`announcementsUpdateAnnouncementPublic`](docs/sdks/announcements/README.md#updateannouncementpublic) - Update an announcement
- [`applicationsBetaDeleteApplication`](docs/sdks/applicationsbeta/README.md#deleteapplication) - Delete application
- [`applicationsBetaDeleteApplicationVersion`](docs/sdks/applicationsbeta/README.md#deleteapplicationversion) - Delete application version
- [`applicationsBetaGetApplication`](docs/sdks/applicationsbeta/README.md#getapplication) - Get application by key
- [`applicationsBetaGetApplications`](docs/sdks/applicationsbeta/README.md#getapplications) - Get applications
- [`applicationsBetaGetApplicationVersions`](docs/sdks/applicationsbeta/README.md#getapplicationversions) - Get application versions by application key
- [`applicationsBetaPatchApplication`](docs/sdks/applicationsbeta/README.md#patchapplication) - Update application
- [`applicationsBetaPatchApplicationVersion`](docs/sdks/applicationsbeta/README.md#patchapplicationversion) - Update application version
- [`approvalsBetaPatchApprovalRequest`](docs/sdks/approvalsbeta/README.md#patchapprovalrequest) - Update approval request
- [`approvalsBetaPatchFlagConfigApprovalRequest`](docs/sdks/approvalsbeta/README.md#patchflagconfigapprovalrequest) - Update flag approval request
- [`approvalsDeleteApprovalRequest`](docs/sdks/approvals/README.md#deleteapprovalrequest) - Delete approval request
- [`approvalsDeleteApprovalRequestForFlag`](docs/sdks/approvals/README.md#deleteapprovalrequestforflag) - Delete approval request for a flag
- [`approvalsGetApprovalForFlag`](docs/sdks/approvals/README.md#getapprovalforflag) - Get approval request for a flag
- [`approvalsGetApprovalRequest`](docs/sdks/approvals/README.md#getapprovalrequest) - Get approval request
- [`approvalsGetApprovalRequests`](docs/sdks/approvals/README.md#getapprovalrequests) - List approval requests
- [`approvalsGetApprovalsForFlag`](docs/sdks/approvals/README.md#getapprovalsforflag) - List approval requests for a flag
- [`approvalsPostApprovalRequest`](docs/sdks/approvals/README.md#postapprovalrequest) - Create approval request
- [`approvalsPostApprovalRequestApply`](docs/sdks/approvals/README.md#postapprovalrequestapply) - Apply approval request
- [`approvalsPostApprovalRequestApplyForFlag`](docs/sdks/approvals/README.md#postapprovalrequestapplyforflag) - Apply approval request for a flag
- [`approvalsPostApprovalRequestForFlag`](docs/sdks/approvals/README.md#postapprovalrequestforflag) - Create approval request for a flag
- [`approvalsPostApprovalRequestReview`](docs/sdks/approvals/README.md#postapprovalrequestreview) - Review approval request
- [`approvalsPostApprovalRequestReviewForFlag`](docs/sdks/approvals/README.md#postapprovalrequestreviewforflag) - Review approval request for a flag
- [`approvalsPostFlagCopyConfigApprovalRequest`](docs/sdks/approvals/README.md#postflagcopyconfigapprovalrequest) - Create approval request to copy flag configurations across environments
- [`auditLogGetAuditLogEntries`](docs/sdks/auditlog/README.md#getauditlogentries) - List audit log entries
- [`auditLogGetAuditLogEntry`](docs/sdks/auditlog/README.md#getauditlogentry) - Get audit log entry
- [`auditLogPostAuditLogEntries`](docs/sdks/auditlog/README.md#postauditlogentries) - Search audit log entries
- [`codeReferencesDeleteBranches`](docs/sdks/codereferences/README.md#deletebranches) - Delete branches
- [`codeReferencesDeleteRepository`](docs/sdks/codereferences/README.md#deleterepository) - Delete repository
- [`codeReferencesGetBranch`](docs/sdks/codereferences/README.md#getbranch) - Get branch
- [`codeReferencesGetBranches`](docs/sdks/codereferences/README.md#getbranches) - List branches
- [`codeReferencesGetExtinctions`](docs/sdks/codereferences/README.md#getextinctions) - List extinctions
- [`codeReferencesGetRepositories`](docs/sdks/codereferences/README.md#getrepositories) - List repositories
- [`codeReferencesGetRepository`](docs/sdks/codereferences/README.md#getrepository) - Get repository
- [`codeReferencesGetRootStatistic`](docs/sdks/codereferences/README.md#getrootstatistic) - Get links to code reference repositories for each project
- [`codeReferencesGetStatistics`](docs/sdks/codereferences/README.md#getstatistics) - Get code references statistics for flags
- [`codeReferencesPatchRepository`](docs/sdks/codereferences/README.md#patchrepository) - Update repository
- [`codeReferencesPostExtinction`](docs/sdks/codereferences/README.md#postextinction) - Create extinction
- [`codeReferencesPostRepository`](docs/sdks/codereferences/README.md#postrepository) - Create repository
- [`codeReferencesPutBranch`](docs/sdks/codereferences/README.md#putbranch) - Upsert branch
- [`contextsDeleteContextInstances`](docs/sdks/contexts/README.md#deletecontextinstances) - Delete context instances
- [`contextSettingsPutContextFlagSetting`](docs/sdks/contextsettings/README.md#putcontextflagsetting) - Update flag settings for context
- [`contextsEvaluateContextInstance`](docs/sdks/contexts/README.md#evaluatecontextinstance) - Evaluate flags for context instance
- [`contextsGetContextAttributeNames`](docs/sdks/contexts/README.md#getcontextattributenames) - Get context attribute names
- [`contextsGetContextAttributeValues`](docs/sdks/contexts/README.md#getcontextattributevalues) - Get context attribute values
- [`contextsGetContextInstances`](docs/sdks/contexts/README.md#getcontextinstances) - Get context instances
- [`contextsGetContextKindsByProjectKey`](docs/sdks/contexts/README.md#getcontextkindsbyprojectkey) - Get context kinds
- [`contextsGetContexts`](docs/sdks/contexts/README.md#getcontexts) - Get contexts
- [`contextsPutContextKind`](docs/sdks/contexts/README.md#putcontextkind) - Create or update context kind
- [`contextsSearchContextInstances`](docs/sdks/contexts/README.md#searchcontextinstances) - Search for context instances
- [`contextsSearchContexts`](docs/sdks/contexts/README.md#searchcontexts) - Search for contexts
- [`customRolesDeleteCustomRole`](docs/sdks/customroles/README.md#deletecustomrole) - Delete custom role
- [`customRolesGetCustomRole`](docs/sdks/customroles/README.md#getcustomrole) - Get custom role
- [`customRolesGetCustomRoles`](docs/sdks/customroles/README.md#getcustomroles) - List custom roles
- [`customRolesPatchCustomRole`](docs/sdks/customroles/README.md#patchcustomrole) - Update custom role
- [`customRolesPostCustomRole`](docs/sdks/customroles/README.md#postcustomrole) - Create custom role
- [`dataExportDestinationsDeleteDestination`](docs/sdks/dataexportdestinations/README.md#deletedestination) - Delete Data Export destination
- [`dataExportDestinationsGetDestination`](docs/sdks/dataexportdestinations/README.md#getdestination) - Get destination
- [`dataExportDestinationsGetDestinations`](docs/sdks/dataexportdestinations/README.md#getdestinations) - List destinations
- [`dataExportDestinationsPatchDestination`](docs/sdks/dataexportdestinations/README.md#patchdestination) - Update Data Export destination
- [`dataExportDestinationsPostDestination`](docs/sdks/dataexportdestinations/README.md#postdestination) - Create Data Export destination
- [`dataExportDestinationsPostGenerateWarehouseDestinationKeyPair`](docs/sdks/dataexportdestinations/README.md#postgeneratewarehousedestinationkeypair) - Generate Snowflake destination key pair
- [`environmentsDeleteEnvironment`](docs/sdks/environments/README.md#deleteenvironment) - Delete environment
- [`environmentsGetEnvironment`](docs/sdks/environments/README.md#getenvironment) - Get environment
- [`environmentsGetEnvironmentsByProject`](docs/sdks/environments/README.md#getenvironmentsbyproject) - List environments
- [`environmentsPatchEnvironment`](docs/sdks/environments/README.md#patchenvironment) - Update environment
- [`environmentsPostEnvironment`](docs/sdks/environments/README.md#postenvironment) - Create environment
- [`environmentsResetEnvironmentMobileKey`](docs/sdks/environments/README.md#resetenvironmentmobilekey) - Reset environment mobile SDK key
- [`environmentsResetEnvironmentSDKKey`](docs/sdks/environments/README.md#resetenvironmentsdkkey) - Reset environment SDK key
- [`experimentsCreateExperiment`](docs/sdks/experiments/README.md#createexperiment) - Create experiment
- [`experimentsCreateIteration`](docs/sdks/experiments/README.md#createiteration) - Create iteration
- [`experimentsGetExperiment`](docs/sdks/experiments/README.md#getexperiment) - Get experiment
- [`experimentsGetExperimentationSettings`](docs/sdks/experiments/README.md#getexperimentationsettings) - Get experimentation settings
- [`experimentsGetExperiments`](docs/sdks/experiments/README.md#getexperiments) - Get experiments
- [`experimentsPatchExperiment`](docs/sdks/experiments/README.md#patchexperiment) - Patch experiment
- [`experimentsPutExperimentationSettings`](docs/sdks/experiments/README.md#putexperimentationsettings) - Update experimentation settings
- [`featureFlagsBetaGetDependentFlags`](docs/sdks/featureflagsbeta/README.md#getdependentflags) - List dependent feature flags
- [`featureFlagsBetaGetDependentFlagsByEnv`](docs/sdks/featureflagsbeta/README.md#getdependentflagsbyenv) - List dependent feature flags by environment
- [`featureFlagsCopyFeatureFlag`](docs/sdks/featureflags/README.md#copyfeatureflag) - Copy feature flag
- [`featureFlagsDeleteFeatureFlag`](docs/sdks/featureflags/README.md#deletefeatureflag) - Delete feature flag
- [`featureFlagsGetExpiringContextTargets`](docs/sdks/featureflags/README.md#getexpiringcontexttargets) - Get expiring context targets for feature flag
- [`featureFlagsGetExpiringUserTargets`](docs/sdks/featureflags/README.md#getexpiringusertargets) - Get expiring user targets for feature flag
- [`featureFlagsGetFeatureFlag`](docs/sdks/featureflags/README.md#getfeatureflag) - Get feature flag
- [`featureFlagsGetFeatureFlags`](docs/sdks/featureflags/README.md#getfeatureflags) - List feature flags
- [`featureFlagsGetFeatureFlagStatus`](docs/sdks/featureflags/README.md#getfeatureflagstatus) - Get feature flag status
- [`featureFlagsGetFeatureFlagStatusAcrossEnvironments`](docs/sdks/featureflags/README.md#getfeatureflagstatusacrossenvironments) - Get flag status across environments
- [`featureFlagsGetFeatureFlagStatuses`](docs/sdks/featureflags/README.md#getfeatureflagstatuses) - List feature flag statuses
- [`featureFlagsPatchExpiringTargets`](docs/sdks/featureflags/README.md#patchexpiringtargets) - Update expiring context targets on feature flag
- [`featureFlagsPatchExpiringUserTargets`](docs/sdks/featureflags/README.md#patchexpiringusertargets) - Update expiring user targets on feature flag
- [`featureFlagsPatchFeatureFlag`](docs/sdks/featureflags/README.md#patchfeatureflag) - Update feature flag
- [`featureFlagsPostFeatureFlag`](docs/sdks/featureflags/README.md#postfeatureflag) - Create a feature flag
- [`featureFlagsPostMigrationSafetyIssues`](docs/sdks/featureflags/README.md#postmigrationsafetyissues) - Get migration safety issues
- [`flagImportConfigurationsBetaCreateFlagImportConfiguration`](docs/sdks/flagimportconfigurationsbeta/README.md#createflagimportconfiguration) - Create a flag import configuration
- [`flagImportConfigurationsBetaDeleteFlagImportConfiguration`](docs/sdks/flagimportconfigurationsbeta/README.md#deleteflagimportconfiguration) - Delete a flag import configuration
- [`flagImportConfigurationsBetaGetFlagImportConfiguration`](docs/sdks/flagimportconfigurationsbeta/README.md#getflagimportconfiguration) - Get a single flag import configuration
- [`flagImportConfigurationsBetaGetFlagImportConfigurations`](docs/sdks/flagimportconfigurationsbeta/README.md#getflagimportconfigurations) - List all flag import configurations
- [`flagImportConfigurationsBetaPatchFlagImportConfiguration`](docs/sdks/flagimportconfigurationsbeta/README.md#patchflagimportconfiguration) - Update a flag import configuration
- [`flagImportConfigurationsBetaTriggerFlagImportJob`](docs/sdks/flagimportconfigurationsbeta/README.md#triggerflagimportjob) - Trigger a single flag import run
- [`flagLinksBetaCreateFlagLink`](docs/sdks/flaglinksbeta/README.md#createflaglink) - Create flag link
- [`flagLinksBetaDeleteFlagLink`](docs/sdks/flaglinksbeta/README.md#deleteflaglink) - Delete flag link
- [`flagLinksBetaGetFlagLinks`](docs/sdks/flaglinksbeta/README.md#getflaglinks) - List flag links
- [`flagLinksBetaUpdateFlagLink`](docs/sdks/flaglinksbeta/README.md#updateflaglink) - Update flag link
- [`flagTriggersCreateTriggerWorkflow`](docs/sdks/flagtriggers/README.md#createtriggerworkflow) - Create flag trigger
- [`flagTriggersDeleteTriggerWorkflow`](docs/sdks/flagtriggers/README.md#deletetriggerworkflow) - Delete flag trigger
- [`flagTriggersGetTriggerWorkflowById`](docs/sdks/flagtriggers/README.md#gettriggerworkflowbyid) - Get flag trigger by ID
- [`flagTriggersGetTriggerWorkflows`](docs/sdks/flagtriggers/README.md#gettriggerworkflows) - List flag triggers
- [`flagTriggersPatchTriggerWorkflow`](docs/sdks/flagtriggers/README.md#patchtriggerworkflow) - Update flag trigger
- [`followFlagsDeleteFlagFollower`](docs/sdks/followflags/README.md#deleteflagfollower) - Remove a member as a follower of a flag in a project and environment
- [`followFlagsGetFlagFollowers`](docs/sdks/followflags/README.md#getflagfollowers) - Get followers of a flag in a project and environment
- [`followFlagsGetFollowersByProjEnv`](docs/sdks/followflags/README.md#getfollowersbyprojenv) - Get followers of all flags in a given project and environment
- [`followFlagsPutFlagFollower`](docs/sdks/followflags/README.md#putflagfollower) - Add a member as a follower of a flag in a project and environment
- [`holdoutsBetaGetAllHoldouts`](docs/sdks/holdoutsbeta/README.md#getallholdouts) - Get all holdouts
- [`holdoutsBetaGetHoldout`](docs/sdks/holdoutsbeta/README.md#getholdout) - Get holdout
- [`holdoutsBetaGetHoldoutById`](docs/sdks/holdoutsbeta/README.md#getholdoutbyid) - Get Holdout by Id
- [`holdoutsBetaPatchHoldout`](docs/sdks/holdoutsbeta/README.md#patchholdout) - Patch holdout
- [`holdoutsBetaPostHoldout`](docs/sdks/holdoutsbeta/README.md#postholdout) - Create holdout
- [`insightsChartsBetaGetDeploymentFrequencyChart`](docs/sdks/insightschartsbeta/README.md#getdeploymentfrequencychart) - Get deployment frequency chart data
- [`insightsChartsBetaGetFlagStatusChart`](docs/sdks/insightschartsbeta/README.md#getflagstatuschart) - Get flag status chart data
- [`insightsChartsBetaGetLeadTimeChart`](docs/sdks/insightschartsbeta/README.md#getleadtimechart) - Get lead time chart data
- [`insightsChartsBetaGetReleaseFrequencyChart`](docs/sdks/insightschartsbeta/README.md#getreleasefrequencychart) - Get release frequency chart data
- [`insightsChartsBetaGetStaleFlagsChart`](docs/sdks/insightschartsbeta/README.md#getstaleflagschart) - Get stale flags chart data
- [`insightsDeploymentsBetaCreateDeploymentEvent`](docs/sdks/insightsdeploymentsbeta/README.md#createdeploymentevent) - Create deployment event
- [`insightsDeploymentsBetaGetDeployment`](docs/sdks/insightsdeploymentsbeta/README.md#getdeployment) - Get deployment
- [`insightsDeploymentsBetaGetDeployments`](docs/sdks/insightsdeploymentsbeta/README.md#getdeployments) - List deployments
- [`insightsDeploymentsBetaUpdateDeployment`](docs/sdks/insightsdeploymentsbeta/README.md#updatedeployment) - Update deployment
- [`insightsFlagEventsBetaGetFlagEvents`](docs/sdks/insightsflageventsbeta/README.md#getflagevents) - List flag events
- [`insightsPullRequestsBetaGetPullRequests`](docs/sdks/insightspullrequestsbeta/README.md#getpullrequests) - List pull requests
- [`insightsRepositoriesBetaAssociateRepositoriesAndProjects`](docs/sdks/insightsrepositoriesbeta/README.md#associaterepositoriesandprojects) - Associate repositories with projects
- [`insightsRepositoriesBetaDeleteRepositoryProject`](docs/sdks/insightsrepositoriesbeta/README.md#deleterepositoryproject) - Remove repository project association
- [`insightsRepositoriesBetaGetInsightsRepositories`](docs/sdks/insightsrepositoriesbeta/README.md#getinsightsrepositories) - List repositories
- [`insightsScoresBetaCreateInsightGroup`](docs/sdks/insightsscoresbeta/README.md#createinsightgroup) - Create insight group
- [`insightsScoresBetaDeleteInsightGroup`](docs/sdks/insightsscoresbeta/README.md#deleteinsightgroup) - Delete insight group
- [`insightsScoresBetaGetInsightGroup`](docs/sdks/insightsscoresbeta/README.md#getinsightgroup) - Get insight group
- [`insightsScoresBetaGetInsightGroups`](docs/sdks/insightsscoresbeta/README.md#getinsightgroups) - List insight groups
- [`insightsScoresBetaGetInsightsScores`](docs/sdks/insightsscoresbeta/README.md#getinsightsscores) - Get insight scores
- [`insightsScoresBetaPatchInsightGroup`](docs/sdks/insightsscoresbeta/README.md#patchinsightgroup) - Patch insight group
- [`integrationAuditLogSubscriptionsCreateSubscription`](docs/sdks/integrationauditlogsubscriptions/README.md#createsubscription) - Create audit log subscription
- [`integrationAuditLogSubscriptionsDeleteSubscription`](docs/sdks/integrationauditlogsubscriptions/README.md#deletesubscription) - Delete audit log subscription
- [`integrationAuditLogSubscriptionsGetSubscriptionByID`](docs/sdks/integrationauditlogsubscriptions/README.md#getsubscriptionbyid) - Get audit log subscription by ID
- [`integrationAuditLogSubscriptionsGetSubscriptions`](docs/sdks/integrationauditlogsubscriptions/README.md#getsubscriptions) - Get audit log subscriptions by integration
- [`integrationAuditLogSubscriptionsUpdateSubscription`](docs/sdks/integrationauditlogsubscriptions/README.md#updatesubscription) - Update audit log subscription
- [`integrationDeliveryConfigurationsBetaCreateIntegrationDeliveryConfiguration`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#createintegrationdeliveryconfiguration) - Create delivery configuration
- [`integrationDeliveryConfigurationsBetaDeleteIntegrationDeliveryConfiguration`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#deleteintegrationdeliveryconfiguration) - Delete delivery configuration
- [`integrationDeliveryConfigurationsBetaGetIntegrationDeliveryConfigurationByEnvironment`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#getintegrationdeliveryconfigurationbyenvironment) - Get delivery configurations by environment
- [`integrationDeliveryConfigurationsBetaGetIntegrationDeliveryConfigurationById`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#getintegrationdeliveryconfigurationbyid) - Get delivery configuration by ID
- [`integrationDeliveryConfigurationsBetaGetIntegrationDeliveryConfigurations`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#getintegrationdeliveryconfigurations) - List all delivery configurations
- [`integrationDeliveryConfigurationsBetaPatchIntegrationDeliveryConfiguration`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#patchintegrationdeliveryconfiguration) - Update delivery configuration
- [`integrationDeliveryConfigurationsBetaValidateIntegrationDeliveryConfiguration`](docs/sdks/integrationdeliveryconfigurationsbeta/README.md#validateintegrationdeliveryconfiguration) - Validate delivery configuration
- [`integrationsBetaCreateIntegrationConfiguration`](docs/sdks/integrationsbeta/README.md#createintegrationconfiguration) - Create integration configuration
- [`integrationsBetaDeleteIntegrationConfiguration`](docs/sdks/integrationsbeta/README.md#deleteintegrationconfiguration) - Delete integration configuration
- [`integrationsBetaGetAllIntegrationConfigurations`](docs/sdks/integrationsbeta/README.md#getallintegrationconfigurations) - Get all configurations for the integration
- [`integrationsBetaGetIntegrationConfiguration`](docs/sdks/integrationsbeta/README.md#getintegrationconfiguration) - Get an integration configuration
- [`integrationsBetaUpdateIntegrationConfiguration`](docs/sdks/integrationsbeta/README.md#updateintegrationconfiguration) - Update integration configuration
- [`layersCreateLayer`](docs/sdks/layers/README.md#createlayer) - Create layer
- [`layersGetLayers`](docs/sdks/layers/README.md#getlayers) - Get layers
- [`layersUpdateLayer`](docs/sdks/layers/README.md#updatelayer) - Update layer
- [`metricsBetaCreateMetricGroup`](docs/sdks/metricsbeta/README.md#createmetricgroup) - Create metric group
- [`metricsBetaDeleteMetricGroup`](docs/sdks/metricsbeta/README.md#deletemetricgroup) - Delete metric group
- [`metricsBetaGetMetricGroup`](docs/sdks/metricsbeta/README.md#getmetricgroup) - Get metric group
- [`metricsBetaGetMetricGroups`](docs/sdks/metricsbeta/README.md#getmetricgroups) - List metric groups
- [`metricsBetaPatchMetricGroup`](docs/sdks/metricsbeta/README.md#patchmetricgroup) - Patch metric group
- [`metricsDeleteMetric`](docs/sdks/metrics/README.md#deletemetric) - Delete metric
- [`metricsGetMetric`](docs/sdks/metrics/README.md#getmetric) - Get metric
- [`metricsGetMetrics`](docs/sdks/metrics/README.md#getmetrics) - List metrics
- [`metricsPatchMetric`](docs/sdks/metrics/README.md#patchmetric) - Update metric
- [`metricsPostMetric`](docs/sdks/metrics/README.md#postmetric) - Create metric
- [`oAuth2ClientsCreateOAuth2Client`](docs/sdks/oauth2clients/README.md#createoauth2client) - Create a LaunchDarkly OAuth 2.0 client
- [`oAuth2ClientsDeleteOAuthClient`](docs/sdks/oauth2clients/README.md#deleteoauthclient) - Delete OAuth 2.0 client
- [`oAuth2ClientsGetOAuthClientById`](docs/sdks/oauth2clients/README.md#getoauthclientbyid) - Get client by ID
- [`oAuth2ClientsGetOAuthClients`](docs/sdks/oauth2clients/README.md#getoauthclients) - Get clients
- [`oAuth2ClientsPatchOAuthClient`](docs/sdks/oauth2clients/README.md#patchoauthclient) - Patch client by ID
- [`otherGetCallerIdentity`](docs/sdks/other/README.md#getcalleridentity) - Identify the caller
- [`otherGetIps`](docs/sdks/other/README.md#getips) - Gets the public IP list
- [`otherGetOpenapiSpec`](docs/sdks/other/README.md#getopenapispec) - Gets the OpenAPI spec in json
- [`otherGetRoot`](docs/sdks/other/README.md#getroot) - Root resource
- [`otherGetVersions`](docs/sdks/other/README.md#getversions) - Get version information
- [`persistentStoreIntegrationsBetaCreateBigSegmentStoreIntegration`](docs/sdks/persistentstoreintegrationsbeta/README.md#createbigsegmentstoreintegration) - Create big segment store integration
- [`persistentStoreIntegrationsBetaDeleteBigSegmentStoreIntegration`](docs/sdks/persistentstoreintegrationsbeta/README.md#deletebigsegmentstoreintegration) - Delete big segment store integration
- [`persistentStoreIntegrationsBetaGetBigSegmentStoreIntegration`](docs/sdks/persistentstoreintegrationsbeta/README.md#getbigsegmentstoreintegration) - Get big segment store integration by ID
- [`persistentStoreIntegrationsBetaGetBigSegmentStoreIntegrations`](docs/sdks/persistentstoreintegrationsbeta/README.md#getbigsegmentstoreintegrations) - List all big segment store integrations
- [`persistentStoreIntegrationsBetaPatchBigSegmentStoreIntegration`](docs/sdks/persistentstoreintegrationsbeta/README.md#patchbigsegmentstoreintegration) - Update big segment store integration
- [`projectsDeleteProject`](docs/sdks/projects/README.md#deleteproject) - Delete project
- [`projectsGetFlagDefaultsByProject`](docs/sdks/projects/README.md#getflagdefaultsbyproject) - Get flag defaults for project
- [`projectsGetProject`](docs/sdks/projects/README.md#getproject) - Get project
- [`projectsGetProjects`](docs/sdks/projects/README.md#getprojects) - List projects
- [`projectsPatchFlagDefaultsByProject`](docs/sdks/projects/README.md#patchflagdefaultsbyproject) - Update flag default for project
- [`projectsPatchProject`](docs/sdks/projects/README.md#patchproject) - Update project
- [`projectsPostProject`](docs/sdks/projects/README.md#postproject) - Create project
- [`projectsPutFlagDefaultsByProject`](docs/sdks/projects/README.md#putflagdefaultsbyproject) - Create or update flag defaults for project
- [`relayProxyConfigurationsDeleteRelayAutoConfig`](docs/sdks/relayproxyconfigurations/README.md#deleterelayautoconfig) - Delete Relay Proxy config by ID
- [`relayProxyConfigurationsGetRelayProxyConfig`](docs/sdks/relayproxyconfigurations/README.md#getrelayproxyconfig) - Get Relay Proxy config
- [`relayProxyConfigurationsGetRelayProxyConfigs`](docs/sdks/relayproxyconfigurations/README.md#getrelayproxyconfigs) - List Relay Proxy configs
- [`relayProxyConfigurationsPatchRelayAutoConfig`](docs/sdks/relayproxyconfigurations/README.md#patchrelayautoconfig) - Update a Relay Proxy config
- [`relayProxyConfigurationsPostRelayAutoConfig`](docs/sdks/relayproxyconfigurations/README.md#postrelayautoconfig) - Create a new Relay Proxy config
- [`relayProxyConfigurationsResetRelayAutoConfig`](docs/sdks/relayproxyconfigurations/README.md#resetrelayautoconfig) - Reset Relay Proxy configuration key
- [`releasePipelinesBetaDeleteReleasePipeline`](docs/sdks/releasepipelinesbeta/README.md#deletereleasepipeline) - Delete release pipeline
- [`releasePipelinesBetaGetAllReleasePipelines`](docs/sdks/releasepipelinesbeta/README.md#getallreleasepipelines) - Get all release pipelines
- [`releasePipelinesBetaGetAllReleaseProgressionsForReleasePipeline`](docs/sdks/releasepipelinesbeta/README.md#getallreleaseprogressionsforreleasepipeline) - Get release progressions for release pipeline
- [`releasePipelinesBetaGetReleasePipelineByKey`](docs/sdks/releasepipelinesbeta/README.md#getreleasepipelinebykey) - Get release pipeline by key
- [`releasePipelinesBetaPostReleasePipeline`](docs/sdks/releasepipelinesbeta/README.md#postreleasepipeline) - Create a release pipeline
- [`releasePipelinesBetaPutReleasePipeline`](docs/sdks/releasepipelinesbeta/README.md#putreleasepipeline) - Update a release pipeline
- [`releasesBetaCreateReleaseForFlag`](docs/sdks/releasesbeta/README.md#createreleaseforflag) - Create a new release for flag
- [`releasesBetaDeleteReleaseByFlagKey`](docs/sdks/releasesbeta/README.md#deletereleasebyflagkey) - Delete a release for flag
- [`releasesBetaGetReleaseByFlagKey`](docs/sdks/releasesbeta/README.md#getreleasebyflagkey) - Get release for flag
- [`releasesBetaPatchReleaseByFlagKey`](docs/sdks/releasesbeta/README.md#patchreleasebyflagkey) - Patch release for flag
- [`releasesBetaUpdatePhaseStatus`](docs/sdks/releasesbeta/README.md#updatephasestatus) - Update phase status for release
- [`scheduledChangesDeleteFlagConfigScheduledChanges`](docs/sdks/scheduledchanges/README.md#deleteflagconfigscheduledchanges) - Delete scheduled changes workflow
- [`scheduledChangesGetFeatureFlagScheduledChange`](docs/sdks/scheduledchanges/README.md#getfeatureflagscheduledchange) - Get a scheduled change
- [`scheduledChangesGetFlagConfigScheduledChanges`](docs/sdks/scheduledchanges/README.md#getflagconfigscheduledchanges) - List scheduled changes
- [`scheduledChangesPatchFlagConfigScheduledChange`](docs/sdks/scheduledchanges/README.md#patchflagconfigscheduledchange) - Update scheduled changes workflow
- [`scheduledChangesPostFlagConfigScheduledChanges`](docs/sdks/scheduledchanges/README.md#postflagconfigscheduledchanges) - Create scheduled changes workflow
- [`segmentsCreateBigSegmentExport`](docs/sdks/segments/README.md#createbigsegmentexport) - Create big segment export
- [`segmentsCreateBigSegmentImport`](docs/sdks/segments/README.md#createbigsegmentimport) - Create big segment import
- [`segmentsDeleteSegment`](docs/sdks/segments/README.md#deletesegment) - Delete segment
- [`segmentsGetBigSegmentExport`](docs/sdks/segments/README.md#getbigsegmentexport) - Get big segment export
- [`segmentsGetBigSegmentImport`](docs/sdks/segments/README.md#getbigsegmentimport) - Get big segment import
- [`segmentsGetContextInstanceSegmentsMembershipByEnv`](docs/sdks/segments/README.md#getcontextinstancesegmentsmembershipbyenv) - List segment memberships for context instance
- [`segmentsGetExpiringTargetsForSegment`](docs/sdks/segments/README.md#getexpiringtargetsforsegment) - Get expiring targets for segment
- [`segmentsGetExpiringUserTargetsForSegment`](docs/sdks/segments/README.md#getexpiringusertargetsforsegment) - Get expiring user targets for segment
- [`segmentsGetSegment`](docs/sdks/segments/README.md#getsegment) - Get segment
- [`segmentsGetSegmentMembershipForContext`](docs/sdks/segments/README.md#getsegmentmembershipforcontext) - Get big segment membership for context
- [`segmentsGetSegmentMembershipForUser`](docs/sdks/segments/README.md#getsegmentmembershipforuser) - Get big segment membership for user
- [`segmentsGetSegments`](docs/sdks/segments/README.md#getsegments) - List segments
- [`segmentsPatchExpiringTargetsForSegment`](docs/sdks/segments/README.md#patchexpiringtargetsforsegment) - Update expiring targets for segment
- [`segmentsPatchExpiringUserTargetsForSegment`](docs/sdks/segments/README.md#patchexpiringusertargetsforsegment) - Update expiring user targets for segment
- [`segmentsPatchSegment`](docs/sdks/segments/README.md#patchsegment) - Patch segment
- [`segmentsPostSegment`](docs/sdks/segments/README.md#postsegment) - Create segment
- [`segmentsUpdateBigSegmentContextTargets`](docs/sdks/segments/README.md#updatebigsegmentcontexttargets) - Update context targets on a big segment
- [`segmentsUpdateBigSegmentTargets`](docs/sdks/segments/README.md#updatebigsegmenttargets) - Update user context targets on a big segment
- [`tagsGetTags`](docs/sdks/tags/README.md#gettags) - List tags
- [`teamsBetaPatchTeams`](docs/sdks/teamsbeta/README.md#patchteams) - Update teams
- [`teamsDeleteTeam`](docs/sdks/teams/README.md#deleteteam) - Delete team
- [`teamsGetTeam`](docs/sdks/teams/README.md#getteam) - Get team
- [`teamsGetTeamMaintainers`](docs/sdks/teams/README.md#getteammaintainers) - Get team maintainers
- [`teamsGetTeamRoles`](docs/sdks/teams/README.md#getteamroles) - Get team custom roles
- [`teamsGetTeams`](docs/sdks/teams/README.md#getteams) - List teams
- [`teamsPatchTeam`](docs/sdks/teams/README.md#patchteam) - Update team
- [`teamsPostTeam`](docs/sdks/teams/README.md#postteam) - Create team
- [`teamsPostTeamMembers`](docs/sdks/teams/README.md#postteammembers) - Add multiple members to team
- [`webhooksDeleteWebhook`](docs/sdks/webhooks/README.md#deletewebhook) - Delete webhook
- [`webhooksGetAllWebhooks`](docs/sdks/webhooks/README.md#getallwebhooks) - List webhooks
- [`webhooksGetWebhook`](docs/sdks/webhooks/README.md#getwebhook) - Get webhook
- [`webhooksPatchWebhook`](docs/sdks/webhooks/README.md#patchwebhook) - Update webhook
- [`webhooksPostWebhook`](docs/sdks/webhooks/README.md#postwebhook) - Creates a webhook
- [`workflowsDeleteWorkflow`](docs/sdks/workflows/README.md#deleteworkflow) - Delete workflow
- [`workflowsGetCustomWorkflow`](docs/sdks/workflows/README.md#getcustomworkflow) - Get custom workflow
- [`workflowsGetWorkflows`](docs/sdks/workflows/README.md#getworkflows) - Get workflows
- [`workflowsPostWorkflow`](docs/sdks/workflows/README.md#postworkflow) - Create workflow
- [`workflowTemplatesCreateWorkflowTemplate`](docs/sdks/workflowtemplates/README.md#createworkflowtemplate) - Create workflow template
- [`workflowTemplatesDeleteWorkflowTemplate`](docs/sdks/workflowtemplates/README.md#deleteworkflowtemplate) - Delete workflow template
- [`workflowTemplatesGetWorkflowTemplates`](docs/sdks/workflowtemplates/README.md#getworkflowtemplates) - Get workflow templates
- ~~[`experimentsGetExperimentResults`](docs/sdks/experiments/README.md#getexperimentresults)~~ - Get experiment results (Deprecated) :warning: **Deprecated**
- ~~[`experimentsGetExperimentResultsForMetricGroup`](docs/sdks/experiments/README.md#getexperimentresultsformetricgroup)~~ - Get experiment results for metric group (Deprecated) :warning: **Deprecated**
- ~~[`usersBetaGetUserAttributeNames`](docs/sdks/usersbeta/README.md#getuserattributenames)~~ - Get user attribute names :warning: **Deprecated**
- ~~[`usersDeleteUser`](docs/sdks/users/README.md#deleteuser)~~ - Delete user :warning: **Deprecated**
- ~~[`userSettingsGetExpiringFlagsForUser`](docs/sdks/usersettings/README.md#getexpiringflagsforuser)~~ - Get expiring dates on flags for user :warning: **Deprecated**
- ~~[`userSettingsGetUserFlagSetting`](docs/sdks/usersettings/README.md#getuserflagsetting)~~ - Get flag setting for user :warning: **Deprecated**
- ~~[`userSettingsGetUserFlagSettings`](docs/sdks/usersettings/README.md#getuserflagsettings)~~ - List flag settings for user :warning: **Deprecated**
- ~~[`userSettingsPatchExpiringFlagsForUser`](docs/sdks/usersettings/README.md#patchexpiringflagsforuser)~~ - Update expiring user target for flags :warning: **Deprecated**
- ~~[`userSettingsPutFlagSetting`](docs/sdks/usersettings/README.md#putflagsetting)~~ - Update flag settings for user :warning: **Deprecated**
- ~~[`usersGetSearchUsers`](docs/sdks/users/README.md#getsearchusers)~~ - Find users :warning: **Deprecated**
- ~~[`usersGetUser`](docs/sdks/users/README.md#getuser)~~ - Get user :warning: **Deprecated**
- ~~[`usersGetUsers`](docs/sdks/users/README.md#getusers)~~ - List users :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start File uploads [file-upload] -->
## File uploads

Certain SDK methods accept files as part of a multi-part request. It is possible and typically recommended to upload files as a stream rather than reading the entire contents into memory. This avoids excessive memory consumption and potentially crashing with out-of-memory errors when working with very large files. The following example demonstrates how to attach a file stream to a request.

> [!TIP]
>
> Depending on your JavaScript runtime, there are convenient utilities that return a handle to a file without reading the entire contents into memory:
>
> - **Node.js v20+:** Since v20, Node.js comes with a native `openAsBlob` function in [`node:fs`](https://nodejs.org/docs/latest-v20.x/api/fs.html#fsopenasblobpath-options).
> - **Bun:** The native [`Bun.file`](https://bun.sh/docs/api/file-io#reading-files-bun-file) function produces a file handle that can be used for streaming file uploads.
> - **Browsers:** All supported browsers return an instance to a [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File) when reading the value from an `<input type="file">` element.
> - **Node.js v18:** A file stream can be created using the `fileFrom` helper from [`fetch-blob/from.js`](https://www.npmjs.com/package/fetch-blob).

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  await launchdarklyMcpServer.segments.createBigSegmentImport({
    projectKey: "<value>",
    environmentKey: "<value>",
    segmentKey: "<value>",
    requestBody: {},
  });
}

run();

```
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  // Handle the result
  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `getRoot` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.RateLimitedErrorRep | 429         | application/json |
| errors.APIError            | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `APIError`.

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";
import {
  RateLimitedErrorRep,
  SDKValidationError,
} from "@launchdarkly/mcp-server/models/errors";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await launchdarklyMcpServer.other.getRoot();

    // Handle the result
    console.log(result);
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof RateLimitedErrorRep): {
        // Handle err.data$: RateLimitedErrorRepData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx: number` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| #   | Server                         | Description |
| --- | ------------------------------ | ----------- |
| 0   | `https://app.launchdarkly.com` |  Default    |
| 1   | `https://app.launchdarkly.us`  |  Federal    |

#### Example

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  serverIdx: 1,
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  serverURL: "https://app.launchdarkly.us",
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";
import { HTTPClient } from "@launchdarkly/mcp-server/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new LaunchdarklyMcpServer({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const sdk = new LaunchdarklyMcpServer({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LAUNCHDARKLYMCPSERVER_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@launchdarkly/mcp-server&utm_campaign=typescript)
