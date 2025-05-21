# TargetResourceRep

## Example Usage

```typescript
import { TargetResourceRep } from "@launchdarkly/mcp-server";

let value: TargetResourceRep = {
  name: "Example flag name",
  resources: [
    "proj/example-project:env/production:flag/example-flag",
  ],
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `links`                                                     | Record<string, [models.Link](../models/link.md)>            | :heavy_minus_sign:                                          | N/A                                                         |                                                             |
| `name`                                                      | *string*                                                    | :heavy_minus_sign:                                          | The name of the resource                                    | Example flag name                                           |
| `resources`                                                 | *string*[]                                                  | :heavy_minus_sign:                                          | The resource specifier                                      | [<br/>"proj/example-project:env/production:flag/example-flag"<br/>] |