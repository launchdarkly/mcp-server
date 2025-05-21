# RepositoryRep

## Example Usage

```typescript
import { RepositoryRep } from "@launchdarkly/mcp-server";

let value: RepositoryRep = {
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
      syncTime: 843483,
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `name`                                                                                   | *string*                                                                                 | :heavy_check_mark:                                                                       | The repository name                                                                      | LaunchDarkly-Docs                                                                        |
| `sourceLink`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | A URL to access the repository                                                           | https://github.com/launchdarkly/LaunchDarkly-Docs                                        |
| `commitUrlTemplate`                                                                      | *string*                                                                                 | :heavy_minus_sign:                                                                       | A template for constructing a valid URL to view the commit                               | https://github.com/launchdarkly/LaunchDarkly-Docs/commit/${sha}                          |
| `hunkUrlTemplate`                                                                        | *string*                                                                                 | :heavy_minus_sign:                                                                       | A template for constructing a valid URL to view the hunk                                 | https://github.com/launchdarkly/LaunchDarkly-Docs/blob/${sha}/${filePath}#L${lineNumber} |
| `type`                                                                                   | [models.RepositoryRepType](../models/repositoryreptype.md)                               | :heavy_check_mark:                                                                       | The type of repository                                                                   | github                                                                                   |
| `defaultBranch`                                                                          | *string*                                                                                 | :heavy_check_mark:                                                                       | The repository's default branch                                                          | main                                                                                     |
| `enabled`                                                                                | *boolean*                                                                                | :heavy_check_mark:                                                                       | Whether or not a repository is enabled for code reference scanning                       | true                                                                                     |
| `version`                                                                                | *number*                                                                                 | :heavy_check_mark:                                                                       | The version of the repository's saved information                                        | 3                                                                                        |
| `branches`                                                                               | [models.BranchRep](../models/branchrep.md)[]                                             | :heavy_minus_sign:                                                                       | An array of the repository's branches that have been scanned for code references         |                                                                                          |
| `links`                                                                                  | Record<string, *any*>                                                                    | :heavy_check_mark:                                                                       | N/A                                                                                      |                                                                                          |
| `access`                                                                                 | [models.Access](../models/access.md)                                                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |