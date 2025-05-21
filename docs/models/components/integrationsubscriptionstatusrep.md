# IntegrationSubscriptionStatusRep

## Example Usage

```typescript
import { IntegrationSubscriptionStatusRep } from "@launchdarkly/mcp-server/models/components";

let value: IntegrationSubscriptionStatusRep = {};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `successCount`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `lastSuccess`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `lastError`                                                                          | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `errorCount`                                                                         | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `errors`                                                                             | [components.IntegrationStatusRep](../../models/components/integrationstatusrep.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |