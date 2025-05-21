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
    "LaunchDarkly": {
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
    "LaunchDarkly": {
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
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.other.getRoot();

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

| Name     | Type   | Scheme  | Environment Variable   |
| -------- | ------ | ------- | ---------------------- |
| `apiKey` | apiKey | API key | `LAUNCHDARKLY_API_KEY` |

To authenticate with the API the `apiKey` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.other.getRoot();

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

* [list](docs/sdks/accesstokens/README.md#list) - List access tokens
* [create](docs/sdks/accesstokens/README.md#create) - Create access token
* [get](docs/sdks/accesstokens/README.md#get) - Get access token
* [patch](docs/sdks/accesstokens/README.md#patch) - Patch access token
* [reset](docs/sdks/accesstokens/README.md#reset) - Reset access token

### [accountMembers](docs/sdks/accountmembers/README.md)

* [list](docs/sdks/accountmembers/README.md#list) - List account members
* [invite](docs/sdks/accountmembers/README.md#invite) - Invite new members
* [patch](docs/sdks/accountmembers/README.md#patch) - Modify account members
* [get](docs/sdks/accountmembers/README.md#get) - Get account member
* [update](docs/sdks/accountmembers/README.md#update) - Modify an account member
* [delete](docs/sdks/accountmembers/README.md#delete) - Delete account member
* [addToTeam](docs/sdks/accountmembers/README.md#addtoteam) - Add a member to teams

### [accountUsage](docs/sdks/accountusage/README.md)

* [getDataExportEvents](docs/sdks/accountusage/README.md#getdataexportevents) - Get data export events usage
* [getEvaluations](docs/sdks/accountusage/README.md#getevaluations) - Get evaluations usage
* [getEventsUsage](docs/sdks/accountusage/README.md#geteventsusage) - Get events usage
* [getExperimentationKeys](docs/sdks/accountusage/README.md#getexperimentationkeys) - Get experimentation keys usage
* [getExperimentationUnits](docs/sdks/accountusage/README.md#getexperimentationunits) - Get experimentation units usage
* [getMau](docs/sdks/accountusage/README.md#getmau) - Get MAU usage
* [getMauByCategory](docs/sdks/accountusage/README.md#getmaubycategory) - Get MAU usage by category
* [getMauSdks](docs/sdks/accountusage/README.md#getmausdks) - Get MAU SDKs by type
* [getServiceConnectionUsage](docs/sdks/accountusage/README.md#getserviceconnectionusage) - Get service connection usage
* [getStreamUsage](docs/sdks/accountusage/README.md#getstreamusage) - Get stream usage
* [getStreamUsageSDKVersions](docs/sdks/accountusage/README.md#getstreamusagesdkversions) - Get stream usage SDK versions

### [accountUsageBeta](docs/sdks/accountusagebeta/README.md)

* [retrieveStreamUsage](docs/sdks/accountusagebeta/README.md#retrievestreamusage) - Get stream usage by SDK version

### [aiConfigs](docs/sdks/aiconfigs/README.md)

* [list](docs/sdks/aiconfigs/README.md#list) - List AI Configs
* [create](docs/sdks/aiconfigs/README.md#create) - Create new AI Config
* [delete](docs/sdks/aiconfigs/README.md#delete) - Delete AI Config
* [get](docs/sdks/aiconfigs/README.md#get) - Get AI Config
* [update](docs/sdks/aiconfigs/README.md#update) - Update AI Config
* [createVariation](docs/sdks/aiconfigs/README.md#createvariation) - Create AI Config variation
* [deleteVariation](docs/sdks/aiconfigs/README.md#deletevariation) - Delete AI Config variation
* [getVariation](docs/sdks/aiconfigs/README.md#getvariation) - Get AI Config variation
* [updateVariation](docs/sdks/aiconfigs/README.md#updatevariation) - Update AI Config variation
* [getMetrics](docs/sdks/aiconfigs/README.md#getmetrics) - Get AI Config metrics
* [getMetricsByVariation](docs/sdks/aiconfigs/README.md#getmetricsbyvariation) - Get AI Config metrics by variation
* [deleteRestrictedModels](docs/sdks/aiconfigs/README.md#deleterestrictedmodels) - Remove AI models from the restricted list
* [addRestrictedModels](docs/sdks/aiconfigs/README.md#addrestrictedmodels) - Add AI models to the restricted list
* [listModels](docs/sdks/aiconfigs/README.md#listmodels) - List AI model configs
* [createModelConfig](docs/sdks/aiconfigs/README.md#createmodelconfig) - Create an AI model config
* [deleteModelConfig](docs/sdks/aiconfigs/README.md#deletemodelconfig) - Delete an AI model config
* [getModelConfig](docs/sdks/aiconfigs/README.md#getmodelconfig) - Get AI model config

### [announcements](docs/sdks/announcements/README.md)

* [list](docs/sdks/announcements/README.md#list) - Get announcements
* [create](docs/sdks/announcements/README.md#create) - Create an announcement
* [delete](docs/sdks/announcements/README.md#delete) - Delete an announcement
* [update](docs/sdks/announcements/README.md#update) - Update an announcement

### [applications](docs/sdks/applications/README.md)

* [get](docs/sdks/applications/README.md#get) - Get application by key
* [update](docs/sdks/applications/README.md#update) - Update application
* [delete](docs/sdks/applications/README.md#delete) - Delete application
* [getVersions](docs/sdks/applications/README.md#getversions) - Get application versions by application key
* [updateVersion](docs/sdks/applications/README.md#updateversion) - Update application version

### [applicationsBeta](docs/sdks/applicationsbeta/README.md)

* [fetch](docs/sdks/applicationsbeta/README.md#fetch) - Get applications
* [deleteVersion](docs/sdks/applicationsbeta/README.md#deleteversion) - Delete application version

### [approvals](docs/sdks/approvals/README.md)

* [list](docs/sdks/approvals/README.md#list) - List approval requests
* [create](docs/sdks/approvals/README.md#create) - Create approval request
* [getRequest](docs/sdks/approvals/README.md#getrequest) - Get approval request
* [deleteRequest](docs/sdks/approvals/README.md#deleterequest) - Delete approval request
* [apply](docs/sdks/approvals/README.md#apply) - Apply approval request
* [reviewRequest](docs/sdks/approvals/README.md#reviewrequest) - Review approval request
* [listForFlag](docs/sdks/approvals/README.md#listforflag) - List approval requests for a flag
* [createRequest](docs/sdks/approvals/README.md#createrequest) - Create approval request for a flag
* [createCopyConfigRequest](docs/sdks/approvals/README.md#createcopyconfigrequest) - Create approval request to copy flag configurations across environments
* [getForFlag](docs/sdks/approvals/README.md#getforflag) - Get approval request for a flag
* [deleteFlagRequest](docs/sdks/approvals/README.md#deleteflagrequest) - Delete approval request for a flag
* [applyRequest](docs/sdks/approvals/README.md#applyrequest) - Apply approval request for a flag
* [reviewFlagRequest](docs/sdks/approvals/README.md#reviewflagrequest) - Review approval request for a flag
* [patchRequest](docs/sdks/approvals/README.md#patchrequest) - Update approval request
* [patchFlagConfigApprovalRequest](docs/sdks/approvals/README.md#patchflagconfigapprovalrequest) - Update flag approval request

### [auditLog](docs/sdks/auditlog/README.md)

* [listEntries](docs/sdks/auditlog/README.md#listentries) - List audit log entries
* [searchEntries](docs/sdks/auditlog/README.md#searchentries) - Search audit log entries
* [getEntry](docs/sdks/auditlog/README.md#getentry) - Get audit log entry

### [codereferences](docs/sdks/codereferences1/README.md)

* [listExtinctions](docs/sdks/codereferences1/README.md#listextinctions) - List extinctions

### [codeReferences](docs/sdks/codereferences2/README.md)

* [listRepositories](docs/sdks/codereferences2/README.md#listrepositories) - List repositories
* [createRepository](docs/sdks/codereferences2/README.md#createrepository) - Create repository
* [get](docs/sdks/codereferences2/README.md#get) - Get repository
* [update](docs/sdks/codereferences2/README.md#update) - Update repository
* [deleteRepository](docs/sdks/codereferences2/README.md#deleterepository) - Delete repository
* [deleteBranches](docs/sdks/codereferences2/README.md#deletebranches) - Delete branches
* [getBranches](docs/sdks/codereferences2/README.md#getbranches) - List branches
* [getBranch](docs/sdks/codereferences2/README.md#getbranch) - Get branch
* [putBranch](docs/sdks/codereferences2/README.md#putbranch) - Upsert branch
* [createExtinctionEvent](docs/sdks/codereferences2/README.md#createextinctionevent) - Create extinction
* [getLinks](docs/sdks/codereferences2/README.md#getlinks) - Get links to code reference repositories for each project
* [getStatistics](docs/sdks/codereferences2/README.md#getstatistics) - Get code references statistics for flags

### [contexts](docs/sdks/contexts/README.md)

* [listKinds](docs/sdks/contexts/README.md#listkinds) - Get context kinds
* [putKind](docs/sdks/contexts/README.md#putkind) - Create or update context kind
* [getAttributes](docs/sdks/contexts/README.md#getattributes) - Get context attribute names
* [getAttributeValues](docs/sdks/contexts/README.md#getattributevalues) - Get context attribute values
* [search](docs/sdks/contexts/README.md#search) - Search for context instances
* [getInstances](docs/sdks/contexts/README.md#getinstances) - Get context instances
* [deleteInstances](docs/sdks/contexts/README.md#deleteinstances) - Delete context instances
* [performSearch](docs/sdks/contexts/README.md#performsearch) - Search for contexts
* [get](docs/sdks/contexts/README.md#get) - Get contexts
* [evaluateFlags](docs/sdks/contexts/README.md#evaluateflags) - Evaluate flags for context instance

### [contextSettings](docs/sdks/contextsettings/README.md)

* [updateFlag](docs/sdks/contextsettings/README.md#updateflag) - Update flag settings for context

### [customRoles](docs/sdks/customroles/README.md)

* [list](docs/sdks/customroles/README.md#list) - List custom roles
* [create](docs/sdks/customroles/README.md#create) - Create custom role
* [get](docs/sdks/customroles/README.md#get) - Get custom role
* [patch](docs/sdks/customroles/README.md#patch) - Update custom role
* [delete](docs/sdks/customroles/README.md#delete) - Delete custom role

### [dataExportDestinations](docs/sdks/dataexportdestinations/README.md)

* [list](docs/sdks/dataexportdestinations/README.md#list) - List destinations
* [generateWarehouseDestinationKeyPair](docs/sdks/dataexportdestinations/README.md#generatewarehousedestinationkeypair) - Generate Snowflake destination key pair
* [create](docs/sdks/dataexportdestinations/README.md#create) - Create Data Export destination
* [get](docs/sdks/dataexportdestinations/README.md#get) - Get destination
* [update](docs/sdks/dataexportdestinations/README.md#update) - Update Data Export destination
* [delete](docs/sdks/dataexportdestinations/README.md#delete) - Delete Data Export destination

### [environments](docs/sdks/environments/README.md)

* [listByProject](docs/sdks/environments/README.md#listbyproject) - List environments
* [create](docs/sdks/environments/README.md#create) - Create environment
* [get](docs/sdks/environments/README.md#get) - Get environment
* [patch](docs/sdks/environments/README.md#patch) - Update environment
* [delete](docs/sdks/environments/README.md#delete) - Delete environment
* [resetSDKKey](docs/sdks/environments/README.md#resetsdkkey) - Reset environment SDK key
* [resetMobileKey](docs/sdks/environments/README.md#resetmobilekey) - Reset environment mobile SDK key

### [experiments](docs/sdks/experiments/README.md)

* [list](docs/sdks/experiments/README.md#list) - Get experiments
* [create](docs/sdks/experiments/README.md#create) - Create experiment
* [get](docs/sdks/experiments/README.md#get) - Get experiment
* [patch](docs/sdks/experiments/README.md#patch) - Patch experiment
* [createIteration](docs/sdks/experiments/README.md#createiteration) - Create iteration
* [~~getResultsForMetricGroup~~](docs/sdks/experiments/README.md#getresultsformetricgroup) - Get experiment results for metric group (Deprecated) :warning: **Deprecated**
* [~~getResults~~](docs/sdks/experiments/README.md#getresults) - Get experiment results (Deprecated) :warning: **Deprecated**
* [getSettings](docs/sdks/experiments/README.md#getsettings) - Get experimentation settings
* [updateSettings](docs/sdks/experiments/README.md#updatesettings) - Update experimentation settings

### [featureFlags](docs/sdks/featureflags/README.md)

* [getStatus](docs/sdks/featureflags/README.md#getstatus) - Get flag status across environments
* [listStatuses](docs/sdks/featureflags/README.md#liststatuses) - List feature flag statuses
* [status](docs/sdks/featureflags/README.md#status) - Get feature flag status
* [list](docs/sdks/featureflags/README.md#list) - List feature flags
* [create](docs/sdks/featureflags/README.md#create) - Create a feature flag
* [getDependentByEnv](docs/sdks/featureflags/README.md#getdependentbyenv) - List dependent feature flags by environment
* [get](docs/sdks/featureflags/README.md#get) - Get feature flag
* [patch](docs/sdks/featureflags/README.md#patch) - Update feature flag
* [delete](docs/sdks/featureflags/README.md#delete) - Delete feature flag
* [copy](docs/sdks/featureflags/README.md#copy) - Copy feature flag
* [listDependentFlags](docs/sdks/featureflags/README.md#listdependentflags) - List dependent feature flags
* [getExpiringTargets](docs/sdks/featureflags/README.md#getexpiringtargets) - Get expiring context targets for feature flag
* [updateExpiringTargets](docs/sdks/featureflags/README.md#updateexpiringtargets) - Update expiring context targets on feature flag
* [getExpiringUserTargets](docs/sdks/featureflags/README.md#getexpiringusertargets) - Get expiring user targets for feature flag
* [patchExpiringUserTargets](docs/sdks/featureflags/README.md#patchexpiringusertargets) - Update expiring user targets on feature flag
* [getMigrationSafetyIssues](docs/sdks/featureflags/README.md#getmigrationsafetyissues) - Get migration safety issues

### [flagImportConfigurations](docs/sdks/flagimportconfigurations/README.md)

* [list](docs/sdks/flagimportconfigurations/README.md#list) - List all flag import configurations
* [create](docs/sdks/flagimportconfigurations/README.md#create) - Create a flag import configuration
* [get](docs/sdks/flagimportconfigurations/README.md#get) - Get a single flag import configuration
* [update](docs/sdks/flagimportconfigurations/README.md#update) - Update a flag import configuration
* [delete](docs/sdks/flagimportconfigurations/README.md#delete) - Delete a flag import configuration
* [triggerJob](docs/sdks/flagimportconfigurations/README.md#triggerjob) - Trigger a single flag import run

### [flagLinks](docs/sdks/flaglinks/README.md)

* [list](docs/sdks/flaglinks/README.md#list) - List flag links
* [create](docs/sdks/flaglinks/README.md#create) - Create flag link
* [update](docs/sdks/flaglinks/README.md#update) - Update flag link
* [delete](docs/sdks/flaglinks/README.md#delete) - Delete flag link

### [flagTriggers](docs/sdks/flagtriggers/README.md)

* [list](docs/sdks/flagtriggers/README.md#list) - List flag triggers
* [create](docs/sdks/flagtriggers/README.md#create) - Create flag trigger
* [getById](docs/sdks/flagtriggers/README.md#getbyid) - Get flag trigger by ID
* [patchWorkflow](docs/sdks/flagtriggers/README.md#patchworkflow) - Update flag trigger
* [delete](docs/sdks/flagtriggers/README.md#delete) - Delete flag trigger

### [followFlags](docs/sdks/followflags/README.md)

* [getFollowers](docs/sdks/followflags/README.md#getfollowers) - Get followers of all flags in a given project and environment
* [listFollowers](docs/sdks/followflags/README.md#listfollowers) - Get followers of a flag in a project and environment
* [addFollower](docs/sdks/followflags/README.md#addfollower) - Add a member as a follower of a flag in a project and environment
* [deleteFollower](docs/sdks/followflags/README.md#deletefollower) - Remove a member as a follower of a flag in a project and environment

### [holdouts](docs/sdks/holdouts/README.md)

* [getAll](docs/sdks/holdouts/README.md#getall) - Get all holdouts
* [create](docs/sdks/holdouts/README.md#create) - Create holdout
* [getById](docs/sdks/holdouts/README.md#getbyid) - Get Holdout by Id
* [get](docs/sdks/holdouts/README.md#get) - Get holdout
* [update](docs/sdks/holdouts/README.md#update) - Patch holdout

### [insightsCharts](docs/sdks/insightscharts/README.md)

* [getDeploymentFrequencyChart](docs/sdks/insightscharts/README.md#getdeploymentfrequencychart) - Get deployment frequency chart data
* [getStaleFlagsChart](docs/sdks/insightscharts/README.md#getstaleflagschart) - Get stale flags chart data
* [getFlagStatus](docs/sdks/insightscharts/README.md#getflagstatus) - Get flag status chart data
* [getLeadTime](docs/sdks/insightscharts/README.md#getleadtime) - Get lead time chart data
* [getReleaseFrequencyChart](docs/sdks/insightscharts/README.md#getreleasefrequencychart) - Get release frequency chart data

### [insightsDeployments](docs/sdks/insightsdeployments/README.md)

* [createEvent](docs/sdks/insightsdeployments/README.md#createevent) - Create deployment event
* [list](docs/sdks/insightsdeployments/README.md#list) - List deployments
* [get](docs/sdks/insightsdeployments/README.md#get) - Get deployment
* [update](docs/sdks/insightsdeployments/README.md#update) - Update deployment

### [insightsFlagEvents](docs/sdks/insightsflagevents/README.md)

* [list](docs/sdks/insightsflagevents/README.md#list) - List flag events

### [insightsPullRequests](docs/sdks/insightspullrequests/README.md)

* [list](docs/sdks/insightspullrequests/README.md#list) - List pull requests

### [insightsRepositories](docs/sdks/insightsrepositories/README.md)

* [list](docs/sdks/insightsrepositories/README.md#list) - List repositories
* [associate](docs/sdks/insightsrepositories/README.md#associate) - Associate repositories with projects
* [removeProjectAssociation](docs/sdks/insightsrepositories/README.md#removeprojectassociation) - Remove repository project association

### [insightsScores](docs/sdks/insightsscores/README.md)

* [createGroup](docs/sdks/insightsscores/README.md#creategroup) - Create insight group
* [list](docs/sdks/insightsscores/README.md#list) - List insight groups
* [getGroup](docs/sdks/insightsscores/README.md#getgroup) - Get insight group
* [updateGroup](docs/sdks/insightsscores/README.md#updategroup) - Patch insight group
* [deleteGroup](docs/sdks/insightsscores/README.md#deletegroup) - Delete insight group
* [get](docs/sdks/insightsscores/README.md#get) - Get insight scores

### [integrationAuditLogSubscriptions](docs/sdks/integrationauditlogsubscriptions/README.md)

* [get](docs/sdks/integrationauditlogsubscriptions/README.md#get) - Get audit log subscriptions by integration
* [create](docs/sdks/integrationauditlogsubscriptions/README.md#create) - Create audit log subscription
* [getSubscription](docs/sdks/integrationauditlogsubscriptions/README.md#getsubscription) - Get audit log subscription by ID
* [update](docs/sdks/integrationauditlogsubscriptions/README.md#update) - Update audit log subscription
* [delete](docs/sdks/integrationauditlogsubscriptions/README.md#delete) - Delete audit log subscription

### [integrationDeliveryConfigurations](docs/sdks/integrationdeliveryconfigurations/README.md)

* [list](docs/sdks/integrationdeliveryconfigurations/README.md#list) - List all delivery configurations
* [getByEnvironment](docs/sdks/integrationdeliveryconfigurations/README.md#getbyenvironment) - Get delivery configurations by environment
* [create](docs/sdks/integrationdeliveryconfigurations/README.md#create) - Create delivery configuration
* [getById](docs/sdks/integrationdeliveryconfigurations/README.md#getbyid) - Get delivery configuration by ID
* [update](docs/sdks/integrationdeliveryconfigurations/README.md#update) - Update delivery configuration
* [delete](docs/sdks/integrationdeliveryconfigurations/README.md#delete) - Delete delivery configuration
* [validate](docs/sdks/integrationdeliveryconfigurations/README.md#validate) - Validate delivery configuration

### [integrations](docs/sdks/integrations/README.md)

* [getConfigurations](docs/sdks/integrations/README.md#getconfigurations) - Get all configurations for the integration
* [createConfiguration](docs/sdks/integrations/README.md#createconfiguration) - Create integration configuration
* [getConfiguration](docs/sdks/integrations/README.md#getconfiguration) - Get an integration configuration
* [updateConfiguration](docs/sdks/integrations/README.md#updateconfiguration) - Update integration configuration
* [deleteConfiguration](docs/sdks/integrations/README.md#deleteconfiguration) - Delete integration configuration


### [layers](docs/sdks/layers/README.md)

* [list](docs/sdks/layers/README.md#list) - Get layers
* [create](docs/sdks/layers/README.md#create) - Create layer
* [update](docs/sdks/layers/README.md#update) - Update layer

### [metrics](docs/sdks/metrics/README.md)

* [list](docs/sdks/metrics/README.md#list) - List metrics
* [create](docs/sdks/metrics/README.md#create) - Create metric
* [get](docs/sdks/metrics/README.md#get) - Get metric
* [patch](docs/sdks/metrics/README.md#patch) - Update metric
* [delete](docs/sdks/metrics/README.md#delete) - Delete metric
* [listGroups](docs/sdks/metrics/README.md#listgroups) - List metric groups
* [createGroup](docs/sdks/metrics/README.md#creategroup) - Create metric group
* [getMetricGroup](docs/sdks/metrics/README.md#getmetricgroup) - Get metric group
* [patchMetricGroup](docs/sdks/metrics/README.md#patchmetricgroup) - Patch metric group
* [deleteGroup](docs/sdks/metrics/README.md#deletegroup) - Delete metric group

### [oauth2Clients](docs/sdks/oauth2clients/README.md)

* [get](docs/sdks/oauth2clients/README.md#get) - Get clients
* [create](docs/sdks/oauth2clients/README.md#create) - Create a LaunchDarkly OAuth 2.0 client
* [getById](docs/sdks/oauth2clients/README.md#getbyid) - Get client by ID
* [patch](docs/sdks/oauth2clients/README.md#patch) - Patch client by ID
* [delete](docs/sdks/oauth2clients/README.md#delete) - Delete OAuth 2.0 client

### [other](docs/sdks/other/README.md)

* [getRoot](docs/sdks/other/README.md#getroot) - Root resource
* [getCallerIdentity](docs/sdks/other/README.md#getcalleridentity) - Identify the caller
* [getOpenapiSpec](docs/sdks/other/README.md#getopenapispec) - Gets the OpenAPI spec in json
* [getIps](docs/sdks/other/README.md#getips) - Gets the public IP list
* [getVersions](docs/sdks/other/README.md#getversions) - Get version information

### [persistentStoreIntegrations](docs/sdks/persistentstoreintegrations/README.md)

* [listBigSegmentStores](docs/sdks/persistentstoreintegrations/README.md#listbigsegmentstores) - List all big segment store integrations
* [create](docs/sdks/persistentstoreintegrations/README.md#create) - Create big segment store integration
* [getIntegration](docs/sdks/persistentstoreintegrations/README.md#getintegration) - Get big segment store integration by ID
* [patchBigSegmentStore](docs/sdks/persistentstoreintegrations/README.md#patchbigsegmentstore) - Update big segment store integration
* [delete](docs/sdks/persistentstoreintegrations/README.md#delete) - Delete big segment store integration

### [projects](docs/sdks/projects/README.md)

* [list](docs/sdks/projects/README.md#list) - List projects
* [create](docs/sdks/projects/README.md#create) - Create project
* [get](docs/sdks/projects/README.md#get) - Get project
* [update](docs/sdks/projects/README.md#update) - Update project
* [delete](docs/sdks/projects/README.md#delete) - Delete project
* [getFlagDefaults](docs/sdks/projects/README.md#getflagdefaults) - Get flag defaults for project
* [patchFlagDefaults](docs/sdks/projects/README.md#patchflagdefaults) - Update flag default for project
* [setFlagDefaults](docs/sdks/projects/README.md#setflagdefaults) - Create or update flag defaults for project

### [relayProxyConfigurations](docs/sdks/relayproxyconfigurations/README.md)

* [list](docs/sdks/relayproxyconfigurations/README.md#list) - List Relay Proxy configs
* [create](docs/sdks/relayproxyconfigurations/README.md#create) - Create a new Relay Proxy config
* [getConfig](docs/sdks/relayproxyconfigurations/README.md#getconfig) - Get Relay Proxy config
* [update](docs/sdks/relayproxyconfigurations/README.md#update) - Update a Relay Proxy config
* [delete](docs/sdks/relayproxyconfigurations/README.md#delete) - Delete Relay Proxy config by ID
* [reset](docs/sdks/relayproxyconfigurations/README.md#reset) - Reset Relay Proxy configuration key

### [releasePipelines](docs/sdks/releasepipelines/README.md)

* [getAll](docs/sdks/releasepipelines/README.md#getall) - Get all release pipelines
* [create](docs/sdks/releasepipelines/README.md#create) - Create a release pipeline
* [getByKey](docs/sdks/releasepipelines/README.md#getbykey) - Get release pipeline by key
* [update](docs/sdks/releasepipelines/README.md#update) - Update a release pipeline
* [delete](docs/sdks/releasepipelines/README.md#delete) - Delete release pipeline
* [getAllReleaseProgressions](docs/sdks/releasepipelines/README.md#getallreleaseprogressions) - Get release progressions for release pipeline

### [releases](docs/sdks/releases/README.md)

* [getByFlagKey](docs/sdks/releases/README.md#getbyflagkey) - Get release for flag
* [patchByFlagKey](docs/sdks/releases/README.md#patchbyflagkey) - Patch release for flag
* [deleteByFlagKey](docs/sdks/releases/README.md#deletebyflagkey) - Delete a release for flag
* [create](docs/sdks/releases/README.md#create) - Create a new release for flag
* [updatePhaseStatus](docs/sdks/releases/README.md#updatephasestatus) - Update phase status for release

### [scheduledChanges](docs/sdks/scheduledchanges/README.md)

* [list](docs/sdks/scheduledchanges/README.md#list) - List scheduled changes
* [create](docs/sdks/scheduledchanges/README.md#create) - Create scheduled changes workflow
* [get](docs/sdks/scheduledchanges/README.md#get) - Get a scheduled change
* [update](docs/sdks/scheduledchanges/README.md#update) - Update scheduled changes workflow
* [delete](docs/sdks/scheduledchanges/README.md#delete) - Delete scheduled changes workflow

### [segments](docs/sdks/segments/README.md)

* [evaluateMembership](docs/sdks/segments/README.md#evaluatemembership) - List segment memberships for context instance
* [list](docs/sdks/segments/README.md#list) - List segments
* [create](docs/sdks/segments/README.md#create) - Create segment
* [get](docs/sdks/segments/README.md#get) - Get segment
* [patch](docs/sdks/segments/README.md#patch) - Patch segment
* [delete](docs/sdks/segments/README.md#delete) - Delete segment
* [updateContextTargets](docs/sdks/segments/README.md#updatecontexttargets) - Update context targets on a big segment
* [getMembershipForContext](docs/sdks/segments/README.md#getmembershipforcontext) - Get big segment membership for context
* [createBigExport](docs/sdks/segments/README.md#createbigexport) - Create big segment export
* [getExport](docs/sdks/segments/README.md#getexport) - Get big segment export
* [createBigImport](docs/sdks/segments/README.md#createbigimport) - Create big segment import
* [getImport](docs/sdks/segments/README.md#getimport) - Get big segment import
* [updateBigTargets](docs/sdks/segments/README.md#updatebigtargets) - Update user context targets on a big segment
* [getMembershipForUser](docs/sdks/segments/README.md#getmembershipforuser) - Get big segment membership for user
* [getExpiringTargets](docs/sdks/segments/README.md#getexpiringtargets) - Get expiring targets for segment
* [patchExpiringTargets](docs/sdks/segments/README.md#patchexpiringtargets) - Update expiring targets for segment
* [getExpiringUserTargets](docs/sdks/segments/README.md#getexpiringusertargets) - Get expiring user targets for segment
* [patchExpiringUserTargets](docs/sdks/segments/README.md#patchexpiringusertargets) - Update expiring user targets for segment

### [tags](docs/sdks/tags/README.md)

* [list](docs/sdks/tags/README.md#list) - List tags

### [teams](docs/sdks/teams/README.md)

* [list](docs/sdks/teams/README.md#list) - List teams
* [create](docs/sdks/teams/README.md#create) - Create team
* [get](docs/sdks/teams/README.md#get) - Get team
* [patch](docs/sdks/teams/README.md#patch) - Update team
* [delete](docs/sdks/teams/README.md#delete) - Delete team
* [getMaintainers](docs/sdks/teams/README.md#getmaintainers) - Get team maintainers
* [addMembers](docs/sdks/teams/README.md#addmembers) - Add multiple members to team
* [getRoles](docs/sdks/teams/README.md#getroles) - Get team custom roles
* [update](docs/sdks/teams/README.md#update) - Update teams

### [tokens](docs/sdks/tokens/README.md)

* [delete](docs/sdks/tokens/README.md#delete) - Delete access token

### [~~users~~](docs/sdks/users/README.md)

* [~~getAttributeNames~~](docs/sdks/users/README.md#getattributenames) - Get user attribute names :warning: **Deprecated**
* [~~search~~](docs/sdks/users/README.md#search) - Find users :warning: **Deprecated**
* [~~list~~](docs/sdks/users/README.md#list) - List users :warning: **Deprecated**
* [~~get~~](docs/sdks/users/README.md#get) - Get user :warning: **Deprecated**
* [~~delete~~](docs/sdks/users/README.md#delete) - Delete user :warning: **Deprecated**

### [~~userSettings~~](docs/sdks/usersettings/README.md)

* [~~listFlags~~](docs/sdks/usersettings/README.md#listflags) - List flag settings for user :warning: **Deprecated**
* [~~getFlagSetting~~](docs/sdks/usersettings/README.md#getflagsetting) - Get flag setting for user :warning: **Deprecated**
* [~~updateFlagSetting~~](docs/sdks/usersettings/README.md#updateflagsetting) - Update flag settings for user :warning: **Deprecated**
* [~~getExpiringFlagsForUser~~](docs/sdks/usersettings/README.md#getexpiringflagsforuser) - Get expiring dates on flags for user :warning: **Deprecated**
* [~~updateExpiringTargets~~](docs/sdks/usersettings/README.md#updateexpiringtargets) - Update expiring user target for flags :warning: **Deprecated**

### [webhooks](docs/sdks/webhooks/README.md)

* [list](docs/sdks/webhooks/README.md#list) - List webhooks
* [create](docs/sdks/webhooks/README.md#create) - Creates a webhook
* [get](docs/sdks/webhooks/README.md#get) - Get webhook
* [update](docs/sdks/webhooks/README.md#update) - Update webhook
* [delete](docs/sdks/webhooks/README.md#delete) - Delete webhook

### [workflows](docs/sdks/workflows/README.md)

* [get](docs/sdks/workflows/README.md#get) - Get workflows
* [create](docs/sdks/workflows/README.md#create) - Create workflow
* [fetchById](docs/sdks/workflows/README.md#fetchbyid) - Get custom workflow
* [delete](docs/sdks/workflows/README.md#delete) - Delete workflow

### [workflowTemplates](docs/sdks/workflowtemplates/README.md)

* [list](docs/sdks/workflowtemplates/README.md#list) - Get workflow templates
* [create](docs/sdks/workflowtemplates/README.md#create) - Create workflow template
* [delete](docs/sdks/workflowtemplates/README.md#delete) - Delete workflow template

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

- [`accessTokensCreate`](docs/sdks/accesstokens/README.md#create) - Create access token
- [`accessTokensGet`](docs/sdks/accesstokens/README.md#get) - Get access token
- [`accessTokensList`](docs/sdks/accesstokens/README.md#list) - List access tokens
- [`accessTokensPatch`](docs/sdks/accesstokens/README.md#patch) - Patch access token
- [`accessTokensReset`](docs/sdks/accesstokens/README.md#reset) - Reset access token
- [`accountMembersAddToTeam`](docs/sdks/accountmembers/README.md#addtoteam) - Add a member to teams
- [`accountMembersDelete`](docs/sdks/accountmembers/README.md#delete) - Delete account member
- [`accountMembersGet`](docs/sdks/accountmembers/README.md#get) - Get account member
- [`accountMembersInvite`](docs/sdks/accountmembers/README.md#invite) - Invite new members
- [`accountMembersList`](docs/sdks/accountmembers/README.md#list) - List account members
- [`accountMembersPatch`](docs/sdks/accountmembers/README.md#patch) - Modify account members
- [`accountMembersUpdate`](docs/sdks/accountmembers/README.md#update) - Modify an account member
- [`accountUsageBetaRetrieveStreamUsage`](docs/sdks/accountusagebeta/README.md#retrievestreamusage) - Get stream usage by SDK version
- [`accountUsageGetDataExportEvents`](docs/sdks/accountusage/README.md#getdataexportevents) - Get data export events usage
- [`accountUsageGetEvaluations`](docs/sdks/accountusage/README.md#getevaluations) - Get evaluations usage
- [`accountUsageGetEventsUsage`](docs/sdks/accountusage/README.md#geteventsusage) - Get events usage
- [`accountUsageGetExperimentationKeys`](docs/sdks/accountusage/README.md#getexperimentationkeys) - Get experimentation keys usage
- [`accountUsageGetExperimentationUnits`](docs/sdks/accountusage/README.md#getexperimentationunits) - Get experimentation units usage
- [`accountUsageGetMau`](docs/sdks/accountusage/README.md#getmau) - Get MAU usage
- [`accountUsageGetMauByCategory`](docs/sdks/accountusage/README.md#getmaubycategory) - Get MAU usage by category
- [`accountUsageGetMauSdks`](docs/sdks/accountusage/README.md#getmausdks) - Get MAU SDKs by type
- [`accountUsageGetServiceConnectionUsage`](docs/sdks/accountusage/README.md#getserviceconnectionusage) - Get service connection usage
- [`accountUsageGetStreamUsage`](docs/sdks/accountusage/README.md#getstreamusage) - Get stream usage
- [`accountUsageGetStreamUsageSDKVersions`](docs/sdks/accountusage/README.md#getstreamusagesdkversions) - Get stream usage SDK versions
- [`aiConfigsAddRestrictedModels`](docs/sdks/aiconfigs/README.md#addrestrictedmodels) - Add AI models to the restricted list
- [`aiConfigsCreate`](docs/sdks/aiconfigs/README.md#create) - Create new AI Config
- [`aiConfigsCreateModelConfig`](docs/sdks/aiconfigs/README.md#createmodelconfig) - Create an AI model config
- [`aiConfigsCreateVariation`](docs/sdks/aiconfigs/README.md#createvariation) - Create AI Config variation
- [`aiConfigsDelete`](docs/sdks/aiconfigs/README.md#delete) - Delete AI Config
- [`aiConfigsDeleteModelConfig`](docs/sdks/aiconfigs/README.md#deletemodelconfig) - Delete an AI model config
- [`aiConfigsDeleteRestrictedModels`](docs/sdks/aiconfigs/README.md#deleterestrictedmodels) - Remove AI models from the restricted list
- [`aiConfigsDeleteVariation`](docs/sdks/aiconfigs/README.md#deletevariation) - Delete AI Config variation
- [`aiConfigsGet`](docs/sdks/aiconfigs/README.md#get) - Get AI Config
- [`aiConfigsGetMetrics`](docs/sdks/aiconfigs/README.md#getmetrics) - Get AI Config metrics
- [`aiConfigsGetMetricsByVariation`](docs/sdks/aiconfigs/README.md#getmetricsbyvariation) - Get AI Config metrics by variation
- [`aiConfigsGetModelConfig`](docs/sdks/aiconfigs/README.md#getmodelconfig) - Get AI model config
- [`aiConfigsGetVariation`](docs/sdks/aiconfigs/README.md#getvariation) - Get AI Config variation
- [`aiConfigsList`](docs/sdks/aiconfigs/README.md#list) - List AI Configs
- [`aiConfigsListModels`](docs/sdks/aiconfigs/README.md#listmodels) - List AI model configs
- [`aiConfigsUpdate`](docs/sdks/aiconfigs/README.md#update) - Update AI Config
- [`aiConfigsUpdateVariation`](docs/sdks/aiconfigs/README.md#updatevariation) - Update AI Config variation
- [`announcementsCreate`](docs/sdks/announcements/README.md#create) - Create an announcement
- [`announcementsDelete`](docs/sdks/announcements/README.md#delete) - Delete an announcement
- [`announcementsList`](docs/sdks/announcements/README.md#list) - Get announcements
- [`announcementsUpdate`](docs/sdks/announcements/README.md#update) - Update an announcement
- [`applicationsBetaDeleteVersion`](docs/sdks/applicationsbeta/README.md#deleteversion) - Delete application version
- [`applicationsBetaFetch`](docs/sdks/applicationsbeta/README.md#fetch) - Get applications
- [`applicationsDelete`](docs/sdks/applications/README.md#delete) - Delete application
- [`applicationsGet`](docs/sdks/applications/README.md#get) - Get application by key
- [`applicationsGetVersions`](docs/sdks/applications/README.md#getversions) - Get application versions by application key
- [`applicationsUpdate`](docs/sdks/applications/README.md#update) - Update application
- [`applicationsUpdateVersion`](docs/sdks/applications/README.md#updateversion) - Update application version
- [`approvalsApply`](docs/sdks/approvals/README.md#apply) - Apply approval request
- [`approvalsApplyRequest`](docs/sdks/approvals/README.md#applyrequest) - Apply approval request for a flag
- [`approvalsCreate`](docs/sdks/approvals/README.md#create) - Create approval request
- [`approvalsCreateCopyConfigRequest`](docs/sdks/approvals/README.md#createcopyconfigrequest) - Create approval request to copy flag configurations across environments
- [`approvalsCreateRequest`](docs/sdks/approvals/README.md#createrequest) - Create approval request for a flag
- [`approvalsDeleteFlagRequest`](docs/sdks/approvals/README.md#deleteflagrequest) - Delete approval request for a flag
- [`approvalsDeleteRequest`](docs/sdks/approvals/README.md#deleterequest) - Delete approval request
- [`approvalsGetForFlag`](docs/sdks/approvals/README.md#getforflag) - Get approval request for a flag
- [`approvalsGetRequest`](docs/sdks/approvals/README.md#getrequest) - Get approval request
- [`approvalsList`](docs/sdks/approvals/README.md#list) - List approval requests
- [`approvalsListForFlag`](docs/sdks/approvals/README.md#listforflag) - List approval requests for a flag
- [`approvalsPatchFlagConfigApprovalRequest`](docs/sdks/approvals/README.md#patchflagconfigapprovalrequest) - Update flag approval request
- [`approvalsPatchRequest`](docs/sdks/approvals/README.md#patchrequest) - Update approval request
- [`approvalsReviewFlagRequest`](docs/sdks/approvals/README.md#reviewflagrequest) - Review approval request for a flag
- [`approvalsReviewRequest`](docs/sdks/approvals/README.md#reviewrequest) - Review approval request
- [`auditLogGetEntry`](docs/sdks/auditlog/README.md#getentry) - Get audit log entry
- [`auditLogListEntries`](docs/sdks/auditlog/README.md#listentries) - List audit log entries
- [`auditLogSearchEntries`](docs/sdks/auditlog/README.md#searchentries) - Search audit log entries
- [`codeReferencesCreateExtinctionEvent`](docs/sdks/codereferences2/README.md#createextinctionevent) - Create extinction
- [`codeReferencesCreateRepository`](docs/sdks/codereferences2/README.md#createrepository) - Create repository
- [`codeReferencesDeleteBranches`](docs/sdks/codereferences2/README.md#deletebranches) - Delete branches
- [`codeReferencesDeleteRepository`](docs/sdks/codereferences2/README.md#deleterepository) - Delete repository
- [`codeReferencesGet`](docs/sdks/codereferences2/README.md#get) - Get repository
- [`codeReferencesGetBranch`](docs/sdks/codereferences2/README.md#getbranch) - Get branch
- [`codeReferencesGetBranches`](docs/sdks/codereferences2/README.md#getbranches) - List branches
- [`codeReferencesGetLinks`](docs/sdks/codereferences2/README.md#getlinks) - Get links to code reference repositories for each project
- [`codeReferencesGetStatistics`](docs/sdks/codereferences2/README.md#getstatistics) - Get code references statistics for flags
- [`codereferencesListExtinctions`](docs/sdks/codereferences1/README.md#listextinctions) - List extinctions
- [`codeReferencesListRepositories`](docs/sdks/codereferences2/README.md#listrepositories) - List repositories
- [`codeReferencesPutBranch`](docs/sdks/codereferences2/README.md#putbranch) - Upsert branch
- [`codeReferencesUpdate`](docs/sdks/codereferences2/README.md#update) - Update repository
- [`contextsDeleteInstances`](docs/sdks/contexts/README.md#deleteinstances) - Delete context instances
- [`contextSettingsUpdateFlag`](docs/sdks/contextsettings/README.md#updateflag) - Update flag settings for context
- [`contextsEvaluateFlags`](docs/sdks/contexts/README.md#evaluateflags) - Evaluate flags for context instance
- [`contextsGet`](docs/sdks/contexts/README.md#get) - Get contexts
- [`contextsGetAttributes`](docs/sdks/contexts/README.md#getattributes) - Get context attribute names
- [`contextsGetAttributeValues`](docs/sdks/contexts/README.md#getattributevalues) - Get context attribute values
- [`contextsGetInstances`](docs/sdks/contexts/README.md#getinstances) - Get context instances
- [`contextsListKinds`](docs/sdks/contexts/README.md#listkinds) - Get context kinds
- [`contextsPerformSearch`](docs/sdks/contexts/README.md#performsearch) - Search for contexts
- [`contextsPutKind`](docs/sdks/contexts/README.md#putkind) - Create or update context kind
- [`contextsSearch`](docs/sdks/contexts/README.md#search) - Search for context instances
- [`customRolesCreate`](docs/sdks/customroles/README.md#create) - Create custom role
- [`customRolesDelete`](docs/sdks/customroles/README.md#delete) - Delete custom role
- [`customRolesGet`](docs/sdks/customroles/README.md#get) - Get custom role
- [`customRolesList`](docs/sdks/customroles/README.md#list) - List custom roles
- [`customRolesPatch`](docs/sdks/customroles/README.md#patch) - Update custom role
- [`dataExportDestinationsCreate`](docs/sdks/dataexportdestinations/README.md#create) - Create Data Export destination
- [`dataExportDestinationsDelete`](docs/sdks/dataexportdestinations/README.md#delete) - Delete Data Export destination
- [`dataExportDestinationsGenerateWarehouseDestinationKeyPair`](docs/sdks/dataexportdestinations/README.md#generatewarehousedestinationkeypair) - Generate Snowflake destination key pair
- [`dataExportDestinationsGet`](docs/sdks/dataexportdestinations/README.md#get) - Get destination
- [`dataExportDestinationsList`](docs/sdks/dataexportdestinations/README.md#list) - List destinations
- [`dataExportDestinationsUpdate`](docs/sdks/dataexportdestinations/README.md#update) - Update Data Export destination
- [`environmentsCreate`](docs/sdks/environments/README.md#create) - Create environment
- [`environmentsDelete`](docs/sdks/environments/README.md#delete) - Delete environment
- [`environmentsGet`](docs/sdks/environments/README.md#get) - Get environment
- [`environmentsListByProject`](docs/sdks/environments/README.md#listbyproject) - List environments
- [`environmentsPatch`](docs/sdks/environments/README.md#patch) - Update environment
- [`environmentsResetMobileKey`](docs/sdks/environments/README.md#resetmobilekey) - Reset environment mobile SDK key
- [`environmentsResetSDKKey`](docs/sdks/environments/README.md#resetsdkkey) - Reset environment SDK key
- [`experimentsCreate`](docs/sdks/experiments/README.md#create) - Create experiment
- [`experimentsCreateIteration`](docs/sdks/experiments/README.md#createiteration) - Create iteration
- [`experimentsGet`](docs/sdks/experiments/README.md#get) - Get experiment
- [`experimentsGetSettings`](docs/sdks/experiments/README.md#getsettings) - Get experimentation settings
- [`experimentsList`](docs/sdks/experiments/README.md#list) - Get experiments
- [`experimentsPatch`](docs/sdks/experiments/README.md#patch) - Patch experiment
- [`experimentsUpdateSettings`](docs/sdks/experiments/README.md#updatesettings) - Update experimentation settings
- [`featureFlagsCopy`](docs/sdks/featureflags/README.md#copy) - Copy feature flag
- [`featureFlagsCreate`](docs/sdks/featureflags/README.md#create) - Create a feature flag
- [`featureFlagsDelete`](docs/sdks/featureflags/README.md#delete) - Delete feature flag
- [`featureFlagsGet`](docs/sdks/featureflags/README.md#get) - Get feature flag
- [`featureFlagsGetDependentByEnv`](docs/sdks/featureflags/README.md#getdependentbyenv) - List dependent feature flags by environment
- [`featureFlagsGetExpiringTargets`](docs/sdks/featureflags/README.md#getexpiringtargets) - Get expiring context targets for feature flag
- [`featureFlagsGetExpiringUserTargets`](docs/sdks/featureflags/README.md#getexpiringusertargets) - Get expiring user targets for feature flag
- [`featureFlagsGetMigrationSafetyIssues`](docs/sdks/featureflags/README.md#getmigrationsafetyissues) - Get migration safety issues
- [`featureFlagsGetStatus`](docs/sdks/featureflags/README.md#getstatus) - Get flag status across environments
- [`featureFlagsList`](docs/sdks/featureflags/README.md#list) - List feature flags
- [`featureFlagsListDependentFlags`](docs/sdks/featureflags/README.md#listdependentflags) - List dependent feature flags
- [`featureFlagsListStatuses`](docs/sdks/featureflags/README.md#liststatuses) - List feature flag statuses
- [`featureFlagsPatch`](docs/sdks/featureflags/README.md#patch) - Update feature flag
- [`featureFlagsPatchExpiringUserTargets`](docs/sdks/featureflags/README.md#patchexpiringusertargets) - Update expiring user targets on feature flag
- [`featureFlagsStatus`](docs/sdks/featureflags/README.md#status) - Get feature flag status
- [`featureFlagsUpdateExpiringTargets`](docs/sdks/featureflags/README.md#updateexpiringtargets) - Update expiring context targets on feature flag
- [`flagImportConfigurationsCreate`](docs/sdks/flagimportconfigurations/README.md#create) - Create a flag import configuration
- [`flagImportConfigurationsDelete`](docs/sdks/flagimportconfigurations/README.md#delete) - Delete a flag import configuration
- [`flagImportConfigurationsGet`](docs/sdks/flagimportconfigurations/README.md#get) - Get a single flag import configuration
- [`flagImportConfigurationsList`](docs/sdks/flagimportconfigurations/README.md#list) - List all flag import configurations
- [`flagImportConfigurationsTriggerJob`](docs/sdks/flagimportconfigurations/README.md#triggerjob) - Trigger a single flag import run
- [`flagImportConfigurationsUpdate`](docs/sdks/flagimportconfigurations/README.md#update) - Update a flag import configuration
- [`flagLinksCreate`](docs/sdks/flaglinks/README.md#create) - Create flag link
- [`flagLinksDelete`](docs/sdks/flaglinks/README.md#delete) - Delete flag link
- [`flagLinksList`](docs/sdks/flaglinks/README.md#list) - List flag links
- [`flagLinksUpdate`](docs/sdks/flaglinks/README.md#update) - Update flag link
- [`flagTriggersCreate`](docs/sdks/flagtriggers/README.md#create) - Create flag trigger
- [`flagTriggersDelete`](docs/sdks/flagtriggers/README.md#delete) - Delete flag trigger
- [`flagTriggersGetById`](docs/sdks/flagtriggers/README.md#getbyid) - Get flag trigger by ID
- [`flagTriggersList`](docs/sdks/flagtriggers/README.md#list) - List flag triggers
- [`flagTriggersPatchWorkflow`](docs/sdks/flagtriggers/README.md#patchworkflow) - Update flag trigger
- [`followFlagsAddFollower`](docs/sdks/followflags/README.md#addfollower) - Add a member as a follower of a flag in a project and environment
- [`followFlagsDeleteFollower`](docs/sdks/followflags/README.md#deletefollower) - Remove a member as a follower of a flag in a project and environment
- [`followFlagsGetFollowers`](docs/sdks/followflags/README.md#getfollowers) - Get followers of all flags in a given project and environment
- [`followFlagsListFollowers`](docs/sdks/followflags/README.md#listfollowers) - Get followers of a flag in a project and environment
- [`holdoutsCreate`](docs/sdks/holdouts/README.md#create) - Create holdout
- [`holdoutsGet`](docs/sdks/holdouts/README.md#get) - Get holdout
- [`holdoutsGetAll`](docs/sdks/holdouts/README.md#getall) - Get all holdouts
- [`holdoutsGetById`](docs/sdks/holdouts/README.md#getbyid) - Get Holdout by Id
- [`holdoutsUpdate`](docs/sdks/holdouts/README.md#update) - Patch holdout
- [`insightsChartsGetDeploymentFrequencyChart`](docs/sdks/insightscharts/README.md#getdeploymentfrequencychart) - Get deployment frequency chart data
- [`insightsChartsGetFlagStatus`](docs/sdks/insightscharts/README.md#getflagstatus) - Get flag status chart data
- [`insightsChartsGetLeadTime`](docs/sdks/insightscharts/README.md#getleadtime) - Get lead time chart data
- [`insightsChartsGetReleaseFrequencyChart`](docs/sdks/insightscharts/README.md#getreleasefrequencychart) - Get release frequency chart data
- [`insightsChartsGetStaleFlagsChart`](docs/sdks/insightscharts/README.md#getstaleflagschart) - Get stale flags chart data
- [`insightsDeploymentsCreateEvent`](docs/sdks/insightsdeployments/README.md#createevent) - Create deployment event
- [`insightsDeploymentsGet`](docs/sdks/insightsdeployments/README.md#get) - Get deployment
- [`insightsDeploymentsList`](docs/sdks/insightsdeployments/README.md#list) - List deployments
- [`insightsDeploymentsUpdate`](docs/sdks/insightsdeployments/README.md#update) - Update deployment
- [`insightsFlagEventsList`](docs/sdks/insightsflagevents/README.md#list) - List flag events
- [`insightsPullRequestsList`](docs/sdks/insightspullrequests/README.md#list) - List pull requests
- [`insightsRepositoriesAssociate`](docs/sdks/insightsrepositories/README.md#associate) - Associate repositories with projects
- [`insightsRepositoriesList`](docs/sdks/insightsrepositories/README.md#list) - List repositories
- [`insightsRepositoriesRemoveProjectAssociation`](docs/sdks/insightsrepositories/README.md#removeprojectassociation) - Remove repository project association
- [`insightsScoresCreateGroup`](docs/sdks/insightsscores/README.md#creategroup) - Create insight group
- [`insightsScoresDeleteGroup`](docs/sdks/insightsscores/README.md#deletegroup) - Delete insight group
- [`insightsScoresGet`](docs/sdks/insightsscores/README.md#get) - Get insight scores
- [`insightsScoresGetGroup`](docs/sdks/insightsscores/README.md#getgroup) - Get insight group
- [`insightsScoresList`](docs/sdks/insightsscores/README.md#list) - List insight groups
- [`insightsScoresUpdateGroup`](docs/sdks/insightsscores/README.md#updategroup) - Patch insight group
- [`integrationAuditLogSubscriptionsCreate`](docs/sdks/integrationauditlogsubscriptions/README.md#create) - Create audit log subscription
- [`integrationAuditLogSubscriptionsDelete`](docs/sdks/integrationauditlogsubscriptions/README.md#delete) - Delete audit log subscription
- [`integrationAuditLogSubscriptionsGet`](docs/sdks/integrationauditlogsubscriptions/README.md#get) - Get audit log subscriptions by integration
- [`integrationAuditLogSubscriptionsGetSubscription`](docs/sdks/integrationauditlogsubscriptions/README.md#getsubscription) - Get audit log subscription by ID
- [`integrationAuditLogSubscriptionsUpdate`](docs/sdks/integrationauditlogsubscriptions/README.md#update) - Update audit log subscription
- [`integrationDeliveryConfigurationsCreate`](docs/sdks/integrationdeliveryconfigurations/README.md#create) - Create delivery configuration
- [`integrationDeliveryConfigurationsDelete`](docs/sdks/integrationdeliveryconfigurations/README.md#delete) - Delete delivery configuration
- [`integrationDeliveryConfigurationsGetByEnvironment`](docs/sdks/integrationdeliveryconfigurations/README.md#getbyenvironment) - Get delivery configurations by environment
- [`integrationDeliveryConfigurationsGetById`](docs/sdks/integrationdeliveryconfigurations/README.md#getbyid) - Get delivery configuration by ID
- [`integrationDeliveryConfigurationsList`](docs/sdks/integrationdeliveryconfigurations/README.md#list) - List all delivery configurations
- [`integrationDeliveryConfigurationsUpdate`](docs/sdks/integrationdeliveryconfigurations/README.md#update) - Update delivery configuration
- [`integrationDeliveryConfigurationsValidate`](docs/sdks/integrationdeliveryconfigurations/README.md#validate) - Validate delivery configuration
- [`integrationsCreateConfiguration`](docs/sdks/integrations/README.md#createconfiguration) - Create integration configuration
- [`integrationsDeleteConfiguration`](docs/sdks/integrations/README.md#deleteconfiguration) - Delete integration configuration
- [`integrationsGetConfiguration`](docs/sdks/integrations/README.md#getconfiguration) - Get an integration configuration
- [`integrationsGetConfigurations`](docs/sdks/integrations/README.md#getconfigurations) - Get all configurations for the integration
- [`integrationsUpdateConfiguration`](docs/sdks/integrations/README.md#updateconfiguration) - Update integration configuration
- [`layersCreate`](docs/sdks/layers/README.md#create) - Create layer
- [`layersList`](docs/sdks/layers/README.md#list) - Get layers
- [`layersUpdate`](docs/sdks/layers/README.md#update) - Update layer
- [`metricsCreate`](docs/sdks/metrics/README.md#create) - Create metric
- [`metricsCreateGroup`](docs/sdks/metrics/README.md#creategroup) - Create metric group
- [`metricsDelete`](docs/sdks/metrics/README.md#delete) - Delete metric
- [`metricsDeleteGroup`](docs/sdks/metrics/README.md#deletegroup) - Delete metric group
- [`metricsGet`](docs/sdks/metrics/README.md#get) - Get metric
- [`metricsGetMetricGroup`](docs/sdks/metrics/README.md#getmetricgroup) - Get metric group
- [`metricsList`](docs/sdks/metrics/README.md#list) - List metrics
- [`metricsListGroups`](docs/sdks/metrics/README.md#listgroups) - List metric groups
- [`metricsPatch`](docs/sdks/metrics/README.md#patch) - Update metric
- [`metricsPatchMetricGroup`](docs/sdks/metrics/README.md#patchmetricgroup) - Patch metric group
- [`oauth2ClientsCreate`](docs/sdks/oauth2clients/README.md#create) - Create a LaunchDarkly OAuth 2.0 client
- [`oauth2ClientsDelete`](docs/sdks/oauth2clients/README.md#delete) - Delete OAuth 2.0 client
- [`oauth2ClientsGet`](docs/sdks/oauth2clients/README.md#get) - Get clients
- [`oauth2ClientsGetById`](docs/sdks/oauth2clients/README.md#getbyid) - Get client by ID
- [`oauth2ClientsPatch`](docs/sdks/oauth2clients/README.md#patch) - Patch client by ID
- [`otherGetCallerIdentity`](docs/sdks/other/README.md#getcalleridentity) - Identify the caller
- [`otherGetIps`](docs/sdks/other/README.md#getips) - Gets the public IP list
- [`otherGetOpenapiSpec`](docs/sdks/other/README.md#getopenapispec) - Gets the OpenAPI spec in json
- [`otherGetRoot`](docs/sdks/other/README.md#getroot) - Root resource
- [`otherGetVersions`](docs/sdks/other/README.md#getversions) - Get version information
- [`persistentStoreIntegrationsCreate`](docs/sdks/persistentstoreintegrations/README.md#create) - Create big segment store integration
- [`persistentStoreIntegrationsDelete`](docs/sdks/persistentstoreintegrations/README.md#delete) - Delete big segment store integration
- [`persistentStoreIntegrationsGetIntegration`](docs/sdks/persistentstoreintegrations/README.md#getintegration) - Get big segment store integration by ID
- [`persistentStoreIntegrationsListBigSegmentStores`](docs/sdks/persistentstoreintegrations/README.md#listbigsegmentstores) - List all big segment store integrations
- [`persistentStoreIntegrationsPatchBigSegmentStore`](docs/sdks/persistentstoreintegrations/README.md#patchbigsegmentstore) - Update big segment store integration
- [`projectsCreate`](docs/sdks/projects/README.md#create) - Create project
- [`projectsDelete`](docs/sdks/projects/README.md#delete) - Delete project
- [`projectsGet`](docs/sdks/projects/README.md#get) - Get project
- [`projectsGetFlagDefaults`](docs/sdks/projects/README.md#getflagdefaults) - Get flag defaults for project
- [`projectsList`](docs/sdks/projects/README.md#list) - List projects
- [`projectsPatchFlagDefaults`](docs/sdks/projects/README.md#patchflagdefaults) - Update flag default for project
- [`projectsSetFlagDefaults`](docs/sdks/projects/README.md#setflagdefaults) - Create or update flag defaults for project
- [`projectsUpdate`](docs/sdks/projects/README.md#update) - Update project
- [`relayProxyConfigurationsCreate`](docs/sdks/relayproxyconfigurations/README.md#create) - Create a new Relay Proxy config
- [`relayProxyConfigurationsDelete`](docs/sdks/relayproxyconfigurations/README.md#delete) - Delete Relay Proxy config by ID
- [`relayProxyConfigurationsGetConfig`](docs/sdks/relayproxyconfigurations/README.md#getconfig) - Get Relay Proxy config
- [`relayProxyConfigurationsList`](docs/sdks/relayproxyconfigurations/README.md#list) - List Relay Proxy configs
- [`relayProxyConfigurationsReset`](docs/sdks/relayproxyconfigurations/README.md#reset) - Reset Relay Proxy configuration key
- [`relayProxyConfigurationsUpdate`](docs/sdks/relayproxyconfigurations/README.md#update) - Update a Relay Proxy config
- [`releasePipelinesCreate`](docs/sdks/releasepipelines/README.md#create) - Create a release pipeline
- [`releasePipelinesDelete`](docs/sdks/releasepipelines/README.md#delete) - Delete release pipeline
- [`releasePipelinesGetAll`](docs/sdks/releasepipelines/README.md#getall) - Get all release pipelines
- [`releasePipelinesGetAllReleaseProgressions`](docs/sdks/releasepipelines/README.md#getallreleaseprogressions) - Get release progressions for release pipeline
- [`releasePipelinesGetByKey`](docs/sdks/releasepipelines/README.md#getbykey) - Get release pipeline by key
- [`releasePipelinesUpdate`](docs/sdks/releasepipelines/README.md#update) - Update a release pipeline
- [`releasesCreate`](docs/sdks/releases/README.md#create) - Create a new release for flag
- [`releasesDeleteByFlagKey`](docs/sdks/releases/README.md#deletebyflagkey) - Delete a release for flag
- [`releasesGetByFlagKey`](docs/sdks/releases/README.md#getbyflagkey) - Get release for flag
- [`releasesPatchByFlagKey`](docs/sdks/releases/README.md#patchbyflagkey) - Patch release for flag
- [`releasesUpdatePhaseStatus`](docs/sdks/releases/README.md#updatephasestatus) - Update phase status for release
- [`scheduledChangesCreate`](docs/sdks/scheduledchanges/README.md#create) - Create scheduled changes workflow
- [`scheduledChangesDelete`](docs/sdks/scheduledchanges/README.md#delete) - Delete scheduled changes workflow
- [`scheduledChangesGet`](docs/sdks/scheduledchanges/README.md#get) - Get a scheduled change
- [`scheduledChangesList`](docs/sdks/scheduledchanges/README.md#list) - List scheduled changes
- [`scheduledChangesUpdate`](docs/sdks/scheduledchanges/README.md#update) - Update scheduled changes workflow
- [`segmentsCreate`](docs/sdks/segments/README.md#create) - Create segment
- [`segmentsCreateBigExport`](docs/sdks/segments/README.md#createbigexport) - Create big segment export
- [`segmentsCreateBigImport`](docs/sdks/segments/README.md#createbigimport) - Create big segment import
- [`segmentsDelete`](docs/sdks/segments/README.md#delete) - Delete segment
- [`segmentsEvaluateMembership`](docs/sdks/segments/README.md#evaluatemembership) - List segment memberships for context instance
- [`segmentsGet`](docs/sdks/segments/README.md#get) - Get segment
- [`segmentsGetExpiringTargets`](docs/sdks/segments/README.md#getexpiringtargets) - Get expiring targets for segment
- [`segmentsGetExpiringUserTargets`](docs/sdks/segments/README.md#getexpiringusertargets) - Get expiring user targets for segment
- [`segmentsGetExport`](docs/sdks/segments/README.md#getexport) - Get big segment export
- [`segmentsGetImport`](docs/sdks/segments/README.md#getimport) - Get big segment import
- [`segmentsGetMembershipForContext`](docs/sdks/segments/README.md#getmembershipforcontext) - Get big segment membership for context
- [`segmentsGetMembershipForUser`](docs/sdks/segments/README.md#getmembershipforuser) - Get big segment membership for user
- [`segmentsList`](docs/sdks/segments/README.md#list) - List segments
- [`segmentsPatch`](docs/sdks/segments/README.md#patch) - Patch segment
- [`segmentsPatchExpiringTargets`](docs/sdks/segments/README.md#patchexpiringtargets) - Update expiring targets for segment
- [`segmentsPatchExpiringUserTargets`](docs/sdks/segments/README.md#patchexpiringusertargets) - Update expiring user targets for segment
- [`segmentsUpdateBigTargets`](docs/sdks/segments/README.md#updatebigtargets) - Update user context targets on a big segment
- [`segmentsUpdateContextTargets`](docs/sdks/segments/README.md#updatecontexttargets) - Update context targets on a big segment
- [`tagsList`](docs/sdks/tags/README.md#list) - List tags
- [`teamsAddMembers`](docs/sdks/teams/README.md#addmembers) - Add multiple members to team
- [`teamsCreate`](docs/sdks/teams/README.md#create) - Create team
- [`teamsDelete`](docs/sdks/teams/README.md#delete) - Delete team
- [`teamsGet`](docs/sdks/teams/README.md#get) - Get team
- [`teamsGetMaintainers`](docs/sdks/teams/README.md#getmaintainers) - Get team maintainers
- [`teamsGetRoles`](docs/sdks/teams/README.md#getroles) - Get team custom roles
- [`teamsList`](docs/sdks/teams/README.md#list) - List teams
- [`teamsPatch`](docs/sdks/teams/README.md#patch) - Update team
- [`teamsUpdate`](docs/sdks/teams/README.md#update) - Update teams
- [`tokensDelete`](docs/sdks/tokens/README.md#delete) - Delete access token
- [`webhooksCreate`](docs/sdks/webhooks/README.md#create) - Creates a webhook
- [`webhooksDelete`](docs/sdks/webhooks/README.md#delete) - Delete webhook
- [`webhooksGet`](docs/sdks/webhooks/README.md#get) - Get webhook
- [`webhooksList`](docs/sdks/webhooks/README.md#list) - List webhooks
- [`webhooksUpdate`](docs/sdks/webhooks/README.md#update) - Update webhook
- [`workflowsCreate`](docs/sdks/workflows/README.md#create) - Create workflow
- [`workflowsDelete`](docs/sdks/workflows/README.md#delete) - Delete workflow
- [`workflowsFetchById`](docs/sdks/workflows/README.md#fetchbyid) - Get custom workflow
- [`workflowsGet`](docs/sdks/workflows/README.md#get) - Get workflows
- [`workflowTemplatesCreate`](docs/sdks/workflowtemplates/README.md#create) - Create workflow template
- [`workflowTemplatesDelete`](docs/sdks/workflowtemplates/README.md#delete) - Delete workflow template
- [`workflowTemplatesList`](docs/sdks/workflowtemplates/README.md#list) - Get workflow templates
- ~~[`experimentsGetResults`](docs/sdks/experiments/README.md#getresults)~~ - Get experiment results (Deprecated) :warning: **Deprecated**
- ~~[`experimentsGetResultsForMetricGroup`](docs/sdks/experiments/README.md#getresultsformetricgroup)~~ - Get experiment results for metric group (Deprecated) :warning: **Deprecated**
- ~~[`usersDelete`](docs/sdks/users/README.md#delete)~~ - Delete user :warning: **Deprecated**
- ~~[`userSettingsGetExpiringFlagsForUser`](docs/sdks/usersettings/README.md#getexpiringflagsforuser)~~ - Get expiring dates on flags for user :warning: **Deprecated**
- ~~[`userSettingsGetFlagSetting`](docs/sdks/usersettings/README.md#getflagsetting)~~ - Get flag setting for user :warning: **Deprecated**
- ~~[`userSettingsListFlags`](docs/sdks/usersettings/README.md#listflags)~~ - List flag settings for user :warning: **Deprecated**
- ~~[`userSettingsUpdateExpiringTargets`](docs/sdks/usersettings/README.md#updateexpiringtargets)~~ - Update expiring user target for flags :warning: **Deprecated**
- ~~[`userSettingsUpdateFlagSetting`](docs/sdks/usersettings/README.md#updateflagsetting)~~ - Update flag settings for user :warning: **Deprecated**
- ~~[`usersGet`](docs/sdks/users/README.md#get)~~ - Get user :warning: **Deprecated**
- ~~[`usersGetAttributeNames`](docs/sdks/users/README.md#getattributenames)~~ - Get user attribute names :warning: **Deprecated**
- ~~[`usersList`](docs/sdks/users/README.md#list)~~ - List users :warning: **Deprecated**
- ~~[`usersSearch`](docs/sdks/users/README.md#search)~~ - Find users :warning: **Deprecated**

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
<!-- End File uploads [file-upload] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.other.getRoot({
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
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
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
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.other.getRoot();

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
import { LaunchDarkly } from "@launchdarkly/mcp-server";
import {
  RateLimitedErrorRep,
  SDKValidationError,
} from "@launchdarkly/mcp-server/models/errors";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  let result;
  try {
    result = await launchDarkly.other.getRoot();

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

| #   | Server                         | Description     |
| --- | ------------------------------ | --------------- |
| 0   | `https://app.launchdarkly.com` |  Default        |
| 1   | `https://app.launchdarkly.us`  |  Federal        |
| 2   | `https://app.launchdarkly.com` | Prod API server |

#### Example

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  serverIdx: 2,
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  serverURL: "https://app.launchdarkly.com",
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.other.getRoot();

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
import { LaunchDarkly } from "@launchdarkly/mcp-server";
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

const sdk = new LaunchDarkly({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const sdk = new LaunchDarkly({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `LAUNCHDARKLY_DEBUG` to true.
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
