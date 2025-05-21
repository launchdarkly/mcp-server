# EnvironmentSummary

## Example Usage

```typescript
import { EnvironmentSummary } from "@launchdarkly/mcp-server/models/components";

let value: EnvironmentSummary = {
  links: {
    "self": {
      href: "/api/v2/projects/my-project/environments/my-environment",
      type: "application/json",
    },
  },
  key: "environment-key-123abc",
  name: "My Environment",
  color: "F5A623",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                       | Record<string, [components.Link](../../models/components/link.md)>                                            | :heavy_check_mark:                                                                                            | The location and content type of related resources                                                            | {<br/>"self": {<br/>"href": "/api/v2/projects/my-project/environments/my-environment",<br/>"type": "application/json"<br/>}<br/>} |
| `key`                                                                                                         | *string*                                                                                                      | :heavy_check_mark:                                                                                            | A project-unique key for the environment                                                                      | environment-key-123abc                                                                                        |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | A human-friendly name for the environment                                                                     | My Environment                                                                                                |
| `color`                                                                                                       | *string*                                                                                                      | :heavy_check_mark:                                                                                            | The color used to indicate this environment in the UI                                                         | F5A623                                                                                                        |