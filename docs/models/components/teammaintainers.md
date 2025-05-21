# TeamMaintainers

## Example Usage

```typescript
import { TeamMaintainers } from "@launchdarkly/mcp-server/models/components";

let value: TeamMaintainers = {
  totalCount: 1,
  items: [
    {
      links: {
        "self": {
          href: "/api/v2/members/569f183514f4432160000007",
          type: "application/json",
        },
      },
      id: "569f183514f4432160000007",
      firstName: "Ariel",
      lastName: "Flores",
      role: "reader",
      email: "ariel@acme.com",
    },
  ],
  links: {
    "self": {
      href: "/api/v2/teams/example-team/maintainers?limit=5",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                                                                                                                                        | Type                                                                                                                                                                                                                                         | Required                                                                                                                                                                                                                                     | Description                                                                                                                                                                                                                                  | Example                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                                                                                                                                                                 | *number*                                                                                                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                                                                                                           | The number of maintainers of the team                                                                                                                                                                                                        | 1                                                                                                                                                                                                                                            |
| `items`                                                                                                                                                                                                                                      | [components.MemberSummary](../../models/components/membersummary.md)[]                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                                                                           | Details on the members that have been assigned as maintainers of the team                                                                                                                                                                    | [<br/>{<br/>"_id": "569f183514f4432160000007",<br/>"_links": {<br/>"self": {<br/>"href": "/api/v2/members/569f183514f4432160000007",<br/>"type": "application/json"<br/>}<br/>},<br/>"email": "ariel@acme.com",<br/>"firstName": "Ariel",<br/>"lastName": "Flores",<br/>"role": "reader"<br/>}<br/>] |
| `links`                                                                                                                                                                                                                                      | Record<string, [components.Link](../../models/components/link.md)>                                                                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                                                                           | The location and content type of related resources                                                                                                                                                                                           | {<br/>"self": {<br/>"href": "/api/v2/teams/example-team/maintainers?limit=5",<br/>"type": "application/json"<br/>}<br/>}                                                                                                                     |