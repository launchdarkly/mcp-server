# FlagTriggerInput

## Example Usage

```typescript
import { FlagTriggerInput } from "@launchdarkly/mcp-server";

let value: FlagTriggerInput = {
  comment: "optional comment",
  instructions: [
    {
      "kind": "disableTrigger",
    },
  ],
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `comment`                                                                                                                               | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Optional comment describing the update                                                                                                  | optional comment                                                                                                                        |
| `instructions`                                                                                                                          | Record<string, *any*>[]                                                                                                                 | :heavy_minus_sign:                                                                                                                      | The instructions to perform when updating. This should be an array with objects that look like <code>{"kind": "trigger_action"}</code>. | [<br/>{<br/>"kind": "disableTrigger"<br/>}<br/>]                                                                                        |