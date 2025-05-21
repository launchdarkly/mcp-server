# AIConfigRep

## Example Usage

```typescript
import { AIConfigRep } from "@launchdarkly/mcp-server";

let value: AIConfigRep = {
  key: "aiconfig-key-123abc",
  name: "AI Config 1",
};
```

## Fields

| Field                     | Type                      | Required                  | Description               | Example                   |
| ------------------------- | ------------------------- | ------------------------- | ------------------------- | ------------------------- |
| `key`                     | *string*                  | :heavy_check_mark:        | The key of the AI Config  | aiconfig-key-123abc       |
| `name`                    | *string*                  | :heavy_check_mark:        | The name of the AI Config | AI Config 1               |