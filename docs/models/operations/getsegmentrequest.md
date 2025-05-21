# GetSegmentRequest

## Example Usage

```typescript
import { GetSegmentRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetSegmentRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |
| `segmentKey`        | *string*            | :heavy_check_mark:  | The segment key     |