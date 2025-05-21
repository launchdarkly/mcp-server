# MaintainerTeam

## Example Usage

```typescript
import { MaintainerTeam } from "@launchdarkly/mcp-server";

let value: MaintainerTeam = {
  key: "team-key-123abc",
  name: "Example team",
  links: {
    "parent": {
      href: "/api/v2/teams",
      type: "application/json",
    },
    "roles": {
      href: "/api/v2/teams/example-team/roles",
      type: "application/json",
    },
    "self": {
      href: "/api/v2/teams/example-team",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                    | Type                                                                                                                                                                                                                                     | Required                                                                                                                                                                                                                                 | Description                                                                                                                                                                                                                              | Example                                                                                                                                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`                                                                                                                                                                                                                                    | *string*                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                       | The key of the maintainer team                                                                                                                                                                                                           | team-key-123abc                                                                                                                                                                                                                          |
| `name`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                       | A human-friendly name for the maintainer team                                                                                                                                                                                            | Example team                                                                                                                                                                                                                             |
| `links`                                                                                                                                                                                                                                  | Record<string, [models.Link](../models/link.md)>                                                                                                                                                                                         | :heavy_minus_sign:                                                                                                                                                                                                                       | The location and content type of related resources                                                                                                                                                                                       | {<br/>"parent": {<br/>"href": "/api/v2/teams",<br/>"type": "application/json"<br/>},<br/>"roles": {<br/>"href": "/api/v2/teams/example-team/roles",<br/>"type": "application/json"<br/>},<br/>"self": {<br/>"href": "/api/v2/teams/example-team",<br/>"type": "application/json"<br/>}<br/>} |