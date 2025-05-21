# FlagReferenceRep

## Example Usage

```typescript
import { FlagReferenceRep } from "@launchdarkly/mcp-server/models/components";

let value: FlagReferenceRep = {
  projectKey: "default",
  flagKey: "enable-new-payment-structure",
  referencesAdded: 2,
  referencesRemoved: 5,
};
```

## Fields

| Field                            | Type                             | Required                         | Description                      | Example                          |
| -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- | -------------------------------- |
| `projectKey`                     | *string*                         | :heavy_check_mark:               | The project key                  | default                          |
| `flagKey`                        | *string*                         | :heavy_check_mark:               | The flag key                     | enable-new-payment-structure     |
| `referencesAdded`                | *number*                         | :heavy_check_mark:               | The number of references added   | 2                                |
| `referencesRemoved`              | *number*                         | :heavy_check_mark:               | The number of references removed | 5                                |