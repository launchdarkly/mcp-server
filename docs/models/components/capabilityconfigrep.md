# CapabilityConfigRep

## Example Usage

```typescript
import { CapabilityConfigRep } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                                                | Type                                                                                                                 | Required                                                                                                             | Description                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| `approvals`                                                                                                          | [components.ApprovalsCapabilityConfig](../../models/components/approvalscapabilityconfig.md)                         | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |
| `auditLogEventsHook`                                                                                                 | [components.AuditLogEventsHookCapabilityConfigRep](../../models/components/auditlogeventshookcapabilityconfigrep.md) | :heavy_minus_sign:                                                                                                   | N/A                                                                                                                  |