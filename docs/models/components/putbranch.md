# PutBranch

## Example Usage

```typescript
import { PutBranch } from "@launchdarkly/mcp-server/models/components";

let value: PutBranch = {
  name: "main",
  head: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
  updateSequenceId: 25,
  syncTime: 572858,
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
};
```

## Fields

| Field                                                                                                                                                | Type                                                                                                                                                 | Required                                                                                                                                             | Description                                                                                                                                          | Example                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | The branch name                                                                                                                                      | main                                                                                                                                                 |
| `head`                                                                                                                                               | *string*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | An ID representing the branch HEAD. For example, a commit SHA.                                                                                       | a94a8fe5ccb19ba61c4c0873d391e987982fbbd3                                                                                                             |
| `updateSequenceId`                                                                                                                                   | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | An optional ID used to prevent older data from overwriting newer data. If no sequence ID is included, the newly submitted data will always be saved. | 25                                                                                                                                                   |
| `syncTime`                                                                                                                                           | *number*                                                                                                                                             | :heavy_check_mark:                                                                                                                                   | N/A                                                                                                                                                  |                                                                                                                                                      |
| `references`                                                                                                                                         | [components.ReferenceRep](../../models/components/referencerep.md)[]                                                                                 | :heavy_minus_sign:                                                                                                                                   | An array of flag references found on the branch                                                                                                      |                                                                                                                                                      |
| `commitTime`                                                                                                                                         | *number*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                   | N/A                                                                                                                                                  |                                                                                                                                                      |