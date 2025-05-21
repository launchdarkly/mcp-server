# GetFollowersByProjEnvRequest

## Example Usage

```typescript
import { GetFollowersByProjEnvRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetFollowersByProjEnvRequest = {
  projectKey: "<value>",
  environmentKey: "<value>",
};
```

## Fields

| Field               | Type                | Required            | Description         |
| ------------------- | ------------------- | ------------------- | ------------------- |
| `projectKey`        | *string*            | :heavy_check_mark:  | The project key     |
| `environmentKey`    | *string*            | :heavy_check_mark:  | The environment key |