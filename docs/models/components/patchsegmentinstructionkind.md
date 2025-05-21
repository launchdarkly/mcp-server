# PatchSegmentInstructionKind

The type of change to make to the user's removal date from this segment

## Example Usage

```typescript
import { PatchSegmentInstructionKind } from "@launchdarkly/mcp-server/models/components";

let value: PatchSegmentInstructionKind = "addExpireUserTargetDate";
```

## Values

```typescript
"addExpireUserTargetDate" | "updateExpireUserTargetDate" | "removeExpireUserTargetDate"
```