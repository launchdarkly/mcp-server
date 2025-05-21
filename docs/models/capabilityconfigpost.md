# CapabilityConfigPost

## Example Usage

```typescript
import { CapabilityConfigPost } from "@launchdarkly/mcp-server";

let value: CapabilityConfigPost = {
  approvals: {
    additionalFormVariables: [
      {},
    ],
  },
  auditLogEventsHook: {
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
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `approvals`                                                                                          | [models.ApprovalsCapabilityConfig](../models/approvalscapabilityconfig.md)                           | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `auditLogEventsHook`                                                                                 | [models.AuditLogEventsHookCapabilityConfigPost](../models/auditlogeventshookcapabilityconfigpost.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |