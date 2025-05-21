# UpsertFlagDefaultsPayload

## Example Usage

```typescript
import { UpsertFlagDefaultsPayload } from "@launchdarkly/mcp-server";

let value: UpsertFlagDefaultsPayload = {
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
  defaultClientSideAvailability: {
    usingMobileKey: true,
    usingEnvironmentId: true,
  },
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `tags`                                                                             | *string*[]                                                                         | :heavy_check_mark:                                                                 | A list of default tags for each flag                                               | [<br/>"tag-1",<br/>"tag-2"<br/>]                                                   |
| `temporary`                                                                        | *boolean*                                                                          | :heavy_check_mark:                                                                 | Whether the flag should be temporary by default                                    | true                                                                               |
| `booleanDefaults`                                                                  | [models.BooleanFlagDefaults](../models/booleanflagdefaults.md)                     | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |
| `defaultClientSideAvailability`                                                    | [models.DefaultClientSideAvailability](../models/defaultclientsideavailability.md) | :heavy_check_mark:                                                                 | N/A                                                                                |                                                                                    |