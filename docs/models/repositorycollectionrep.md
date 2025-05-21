# RepositoryCollectionRep

## Example Usage

```typescript
import { RepositoryCollectionRep } from "@launchdarkly/mcp-server";

let value: RepositoryCollectionRep = {
  links: {
    "key": {},
  },
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
          syncTime: 41356,
          references: [
            {
              path: "/main/index.js",
              hint: "javascript",
              hunks: [
                {
                  startingLineNumber: 45,
                  lines: "var enableFeature = 'enable-feature';",
                  projKey: "default",
                  flagKey: "enable-feature",
                  aliases: [
                    "enableFeature",
                    "EnableFeature",
                  ],
                },
              ],
            },
          ],
          links: {
            "key": "<value>",
          },
        },
      ],
      links: {
        "key": "<value>",
      },
      access: {
        denied: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
        allowed: [
          {
            action: "<value>",
            reason: {
              resources: [
                "proj/*:env/*;qa_*:/flag/*",
              ],
              actions: [
                "*",
              ],
              effect: "allow",
            },
          },
        ],
      },
    },
  ],
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `links`                                              | Record<string, [models.Link](../models/link.md)>     | :heavy_check_mark:                                   | N/A                                                  |
| `items`                                              | [models.RepositoryRep](../models/repositoryrep.md)[] | :heavy_check_mark:                                   | An array of repositories                             |