# RestrictedModelError

## Example Usage

```typescript
import { RestrictedModelError } from "@launchdarkly/mcp-server/models/components";

let value: RestrictedModelError = {
  key: "key",
  message: "message",
  code: 0,
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `key`              | *string*           | :heavy_check_mark: | N/A                |
| `message`          | *string*           | :heavy_check_mark: | N/A                |
| `code`             | *number*           | :heavy_check_mark: | N/A                |