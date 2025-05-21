# CopiedFromEnv

## Example Usage

```typescript
import { CopiedFromEnv } from "@launchdarkly/mcp-server/models/components";

let value: CopiedFromEnv = {
  key: "source-flag-key-123abc",
  version: 1,
};
```

## Fields

| Field                          | Type                           | Required                       | Description                    | Example                        |
| ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ | ------------------------------ |
| `key`                          | *string*                       | :heavy_check_mark:             | Key of feature flag copied     | source-flag-key-123abc         |
| `version`                      | *number*                       | :heavy_minus_sign:             | Version of feature flag copied | 1                              |