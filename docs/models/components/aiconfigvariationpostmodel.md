# AIConfigVariationPostModel

Freeform JSON object. LaunchDarkly does not validate the keys. In a model config, `params` and `customParams` hold parameters that the provider's API accepts, for example `{"temperature": 0.7, "maxTokens": 4096}`.

## Example Usage

```typescript
import { AIConfigVariationPostModel } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationPostModel = {};
```

## Fields

| Field       | Type        | Required    | Description |
| ----------- | ----------- | ----------- | ----------- |