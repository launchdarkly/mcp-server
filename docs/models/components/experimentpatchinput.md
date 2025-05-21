# ExperimentPatchInput

## Example Usage

```typescript
import { ExperimentPatchInput } from "@launchdarkly/mcp-server/models/components";

let value: ExperimentPatchInput = {
  comment: "Optional comment",
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
| `comment`                              | *string*                               | :heavy_minus_sign:                     | Optional comment describing the update | Optional comment                       |
| `instructions`                         | Record<string, *any*>[]                | :heavy_check_mark:                     | N/A                                    |                                        |