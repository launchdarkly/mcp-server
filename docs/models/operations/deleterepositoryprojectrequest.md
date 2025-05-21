# DeleteRepositoryProjectRequest

## Example Usage

```typescript
import { DeleteRepositoryProjectRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteRepositoryProjectRequest = {
  repositoryKey: "<value>",
  projectKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `repositoryKey`    | *string*           | :heavy_check_mark: | The repository key |
| `projectKey`       | *string*           | :heavy_check_mark: | The project key    |