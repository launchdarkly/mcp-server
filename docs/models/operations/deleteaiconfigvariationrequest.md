# DeleteAIConfigVariationRequest

## Example Usage

```typescript
import { DeleteAIConfigVariationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteAIConfigVariationRequest = {
  projectKey: "<value>",
  configKey: "<value>",
  variationKey: "<value>",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectKey`                | *string*                    | :heavy_check_mark:          | The project key             |
| `configKey`                 | *string*                    | :heavy_check_mark:          | The AI Config key           |
| `variationKey`              | *string*                    | :heavy_check_mark:          | The AI Config variation key |