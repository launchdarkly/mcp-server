# Op

The operator to apply to the given attribute

## Example Usage

```typescript
import { Op } from "@launchdarkly/mcp-server/models/components";

let value: Op = "semVerLessThan";
```

## Values

```typescript
"in" | "endsWith" | "startsWith" | "matches" | "contains" | "lessThan" | "lessThanOrEqual" | "greaterThan" | "greaterThanOrEqual" | "before" | "after" | "segmentMatch" | "semVerEqual" | "semVerLessThan" | "semVerGreaterThan"
```