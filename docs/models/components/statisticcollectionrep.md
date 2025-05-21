# StatisticCollectionRep

## Example Usage

```typescript
import { StatisticCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: StatisticCollectionRep = {
  flags: {
    "key": [
      {
        name: "LaunchDarkly-Docs",
        type: "github",
        sourceLink: "https://github.com/launchdarkly/LaunchDarkly-Docs",
        defaultBranch: "main",
        enabled: true,
        version: 3,
        hunkCount: 263704,
        fileCount: 378497,
        links: {
          "key": {},
        },
      },
    ],
  },
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `flags`                                                                                                          | Record<string, [components.StatisticRep](../../models/components/statisticrep.md)[]>                             | :heavy_check_mark:                                                                                               | A map of flag keys to a list of code reference statistics for each code repository in which the flag key appears |
| `links`                                                                                                          | Record<string, [components.Link](../../models/components/link.md)>                                               | :heavy_check_mark:                                                                                               | The location and content type of related resources                                                               |