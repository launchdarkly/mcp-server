# GetSegmentMembershipForContextRequest

## Example Usage

```typescript
import { GetSegmentMembershipForContextRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetSegmentMembershipForContextRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  contextKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |
| `segmentKey`        | *string*            | :heavy_check_mark:  | The segment key     |
| `contextKey`        | *string*            | :heavy_check_mark:  | The context key     |