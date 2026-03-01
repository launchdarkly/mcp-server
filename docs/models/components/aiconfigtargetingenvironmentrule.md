# AIConfigTargetingEnvironmentRule

## Example Usage

```typescript
import { AIConfigTargetingEnvironmentRule } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironmentRule = {
  clauses: [
    {
      attribute: "attribute",
      id: "id",
      negate: true,
      op: "op",
      values: [
        "",
        "",
      ],
    },
    {
      attribute: "attribute",
      id: "id",
      negate: true,
      op: "op",
      values: [
        "",
        "",
      ],
    },
  ],
  trackEvents: true,
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `clauses`                                                                                                                | [components.AIConfigTargetingEnvironmentRuleClause](../../models/components/aiconfigtargetingenvironmentruleclause.md)[] | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |
| `trackEvents`                                                                                                            | *boolean*                                                                                                                | :heavy_check_mark:                                                                                                       | N/A                                                                                                                      |