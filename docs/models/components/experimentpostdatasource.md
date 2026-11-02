# ExperimentPostDataSource

The source of metric data in order to analyze results. Defaults to "launchdarkly" when not provided.

## Example Usage

```typescript
import { ExperimentPostDataSource } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentPostDataSource = "snowflake";
```

## Values

```typescript
"launchdarkly" | "snowflake"
```