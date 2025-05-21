# MultiEnvironmentDependentFlags

## Example Usage

```typescript
import { MultiEnvironmentDependentFlags } from "@launchdarkly/mcp-server/models/components";

let value: MultiEnvironmentDependentFlags = {
  items: [
    {
      name: "Example dependent flag",
      key: "dependent-flag-key-123abc",
      environments: [
        {
          name: "Example environment",
          key: "environment-key-123abc",
          links: {
            "key": {},
          },
          site: {},
        },
      ],
    },
  ],
  links: {
    "key": {},
  },
  site: {},
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `items`                                                                                                | [components.MultiEnvironmentDependentFlag](../../models/components/multienvironmentdependentflag.md)[] | :heavy_check_mark:                                                                                     | An array of dependent flags with their environment information                                         |
| `links`                                                                                                | Record<string, [components.Link](../../models/components/link.md)>                                     | :heavy_check_mark:                                                                                     | The location and content type of related resources                                                     |
| `site`                                                                                                 | [components.Link](../../models/components/link.md)                                                     | :heavy_check_mark:                                                                                     | N/A                                                                                                    |