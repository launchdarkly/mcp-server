# MetricPostSuccessCriteria

Success criteria. Required for custom and trace numeric metrics, optional for custom and trace conversion metrics.

## Example Usage

```typescript
import { MetricPostSuccessCriteria } from "@launchdarkly/mcp-server/models/components";

let value: MetricPostSuccessCriteria = "HigherThanBaseline";
```

## Values

```typescript
"HigherThanBaseline" | "LowerThanBaseline"
```