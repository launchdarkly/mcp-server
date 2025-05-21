# PatchFlagsRequest

## Example Usage

```typescript
import { PatchFlagsRequest } from "@launchdarkly/mcp-server/models/components";

let value: PatchFlagsRequest = {
  comment: "optional comment",
  instructions: [
    {
      "kind": "addExpireUserTargetDate",
      "userKey": "sandy",
      "value": 1686412800000,
      "variationId": "ce12d345-a1b2-4fb5-a123-ab123d4d5f5d",
    },
  ],
};
```

## Fields

| Field                                                                                                                                        | Type                                                                                                                                         | Required                                                                                                                                     | Description                                                                                                                                  | Example                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                                    | *string*                                                                                                                                     | :heavy_minus_sign:                                                                                                                           | Optional comment describing the change                                                                                                       | optional comment                                                                                                                             |
| `instructions`                                                                                                                               | Record<string, *any*>[]                                                                                                                      | :heavy_check_mark:                                                                                                                           | The instructions to perform when updating                                                                                                    | [<br/>{<br/>"kind": "addExpireUserTargetDate",<br/>"userKey": "sandy",<br/>"value": 1686412800000,<br/>"variationId": "ce12d345-a1b2-4fb5-a123-ab123d4d5f5d"<br/>}<br/>] |