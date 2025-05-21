# ContextSettings
(*contextSettings*)

## Overview

### Available Operations

* [updateFlag](#updateflag) - Update flag settings for context

## updateFlag


Enable or disable a feature flag for a context based on its context kind and key.

Omitting the `setting` attribute from the request body, or including a `setting` of `null`, erases the current setting for a context.

If you previously patched the flag, and the patch included the context's data, LaunchDarkly continues to use that data. If LaunchDarkly has never encountered the combination of the context's key and kind before, it calculates the flag values based on the context kind and key.


### Example Usage

```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.contextSettings.updateFlag({
    projectKey: "<value>",
    environmentKey: "<value>",
    contextKind: "<value>",
    contextKey: "<value>",
    featureFlagKey: "<value>",
    valuePut: {
      setting: "existing_variation_value_to_use",
      comment: "make sure this context experiences a specific variation",
    },
  });


}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { LaunchDarklyCore } from "@launchdarkly/mcp-server/core.js";
import { contextSettingsUpdateFlag } from "@launchdarkly/mcp-server/funcs/contextSettingsUpdateFlag.js";

// Use `LaunchDarklyCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const launchDarkly = new LaunchDarklyCore({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const res = await contextSettingsUpdateFlag(launchDarkly, {
    projectKey: "<value>",
    environmentKey: "<value>",
    contextKind: "<value>",
    contextKey: "<value>",
    featureFlagKey: "<value>",
    valuePut: {
      setting: "existing_variation_value_to_use",
      comment: "make sure this context experiences a specific variation",
    },
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
| `request`                                                                                                                                                                      | [operations.PutContextFlagSettingRequest](../../models/operations/putcontextflagsettingrequest.md)                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
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