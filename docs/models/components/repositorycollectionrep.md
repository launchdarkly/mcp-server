# RepositoryCollectionRep

## Example Usage

```typescript
import { RepositoryCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: RepositoryCollectionRep = {
  links: {},
  items: [
    {
      name: "LaunchDarkly-Docs",
      sourceLink: "https://github.com/launchdarkly/LaunchDarkly-Docs",
      commitUrlTemplate:
        "https://github.com/launchdarkly/LaunchDarkly-Docs/commit/${sha}",
      hunkUrlTemplate:
        "https://github.com/launchdarkly/LaunchDarkly-Docs/blob/${sha}/${filePath}#L${lineNumber}",
      type: "github",
      defaultBranch: "main",
      enabled: true,
      version: 3,
      branches: [
        {
          name: "main",
          head: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
          updateSequenceId: 25,
          syncTime: 342640,
          references: [
            {
              path: "/main/index.js",
              hint: "javascript",
              hunks: [],
            },
          ],
          links: {
            "key": "<value>",
          },
        },
      ],
      links: {
        "key": "<value>",
        "key1": "<value>",
      },
      access: {
        denied: [],
        allowed: [],
      },
    },
  ],
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `links`                                                                | Record<string, [components.Link](../../models/components/link.md)>     | :heavy_check_mark:                                                     | N/A                                                                    |
| `items`                                                                | [components.RepositoryRep](../../models/components/repositoryrep.md)[] | :heavy_check_mark:                                                     | An array of repositories                                               |