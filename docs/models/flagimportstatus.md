# FlagImportStatus

## Example Usage

```typescript
import { FlagImportStatus } from "@launchdarkly/mcp-server";

let value: FlagImportStatus = {
  status: "pending",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `status`                                                             | [models.FlagImportStatusStatus](../models/flagimportstatusstatus.md) | :heavy_minus_sign:                                                   | The current status of the import integrations related import job     | pending                                                              |
| `lastImport`                                                         | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `lastError`                                                          | *number*                                                             | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `errors`                                                             | [models.StatusResponse](../models/statusresponse.md)[]               | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |