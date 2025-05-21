# PutBranchRequest

## Example Usage

```typescript
import { PutBranchRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutBranchRequest = {
  repo: "<value>",
  branch: "<value>",
  putBranch: {
    name: "main",
    head: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
    updateSequenceId: 25,
    syncTime: 386213,
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
  },
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `repo`                                                       | *string*                                                     | :heavy_check_mark:                                           | The repository name                                          |
| `branch`                                                     | *string*                                                     | :heavy_check_mark:                                           | The URL-encoded branch name                                  |
| `putBranch`                                                  | [components.PutBranch](../../models/components/putbranch.md) | :heavy_check_mark:                                           | N/A                                                          |