# ExperimentCollectionRep

## Example Usage

```typescript
import { ExperimentCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentCollectionRep = {
  items: [],
};
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `items`                                                                                               | [components.Experiment](../../models/components/experiment.md)[]                                      | :heavy_check_mark:                                                                                    | An array of experiments                                                                               |
| `totalCount`                                                                                          | *number*                                                                                              | :heavy_minus_sign:                                                                                    | The total number of experiments in this project and environment. Does not include legacy experiments. |
| `links`                                                                                               | Record<string, [components.Link](../../models/components/link.md)>                                    | :heavy_minus_sign:                                                                                    | The location and content type of related resources                                                    |