# AIConfigVariationPatchState

The state to move the variation to. Omit this field to keep the current state.
- `archived`: Archive a published variation. You cannot archive a variation that is already archived. You also cannot archive the only variation of an AI Config. An AI Config itself cannot be archived.
- `published`: Restore an archived variation. You cannot publish a variation that is already published.


## Example Usage

```typescript
import { AIConfigVariationPatchState } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigVariationPatchState = "archived";
```

## Values

```typescript
"archived" | "published"
```