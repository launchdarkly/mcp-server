# AccessDenied

## Example Usage

```typescript
import { AccessDenied } from "@launchdarkly/mcp-server/models/components";

let value: AccessDenied = {
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

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `action`                                                                       | *string*                                                                       | :heavy_check_mark:                                                             | N/A                                                                            |
| `reason`                                                                       | [components.AccessDeniedReason](../../models/components/accessdeniedreason.md) | :heavy_check_mark:                                                             | N/A                                                                            |