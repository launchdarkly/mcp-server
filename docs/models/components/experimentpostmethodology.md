# ExperimentPostMethodology

The results analysis approach. Defaults to "frequentist" when not provided, or "bayesian" for multi-armed bandit experiments.

## Example Usage

```typescript
import { ExperimentPostMethodology } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentPostMethodology = "frequentist";
```

## Values

```typescript
"bayesian" | "frequentist" | "export_only"
```