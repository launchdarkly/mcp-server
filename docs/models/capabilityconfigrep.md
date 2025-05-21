# CapabilityConfigRep

## Example Usage

```typescript
import { CapabilityConfigRep } from "@launchdarkly/mcp-server";

let value: CapabilityConfigRep = {
  approvals: {
    additionalFormVariables: [
      {},
    ],
  },
  auditLogEventsHook: {
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
  },
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `approvals`                                                                                        | [models.ApprovalsCapabilityConfig](../models/approvalscapabilityconfig.md)                         | :heavy_minus_sign:                                                                                 | N/A                                                                                                |
| `auditLogEventsHook`                                                                               | [models.AuditLogEventsHookCapabilityConfigRep](../models/auditlogeventshookcapabilityconfigrep.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |