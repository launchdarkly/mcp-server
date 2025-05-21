# FlagDefaultsRep

## Example Usage

```typescript
import { FlagDefaultsRep } from "@launchdarkly/mcp-server";

let value: FlagDefaultsRep = {
  tags: [
    "tag-1",
    "tag-2",
  ],
  temporary: true,
  booleanDefaults: {
    trueDisplayName: "True",
    falseDisplayName: "False",
    trueDescription: "serve true",
    falseDescription: "serve false",
    onVariation: 0,
    offVariation: 1,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `links`                                                              | Record<string, [models.Link](../models/link.md)>                     | :heavy_minus_sign:                                                   | The location and content type of related resources                   |                                                                      |
| `key`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | A unique key for the flag default                                    |                                                                      |
| `tags`                                                               | *string*[]                                                           | :heavy_minus_sign:                                                   | A list of default tags for each flag                                 | [<br/>"tag-1",<br/>"tag-2"<br/>]                                     |
| `temporary`                                                          | *boolean*                                                            | :heavy_minus_sign:                                                   | Whether the flag should be temporary by default                      | true                                                                 |
| `defaultClientSideAvailability`                                      | [models.ClientSideAvailability](../models/clientsideavailability.md) | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |
| `booleanDefaults`                                                    | [models.BooleanDefaults](../models/booleandefaults.md)               | :heavy_minus_sign:                                                   | N/A                                                                  |                                                                      |