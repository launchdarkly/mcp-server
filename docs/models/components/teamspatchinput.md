# TeamsPatchInput

## Example Usage

```typescript
import { TeamsPatchInput } from "@launchdarkly/mcp-server/models/components";

let value: TeamsPatchInput = {
  comment: "Optional comment about the update",
  instructions: [
    {
      "key": "<value>",
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `comment`                              | *string*                               | :heavy_minus_sign:                     | Optional comment describing the update | Optional comment about the update      |
| `instructions`                         | Record<string, *any*>[]                | :heavy_check_mark:                     | N/A                                    |                                        |