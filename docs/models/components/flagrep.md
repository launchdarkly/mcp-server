# FlagRep

## Example Usage

```typescript
import { FlagRep } from "@launchdarkly/mcp-server/models/components";

let value: FlagRep = {
  targetingRule: "fallthrough",
  targetingRuleDescription: "Customers who live in Canada",
  flagConfigVersion: 12,
  notInExperimentVariationId: "e432f62b-55f6-49dd-a02f-eb24acf39d05",
  links: {
    "self": {
      href: "/api/v2/flags/my-project/my-flag",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                  | Type                                                                                   | Required                                                                               | Description                                                                            | Example                                                                                |
| -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `targetingRule`                                                                        | *string*                                                                               | :heavy_minus_sign:                                                                     | The targeting rule                                                                     | fallthrough                                                                            |
| `targetingRuleDescription`                                                             | *string*                                                                               | :heavy_minus_sign:                                                                     | The rule description                                                                   | Customers who live in Canada                                                           |
| `targetingRuleClauses`                                                                 | *any*[]                                                                                | :heavy_minus_sign:                                                                     | An array of clauses used for individual targeting based on attributes                  |                                                                                        |
| `flagConfigVersion`                                                                    | *number*                                                                               | :heavy_minus_sign:                                                                     | The flag version                                                                       | 12                                                                                     |
| `notInExperimentVariationId`                                                           | *string*                                                                               | :heavy_minus_sign:                                                                     | The ID of the variation to route traffic not part of the experiment analysis to        | e432f62b-55f6-49dd-a02f-eb24acf39d05                                                   |
| `links`                                                                                | Record<string, [components.Link](../../models/components/link.md)>                     | :heavy_check_mark:                                                                     | The location and content type of related resources                                     | {<br/>"self": {<br/>"href": "/api/v2/flags/my-project/my-flag",<br/>"type": "application/json"<br/>}<br/>} |