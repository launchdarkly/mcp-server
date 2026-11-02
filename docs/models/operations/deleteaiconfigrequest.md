# DeleteAIConfigRequest

## Example Usage

```typescript
import { DeleteAIConfigRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteAIConfigRequest = {
  projectKey: "default",
  configKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `projectKey`       | *string*           | :heavy_check_mark: | The project key    | default            |
| `configKey`        | *string*           | :heavy_check_mark: | The AI Config key  |                    |