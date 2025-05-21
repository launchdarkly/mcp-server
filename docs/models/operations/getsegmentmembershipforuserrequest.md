# GetSegmentMembershipForUserRequest

## Example Usage

```typescript
import { GetSegmentMembershipForUserRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetSegmentMembershipForUserRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
  segmentKey: "<value>",
  userKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |
| `segmentKey`        | *string*            | :heavy_check_mark:  | The segment key     |
| `userKey`           | *string*            | :heavy_check_mark:  | The user key        |