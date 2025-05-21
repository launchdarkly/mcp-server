# InsightsChartBounds

## Example Usage

```typescript
import { InsightsChartBounds } from "@launchdarkly/mcp-server";

let value: InsightsChartBounds = {
  name: "equal",
  value: 100,
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *string*           | :heavy_check_mark: | Name of the bound  | equal              |
| `value`            | *number*           | :heavy_check_mark: | Value of the bound | 100                |