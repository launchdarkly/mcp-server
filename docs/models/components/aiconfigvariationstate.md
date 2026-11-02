# AIConfigVariationState

The state of the variation.
- `archived`: The variation is archived. To restore it, update the variation with `state` set to `published`.
- `published`: The variation is active.


## Example Usage

```typescript
import { AIConfigVariationState } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationState = "published";
```

## Values

```typescript
"archived" | "published"
```