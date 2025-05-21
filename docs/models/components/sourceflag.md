# SourceFlag

## Example Usage

```typescript
import { SourceFlag } from "@launchdarkly/mcp-server/models/components";

let value: SourceFlag = {
  key: "environment-key-123abc",
  version: 1,
};
```

## Fields

| Field                                             | Type                                              | Required                                          | Description                                       | Example                                           |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| `key`                                             | *string*                                          | :heavy_check_mark:                                | The environment key for the source environment    | environment-key-123abc                            |
| `version`                                         | *number*                                          | :heavy_minus_sign:                                | The version of the source flag from which to copy | 1                                                 |