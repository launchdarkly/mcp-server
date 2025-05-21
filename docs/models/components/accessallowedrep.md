# AccessAllowedRep

## Example Usage

```typescript
import { AccessAllowedRep } from "@launchdarkly/mcp-server/models/components";

let value: AccessAllowedRep = {
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
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `action`                                                                         | *string*                                                                         | :heavy_check_mark:                                                               | N/A                                                                              |
| `reason`                                                                         | [components.AccessAllowedReason](../../models/components/accessallowedreason.md) | :heavy_check_mark:                                                               | N/A                                                                              |