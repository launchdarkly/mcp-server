# FlagImportStatus

## Example Usage

```typescript
import { FlagImportStatus } from "@launchdarkly/mcp-server/models/components";

let value: FlagImportStatus = {
  status: "pending",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `status`                                                                               | [components.FlagImportStatusStatus](../../models/components/flagimportstatusstatus.md) | :heavy_minus_sign:                                                                     | The current status of the import integrations related import job                       | pending                                                                                |
| `lastImport`                                                                           | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `lastError`                                                                            | *number*                                                                               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |
| `errors`                                                                               | [components.StatusResponse](../../models/components/statusresponse.md)[]               | :heavy_minus_sign:                                                                     | N/A                                                                                    |                                                                                        |