# GetBigSegmentExportRequest

## Example Usage

```typescript
import { GetBigSegmentExportRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetBigSegmentExportRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  exportID: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |
| `segmentKey`        | *string*            | :heavy_check_mark:  | The segment key     |
| `exportID`          | *string*            | :heavy_check_mark:  | The export ID       |