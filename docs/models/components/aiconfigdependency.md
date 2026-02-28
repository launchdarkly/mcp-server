# AIConfigDependency

A resource that depends on this AI Config

## Example Usage

```typescript
import { AIConfigDependency } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigDependency = {
  type: "agent-graph",
  key: "key",
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `type`                                                                                 | [components.AIConfigDependencyType](../../models/components/aiconfigdependencytype.md) | :heavy_check_mark:                                                                     | The type of the dependent resource                                                     |
| `key`                                                                                  | *string*                                                                               | :heavy_check_mark:                                                                     | The key of the dependent resource                                                      |