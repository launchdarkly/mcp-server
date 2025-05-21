# RecentTriggerBody

## Example Usage

```typescript
import { RecentTriggerBody } from "@launchdarkly/mcp-server";

let value: RecentTriggerBody = {};
```

## Fields

| Field                                                                                                                                                                 | Type                                                                                                                                                                  | Required                                                                                                                                                              | Description                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `timestamp`                                                                                                                                                           | *number*                                                                                                                                                              | :heavy_minus_sign:                                                                                                                                                    | N/A                                                                                                                                                                   |
| `jsonBody`                                                                                                                                                            | Record<string, *any*>                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                    | The marshalled JSON request body for the incoming trigger webhook. If this is empty or contains invalid JSON, the timestamp is recorded but this field will be empty. |