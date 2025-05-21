# CapabilityConfigPost

## Example Usage

```typescript
import { CapabilityConfigPost } from "@launchdarkly/mcp-server/models/components";

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

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `approvals`                                                                                                            | [components.ApprovalsCapabilityConfig](../../models/components/approvalscapabilityconfig.md)                           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |
| `auditLogEventsHook`                                                                                                   | [components.AuditLogEventsHookCapabilityConfigPost](../../models/components/auditlogeventshookcapabilityconfigpost.md) | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |