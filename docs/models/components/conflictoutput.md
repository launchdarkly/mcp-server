# ConflictOutput

## Example Usage

```typescript
import { ConflictOutput } from "@launchdarkly/mcp-server/models/components";

let value: ConflictOutput = {
  stageId: "12ab3c4d5ef1a2345bcde67f",
  message: "<value>",
};
```

## Fields

| Field                      | Type                       | Required                   | Description                | Example                    |
| -------------------------- | -------------------------- | -------------------------- | -------------------------- | -------------------------- |
| `stageId`                  | *string*                   | :heavy_check_mark:         | The stage ID               | 12ab3c4d5ef1a2345bcde67f   |
| `message`                  | *string*                   | :heavy_check_mark:         | Message about the conflict |                            |