# CreateIntegrationConfigurationRequest

## Example Usage

```typescript
import { CreateIntegrationConfigurationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateIntegrationConfigurationRequest = {
  integrationKey: "<value>",
  integrationConfigurationPost: {
    name: "Example integration configuration",
    enabled: true,
    tags: [
      "ops",
    ],
    configValues: {
      "optional": "an optional property",
      "required": "the required property",
      "url": "https://example.com",
    },
    capabilityConfig: {
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
    },
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `integrationKey`                                                                    | *string*                                                                            | :heavy_check_mark:                                                                  | The integration key                                                                 |
| `integrationConfigurationPost`                                                      | [models.IntegrationConfigurationPost](../../models/integrationconfigurationpost.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |