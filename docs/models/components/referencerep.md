# ReferenceRep

## Example Usage

```typescript
import { ReferenceRep } from "@launchdarkly/mcp-server/models/components";

let value: ReferenceRep = {
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
};
```

## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `path`                                                     | *string*                                                   | :heavy_check_mark:                                         | File path of the reference                                 | /main/index.js                                             |
| `hint`                                                     | *string*                                                   | :heavy_minus_sign:                                         | Programming language used in the file                      | javascript                                                 |
| `hunks`                                                    | [components.HunkRep](../../models/components/hunkrep.md)[] | :heavy_check_mark:                                         | N/A                                                        |                                                            |