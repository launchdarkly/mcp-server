# StatisticCollectionRep

## Example Usage

```typescript
import { StatisticCollectionRep } from "@launchdarkly/mcp-server";

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
| `flags`                                                                                                          | Record<string, [models.StatisticRep](../models/statisticrep.md)[]>                                               | :heavy_check_mark:                                                                                               | A map of flag keys to a list of code reference statistics for each code repository in which the flag key appears |
| `links`                                                                                                          | Record<string, [models.Link](../models/link.md)>                                                                 | :heavy_check_mark:                                                                                               | The location and content type of related resources                                                               |