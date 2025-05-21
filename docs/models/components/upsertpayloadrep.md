# UpsertPayloadRep

## Example Usage

```typescript
import { UpsertPayloadRep } from "@launchdarkly/mcp-server/models/components";

let value: UpsertPayloadRep = {
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

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `links`                                                                                              | Record<string, [components.Link](../../models/components/link.md)>                                   | :heavy_minus_sign:                                                                                   | The location and content type of related resources                                                   |                                                                                                      |
| `tags`                                                                                               | *string*[]                                                                                           | :heavy_check_mark:                                                                                   | A list of default tags for each flag                                                                 | [<br/>"tag-1",<br/>"tag-2"<br/>]                                                                     |
| `temporary`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the flag should be temporary by default                                                      | true                                                                                                 |
| `booleanDefaults`                                                                                    | [components.BooleanFlagDefaults](../../models/components/booleanflagdefaults.md)                     | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |
| `defaultClientSideAvailability`                                                                      | [components.DefaultClientSideAvailability](../../models/components/defaultclientsideavailability.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |                                                                                                      |