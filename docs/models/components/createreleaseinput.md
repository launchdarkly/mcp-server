# CreateReleaseInput

## Example Usage

```typescript
import { CreateReleaseInput } from "@launchdarkly/mcp-server/models/components";

let value: CreateReleaseInput = {
  releasePipelineKey: "<value>",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `releaseVariationId`                                  | *string*                                              | :heavy_minus_sign:                                    | The variation id to release to across all phases      |
| `releasePipelineKey`                                  | *string*                                              | :heavy_check_mark:                                    | The key of the release pipeline to attach the flag to |