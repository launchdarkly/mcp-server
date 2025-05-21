# TeamImportsRep

## Example Usage

```typescript
import { TeamImportsRep } from "@launchdarkly/mcp-server";

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

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [models.MemberImportItem](../models/memberimportitem.md)[]               | :heavy_minus_sign:                                                       | An array of details about the members requested to be added to this team |