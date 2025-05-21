# HoldoutsCollectionRep

## Example Usage

```typescript
import { HoldoutsCollectionRep } from "@launchdarkly/mcp-server/models/components";

let value: HoldoutsCollectionRep = {
  links: {
    "self": {
      href: "/api/v2/my-project/environments/my-environment/holdouts?limit=20",
      type: "application/json",
    },
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                | [components.SimpleHoldoutRep](../../models/components/simpleholdoutrep.md)[]                                           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `links`                                                                                                                | Record<string, [components.Link](../../models/components/link.md)>                                                     | :heavy_minus_sign:                                                                                                     | The location and content type of related resources                                                                     | {<br/>"self": {<br/>"href": "/api/v2/my-project/environments/my-environment/holdouts?limit=20",<br/>"type": "application/json"<br/>}<br/>} |
| `totalCount`                                                                                                           | *number*                                                                                                               | :heavy_minus_sign:                                                                                                     | The total number of holdouts in this project and environment.                                                          |                                                                                                                        |