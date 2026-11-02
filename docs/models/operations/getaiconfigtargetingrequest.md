# GetAIConfigTargetingRequest

## Example Usage

```typescript
import { GetAIConfigTargetingRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetAIConfigTargetingRequest = {
  projectKey: "<value>",
  configKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectKey`       | *string*           | :heavy_check_mark: | The project key    |
| `configKey`        | *string*           | :heavy_check_mark: | The AI Config key  |