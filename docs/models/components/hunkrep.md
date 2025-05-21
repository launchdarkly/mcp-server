# HunkRep

## Example Usage

```typescript
import { HunkRep } from "@launchdarkly/mcp-server/models/components";

let value: HunkRep = {
  startingLineNumber: 45,
  lines: "var enableFeature = 'enable-feature';",
  projKey: "default",
  flagKey: "enable-feature",
  aliases: [
    "enableFeature",
    "EnableFeature",
  ],
};
```

## Fields

| Field                                                             | Type                                                              | Required                                                          | Description                                                       | Example                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------------------------------- |
| `startingLineNumber`                                              | *number*                                                          | :heavy_check_mark:                                                | Line number of beginning of code reference hunk                   | 45                                                                |
| `lines`                                                           | *string*                                                          | :heavy_minus_sign:                                                | Contextual lines of code that include the referenced feature flag | var enableFeature = 'enable-feature';                             |
| `projKey`                                                         | *string*                                                          | :heavy_minus_sign:                                                | The project key                                                   | default                                                           |
| `flagKey`                                                         | *string*                                                          | :heavy_minus_sign:                                                | The feature flag key                                              | enable-feature                                                    |
| `aliases`                                                         | *string*[]                                                        | :heavy_minus_sign:                                                | An array of flag key aliases                                      | [<br/>"enableFeature",<br/>"EnableFeature"<br/>]                  |