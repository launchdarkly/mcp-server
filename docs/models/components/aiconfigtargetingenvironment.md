# AIConfigTargetingEnvironment

## Example Usage

```typescript
import { AIConfigTargetingEnvironment } from "@launchdarkly/mcp-server/models/components";

let value: AIConfigTargetingEnvironment = {
  contextTargets: [
    {
      contextKind: "contextKind",
      values: [
        "values",
        "values",
      ],
      variation: 5,
    },
    {
      contextKind: "contextKind",
      values: [
        "values",
        "values",
      ],
      variation: 5,
    },
  ],
  enabled: true,
  fallthrough: {
    variation: 5,
    rollout: {
      bucketBy: "bucketBy",
      contextKind: "contextKind",
      experimentAllocation: {
        canReshuffle: true,
        defaultVariation: 2,
        type: "type",
      },
      seed: 7,
      variations: [
        {
          untracked: true,
          variation: 9,
          weight: 3,
        },
        {
          untracked: true,
          variation: 9,
          weight: 3,
        },
      ],
    },
  },
  lastModified: 2,
  offVariation: 4,
  rules: [
    {
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
    },
    {
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
    },
  ],
  targets: [
    {
      contextKind: "contextKind",
      values: [
        "values",
        "values",
      ],
      variation: 5,
    },
    {
      contextKind: "contextKind",
      values: [
        "values",
        "values",
      ],
      variation: 5,
    },
  ],
  trackEvents: true,
  trackEventsFallthrough: true,
  environmentName: "_environmentName",
  version: 7,
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                                                                                                                    | Required                                                                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                                                                                                                                             | Example                                                                                                                                                                                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contextTargets`                                                                                                                                                                                                                                                                                                        | [components.AIConfigTargetingEnvironmentTarget](../../models/components/aiconfigtargetingenvironmenttarget.md)[]                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `enabled`                                                                                                                                                                                                                                                                                                               | *boolean*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `fallthrough`                                                                                                                                                                                                                                                                                                           | [components.AIConfigTargetingEnvironmentFallthrough](../../models/components/aiconfigtargetingenvironmentfallthrough.md)                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     | {<br/>"rollout": {<br/>"experimentAllocation": {<br/>"defaultVariation": 2,<br/>"canReshuffle": true,<br/>"type": "type"<br/>},<br/>"seed": 7,<br/>"variations": [<br/>{<br/>"weight": 3,<br/>"_untracked": true,<br/>"variation": 9<br/>},<br/>{<br/>"weight": 3,<br/>"_untracked": true,<br/>"variation": 9<br/>}<br/>],<br/>"contextKind": "contextKind",<br/>"bucketBy": "bucketBy"<br/>},<br/>"variation": 5<br/>} |
| `lastModified`                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `offVariation`                                                                                                                                                                                                                                                                                                          | *number*                                                                                                                                                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `rules`                                                                                                                                                                                                                                                                                                                 | [components.AIConfigTargetingEnvironmentRule](../../models/components/aiconfigtargetingenvironmentrule.md)[]                                                                                                                                                                                                            | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `targets`                                                                                                                                                                                                                                                                                                               | [components.AIConfigTargetingEnvironmentTarget](../../models/components/aiconfigtargetingenvironmenttarget.md)[]                                                                                                                                                                                                        | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `trackEvents`                                                                                                                                                                                                                                                                                                           | *boolean*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `trackEventsFallthrough`                                                                                                                                                                                                                                                                                                | *boolean*                                                                                                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `environmentName`                                                                                                                                                                                                                                                                                                       | *string*                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |
| `version`                                                                                                                                                                                                                                                                                                               | *number*                                                                                                                                                                                                                                                                                                                | :heavy_check_mark:                                                                                                                                                                                                                                                                                                      | N/A                                                                                                                                                                                                                                                                                                                     |                                                                                                                                                                                                                                                                                                                         |