# GetBigSegmentImportRequest

## Example Usage

```typescript
import { GetBigSegmentImportRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetBigSegmentImportRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  importID: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |
| `segmentKey`        | *string*            | :heavy_check_mark:  | The segment key     |
| `importID`          | *string*            | :heavy_check_mark:  | The import ID       |