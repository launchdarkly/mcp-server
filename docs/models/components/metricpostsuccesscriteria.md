# MetricPostSuccessCriteria

Success criteria. Required for custom numeric metrics, optional for custom conversion metrics.

## Example Usage

```typescript
import { MetricPostSuccessCriteria } from "@launchdarkly/mcp-server/models/components";

let value: MetricPostSuccessCriteria = "HigherThanBaseline";
```

## Values

```typescript
"HigherThanBaseline" | "LowerThanBaseline"
```