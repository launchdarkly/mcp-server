# CreateReleaseForFlagRequest

## Example Usage

```typescript
import { CreateReleaseForFlagRequest } from "@launchdarkly/mcp-server/models/operations";

let value: CreateReleaseForFlagRequest = {
  projectKey: "<value>",
  flagKey: "<value>",
  createReleaseInput: {
    releasePipelineKey: "<value>",
  },
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `projectKey`                                                                   | *string*                                                                       | :heavy_check_mark:                                                             | The project key                                                                |
| `flagKey`                                                                      | *string*                                                                       | :heavy_check_mark:                                                             | The flag key                                                                   |
| `createReleaseInput`                                                           | [components.CreateReleaseInput](../../models/components/createreleaseinput.md) | :heavy_check_mark:                                                             | N/A                                                                            |