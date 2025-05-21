# ActionInput

## Example Usage

```typescript
import { ActionInput } from "@launchdarkly/mcp-server/models/components";

let value: ActionInput = {
  instructions: "{\"instructions\": [{ \"kind\": \"turnFlagOn\"}]}",
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `instructions`                                                                                                               | *any*                                                                                                                        | :heavy_minus_sign:                                                                                                           | An array of instructions for the stage. Each object in the array uses the semantic patch format for updating a feature flag. | {"instructions": [{ "kind": "turnFlagOn"}]}                                                                                  |