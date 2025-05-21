# StatisticsRoot

## Example Usage

```typescript
import { StatisticsRoot } from "@launchdarkly/mcp-server";

let value: StatisticsRoot = {
  projects: [
    {
      href: "/api/v2/code-refs/statistics/example-project-with-code-refs",
      type: "application/json",
    },
  ],
};
```

## Fields

| Field                                                                                                     | Type                                                                                                      | Required                                                                                                  | Description                                                                                               | Example                                                                                                   |
| --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| `projects`                                                                                                | [models.Link](../models/link.md)[]                                                                        | :heavy_minus_sign:                                                                                        | The location and content type of all projects that have code references                                   | [<br/>{<br/>"href": "/api/v2/code-refs/statistics/example-project-with-code-refs",<br/>"type": "application/json"<br/>}<br/>] |
| `self`                                                                                                    | [models.Link](../models/link.md)                                                                          | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |