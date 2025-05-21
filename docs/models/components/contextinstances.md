# ContextInstances

## Example Usage

```typescript
import { ContextInstances } from "@launchdarkly/mcp-server/models/components";

let value: ContextInstances = {
  links: {
    "next": {
      href:
        "/api/v2/projects/my-project/environments/my-env/context-instances/organization:launch-darkly:user:henry?limit=2&continuationToken=2022-04-15T15:00:57.526470334Z",
      type: "application/json",
    },
    "self": {
      href:
        "/api/v2/projects/my-proj/environments/my-env/context-instances/organization:launch-darkly:user:henry-jacobs?limit=2",
      type: "application/json",
    },
  },
  totalCount: 100,
  environmentId: "57be1db38b75bf0772d11384",
  continuationToken: "QAGFKH1313KUGI2351",
  items: [
    {
      lastSeen: new Date("2022-04-15T15:00:57.526470334Z"),
      id: "b3JnOmxhdW5jaGRhcmtseQ",
      applicationId: "GoSDK/1.2",
      anonymousKinds: [
        "device",
        "privateKind",
      ],
      context:
        "{\"kind\": \"user\", \"key\": \"context-key-123abc\", \"name\": \"Sandy Smith\", \"email\": \"sandy@example.com\"}",
      links: {
        "parent": {
          href: "/api/v2/projects/my-project/environments/my-environment",
          type: "application/json",
        },
        "self": {
          href:
            "/api/v2/projects/my-project/environments/my-env/context-instances/organization:launch-darkly:user:henry?filter=applicationId:\"GoSDK/1.2\"",
          type: "application/json",
        },
        "site": {
          href:
            "/my-project/my-environment/context-instances/organization:launch-darkly:user:henry",
          type: "text/html",
        },
      },
      access: {
        denied: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
        allowed: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                                              | Type                                                                                                                                                                                                                                                                                                                                                                                               | Required                                                                                                                                                                                                                                                                                                                                                                                           | Description                                                                                                                                                                                                                                                                                                                                                                                        | Example                                                                                                                                                                                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                                                                                                                                                                                                                                                                                            | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                                                                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                 | The location and content type of related resources                                                                                                                                                                                                                                                                                                                                                 | {<br/>"next": {<br/>"href": "/api/v2/projects/my-project/environments/my-env/context-instances/organization:launch-darkly:user:henry?limit=2\u0026continuationToken=2022-04-15T15:00:57.526470334Z",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/projects/my-proj/environments/my-env/context-instances/organization:launch-darkly:user:henry-jacobs?limit=2",<br/>"type": "application/json"<br/>}<br/>} |
| `totalCount`                                                                                                                                                                                                                                                                                                                                                                                       | *number*                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                 | The number of unique context instances                                                                                                                                                                                                                                                                                                                                                             | 100                                                                                                                                                                                                                                                                                                                                                                                                |
| `environmentId`                                                                                                                                                                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                 | The environment ID                                                                                                                                                                                                                                                                                                                                                                                 | 57be1db38b75bf0772d11384                                                                                                                                                                                                                                                                                                                                                                           |
| `continuationToken`                                                                                                                                                                                                                                                                                                                                                                                | *string*                                                                                                                                                                                                                                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                                                                                                 | An obfuscated string that references the last context instance on the previous page of results. You can use this for pagination, however, we recommend using the <code>next</code> link instead.                                                                                                                                                                                                   | QAGFKH1313KUGI2351                                                                                                                                                                                                                                                                                                                                                                                 |
| `items`                                                                                                                                                                                                                                                                                                                                                                                            | [components.ContextInstanceRecord](../../models/components/contextinstancerecord.md)[]                                                                                                                                                                                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                                                 | A collection of context instances. Can include multiple versions of context instances that have the same <code>id</code>, but different <code>applicationId</code>s.                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                    |