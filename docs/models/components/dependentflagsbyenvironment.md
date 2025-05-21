# DependentFlagsByEnvironment

## Example Usage

```typescript
import { DependentFlagsByEnvironment } from "@launchdarkly/mcp-server/models/components";

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
| `items`                                                                                  | [components.DependentFlag](../../models/components/dependentflag.md)[]                   | :heavy_check_mark:                                                                       | A list of dependent flags, which are flags that use the requested flag as a prerequisite |
| `links`                                                                                  | Record<string, [components.Link](../../models/components/link.md)>                       | :heavy_check_mark:                                                                       | The location and content type of related resources                                       |
| `site`                                                                                   | [components.Link](../../models/components/link.md)                                       | :heavy_check_mark:                                                                       | N/A                                                                                      |