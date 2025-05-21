# StatisticsRoot

## Example Usage

```typescript
import { StatisticsRoot } from "@launchdarkly/mcp-server/models/components";

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
| `projects`                                                                                                | [components.Link](../../models/components/link.md)[]                                                      | :heavy_minus_sign:                                                                                        | The location and content type of all projects that have code references                                   | [<br/>{<br/>"href": "/api/v2/code-refs/statistics/example-project-with-code-refs",<br/>"type": "application/json"<br/>}<br/>] |
| `self`                                                                                                    | [components.Link](../../models/components/link.md)                                                        | :heavy_minus_sign:                                                                                        | N/A                                                                                                       |                                                                                                           |