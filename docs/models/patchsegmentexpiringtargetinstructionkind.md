# PatchSegmentExpiringTargetInstructionKind

The type of change to make to the context's removal date from this segment

## Example Usage

```typescript
import { PatchSegmentExpiringTargetInstructionKind } from "@launchdarkly/mcp-server";

let value: PatchSegmentExpiringTargetInstructionKind = "addExpiringTarget";
```

## Values

```typescript
"addExpiringTarget" | "updateExpiringTarget" | "removeExpiringTarget"
```