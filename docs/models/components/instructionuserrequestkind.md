# InstructionUserRequestKind

The type of change to make to the removal date for this user from individual targeting for this flag.

## Example Usage

```typescript
import { InstructionUserRequestKind } from "@launchdarkly/mcp-server/models/components";

let value: InstructionUserRequestKind = "addExpireUserTargetDate";
```

## Values

```typescript
"addExpireUserTargetDate" | "updateExpireUserTargetDate" | "removeExpireUserTargetDate"
```