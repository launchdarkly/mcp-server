# UserAttributeNamesRep

## Example Usage

```typescript
import { UserAttributeNamesRep } from "@launchdarkly/mcp-server/models/components";

let value: UserAttributeNamesRep = {
  private: [
    "SSN",
    "credit_card_number",
  ],
  custom: [
    "Age",
    "FavoriteFood",
    "FavoriteColor",
  ],
  standard: [
    "key",
    "ip",
    "firstName",
    "lastName",
    "country",
    "anonymous",
  ],
};
```

## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      | Example                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `private`                                                        | *string*[]                                                       | :heavy_minus_sign:                                               | private attributes                                               | [<br/>"SSN",<br/>"credit_card_number"<br/>]                      |
| `custom`                                                         | *string*[]                                                       | :heavy_minus_sign:                                               | custom attributes                                                | [<br/>"Age",<br/>"FavoriteFood",<br/>"FavoriteColor"<br/>]       |
| `standard`                                                       | *string*[]                                                       | :heavy_minus_sign:                                               | standard attributes                                              | [<br/>"key",<br/>"ip",<br/>"firstName",<br/>"lastName",<br/>"country",<br/>"anonymous"<br/>] |