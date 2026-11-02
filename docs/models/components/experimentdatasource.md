# ExperimentDataSource

The source of metric data in order to analyze results. Defaults to "launchdarkly" when not provided.

## Example Usage

```typescript
import { ExperimentDataSource } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentDataSource = "snowflake";
```

## Values

```typescript
"launchdarkly" | "snowflake"
```