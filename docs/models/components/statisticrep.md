# StatisticRep

## Example Usage

```typescript
import { StatisticRep } from "@launchdarkly/mcp-server/models/components";

let value: StatisticRep = {
  name: "LaunchDarkly-Docs",
  type: "github",
  sourceLink: "https://github.com/launchdarkly/LaunchDarkly-Docs",
  defaultBranch: "main",
  enabled: true,
  version: 3,
  hunkCount: 442114,
  fileCount: 566528,
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                           | Type                                                                            | Required                                                                        | Description                                                                     | Example                                                                         |
| ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `name`                                                                          | *string*                                                                        | :heavy_check_mark:                                                              | The repository name                                                             | LaunchDarkly-Docs                                                               |
| `type`                                                                          | [components.StatisticRepType](../../models/components/statisticreptype.md)      | :heavy_check_mark:                                                              | The type of repository                                                          | github                                                                          |
| `sourceLink`                                                                    | *string*                                                                        | :heavy_check_mark:                                                              | A URL to access the repository                                                  | https://github.com/launchdarkly/LaunchDarkly-Docs                               |
| `defaultBranch`                                                                 | *string*                                                                        | :heavy_check_mark:                                                              | The repository's default branch                                                 | main                                                                            |
| `enabled`                                                                       | *boolean*                                                                       | :heavy_check_mark:                                                              | Whether or not a repository is enabled for code reference scanning              | true                                                                            |
| `version`                                                                       | *number*                                                                        | :heavy_check_mark:                                                              | The version of the repository's saved information                               | 3                                                                               |
| `hunkCount`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | The number of code reference hunks in which the flag appears in this repository |                                                                                 |
| `fileCount`                                                                     | *number*                                                                        | :heavy_check_mark:                                                              | The number of files in which the flag appears in this repository                |                                                                                 |
| `links`                                                                         | Record<string, [components.Link](../../models/components/link.md)>              | :heavy_check_mark:                                                              | The location and content type of related resources                              |                                                                                 |
| `latestCommitTime`                                                              | *number*                                                                        | :heavy_minus_sign:                                                              | N/A                                                                             |                                                                                 |