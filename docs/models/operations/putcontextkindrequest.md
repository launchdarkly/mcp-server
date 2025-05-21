# PutContextKindRequest

## Example Usage

```typescript
import { PutContextKindRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutContextKindRequest = {
  projectKey: "<value>",
  key: "<value>",
  upsertContextKindPayload: {
    name: "organization",
    description: "An example context kind for organizations",
    hideInTargeting: false,
    archived: false,
    version: 1,
  },
};
```

## Fields

| Field                                                                       | Type                                                                        | Required                                                                    | Description                                                                 |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `projectKey`                                                                | *string*                                                                    | :heavy_check_mark:                                                          | The project key                                                             |
| `key`                                                                       | *string*                                                                    | :heavy_check_mark:                                                          | The context kind key                                                        |
| `upsertContextKindPayload`                                                  | [models.UpsertContextKindPayload](../../models/upsertcontextkindpayload.md) | :heavy_check_mark:                                                          | N/A                                                                         |