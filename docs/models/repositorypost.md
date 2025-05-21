# RepositoryPost

## Example Usage

```typescript
import { RepositoryPost } from "@launchdarkly/mcp-server";

let value: RepositoryPost = {
  name: "LaunchDarkly-Docs",
  sourceLink: "https://github.com/launchdarkly/LaunchDarkly-Docs",
  commitUrlTemplate:
    "https://github.com/launchdarkly/LaunchDarkly-Docs/commit/${sha}",
  hunkUrlTemplate:
    "https://github.com/launchdarkly/LaunchDarkly-Docs/blob/${sha}/${filePath}#L${lineNumber}",
  type: "github",
  defaultBranch: "main",
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `name`                                                                                     | *string*                                                                                   | :heavy_check_mark:                                                                         | The repository name                                                                        | LaunchDarkly-Docs                                                                          |
| `sourceLink`                                                                               | *string*                                                                                   | :heavy_minus_sign:                                                                         | A URL to access the repository                                                             | https://github.com/launchdarkly/LaunchDarkly-Docs                                          |
| `commitUrlTemplate`                                                                        | *string*                                                                                   | :heavy_minus_sign:                                                                         | A template for constructing a valid URL to view the commit                                 | https://github.com/launchdarkly/LaunchDarkly-Docs/commit/${sha}                            |
| `hunkUrlTemplate`                                                                          | *string*                                                                                   | :heavy_minus_sign:                                                                         | A template for constructing a valid URL to view the hunk                                   | https://github.com/launchdarkly/LaunchDarkly-Docs/blob/${sha}/${filePath}#L${lineNumber}   |
| `type`                                                                                     | [models.RepositoryPostType](../models/repositoryposttype.md)                               | :heavy_minus_sign:                                                                         | The type of repository. If not specified, the default value is <code>custom</code>.        | github                                                                                     |
| `defaultBranch`                                                                            | *string*                                                                                   | :heavy_minus_sign:                                                                         | The repository's default branch. If not specified, the default value is <code>main</code>. | main                                                                                       |