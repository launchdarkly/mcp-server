# DependentFlagsByEnvironment

## Example Usage

```typescript
import { DependentFlagsByEnvironment } from "@launchdarkly/mcp-server";

let value: DependentFlagsByEnvironment = {
  items: [
    {
      name: "Example dependent flag",
      key: "dependent-flag-key-123abc",
      links: {
        "key": {},
      },
      site: {},
    },
  ],
  links: {
    "key": {},
  },
  site: {},
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `items`                                                                                  | [models.DependentFlag](../models/dependentflag.md)[]                                     | :heavy_check_mark:                                                                       | A list of dependent flags, which are flags that use the requested flag as a prerequisite |
| `links`                                                                                  | Record<string, [models.Link](../models/link.md)>                                         | :heavy_check_mark:                                                                       | The location and content type of related resources                                       |
| `site`                                                                                   | [models.Link](../models/link.md)                                                         | :heavy_check_mark:                                                                       | N/A                                                                                      |