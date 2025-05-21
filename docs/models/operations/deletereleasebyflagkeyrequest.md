# DeleteReleaseByFlagKeyRequest

## Example Usage

```typescript
import { DeleteReleaseByFlagKeyRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteReleaseByFlagKeyRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectKey`       | *string*           | :heavy_check_mark: | The project key    |
| `flagKey`          | *string*           | :heavy_check_mark: | The flag key       |