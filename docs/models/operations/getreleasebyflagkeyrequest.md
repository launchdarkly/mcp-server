# GetReleaseByFlagKeyRequest

## Example Usage

```typescript
import { GetReleaseByFlagKeyRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetReleaseByFlagKeyRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `projectKey`       | *string*           | :heavy_check_mark: | The project key    |
| `flagKey`          | *string*           | :heavy_check_mark: | The flag key       |