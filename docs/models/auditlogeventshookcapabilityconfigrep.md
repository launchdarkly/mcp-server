# AuditLogEventsHookCapabilityConfigRep

## Example Usage

```typescript
import { AuditLogEventsHookCapabilityConfigRep } from "@launchdarkly/mcp-server";

let value: AuditLogEventsHookCapabilityConfigRep = {
  statements: [
    {
      resources: [
        "proj/*:env/*;qa_*:/flag/*",
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

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `statements`                                                               | [models.Statement](../models/statement.md)[]                               | :heavy_minus_sign:                                                         | The set of resources you wish to subscribe to audit log notifications for. |