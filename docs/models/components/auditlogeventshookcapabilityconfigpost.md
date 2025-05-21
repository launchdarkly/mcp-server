# AuditLogEventsHookCapabilityConfigPost

## Example Usage

```typescript
import { AuditLogEventsHookCapabilityConfigPost } from "@launchdarkly/mcp-server/models/components";

let value: AuditLogEventsHookCapabilityConfigPost = {
  statements: [
    {
      resources: [
        "proj/*:env/*:flag/*;testing-tag",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `statements`                                                           | [components.StatementPost](../../models/components/statementpost.md)[] | :heavy_minus_sign:                                                     | N/A                                                                    |