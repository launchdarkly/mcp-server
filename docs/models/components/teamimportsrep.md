# TeamImportsRep

## Example Usage

```typescript
import { TeamImportsRep } from "@launchdarkly/mcp-server/models/components";

let value: TeamImportsRep = {
  items: [
    {
      status: "error",
      value: "new-team-member@acme.com",
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `items`                                                                      | [components.MemberImportItem](../../models/components/memberimportitem.md)[] | :heavy_minus_sign:                                                           | An array of details about the members requested to be added to this team     |