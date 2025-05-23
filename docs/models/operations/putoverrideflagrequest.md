# PutOverrideFlagRequest

## Example Usage

```typescript
import { PutOverrideFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutOverrideFlagRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
  flagValue: 7097.49,
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `projectKey`                                                                      | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `flagKey`                                                                         | *string*                                                                          | :heavy_check_mark:                                                                | N/A                                                                               |
| `flagValue`                                                                       | *components.FlagValueUnion*                                                       | :heavy_check_mark:                                                                | flag value to override flag with. The json representation of the variation value. |