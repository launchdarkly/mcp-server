# GetAIConfigVariationRequest

## Example Usage

```typescript
import { GetAIConfigVariationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetAIConfigVariationRequest = {
  projectKey: "default",
  configKey: "default",
  variationKey: "default",
};
```

## Fields

| Field                       | Type                        | Required                    | Description                 | Example                     |
| --------------------------- | --------------------------- | --------------------------- | --------------------------- | --------------------------- |
| `projectKey`                | *string*                    | :heavy_check_mark:          | The project key             | default                     |
| `configKey`                 | *string*                    | :heavy_check_mark:          | The AI Config key           | default                     |
| `variationKey`              | *string*                    | :heavy_check_mark:          | The AI Config variation key | default                     |