# BranchCollectionRep

## Example Usage

```typescript
import { BranchCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: BranchCollectionRep = {
  links: {
    "key": {},
  },
  items: [
    {
      name: "main",
      head: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
      updateSequenceId: 25,
      syncTime: 54138,
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
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `links`                                                            | Record<string, [components.Link](../../models/components/link.md)> | :heavy_check_mark:                                                 | The location and content type of related resources                 |
| `items`                                                            | [components.BranchRep](../../models/components/branchrep.md)[]     | :heavy_check_mark:                                                 | An array of branches                                               |