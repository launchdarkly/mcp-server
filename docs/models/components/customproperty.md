# CustomProperty

## Example Usage

```typescript
import { CustomProperty } from "@launchdarkly/mcp-server/models/components";

let value: CustomProperty = {
  name: "Jira issues",
  value: [
    "is-123",
    "is-456",
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `name`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | The name of the custom property of this type.                                | Jira issues                                                                  |
| `value`                                                                      | *string*[]                                                                   | :heavy_check_mark:                                                           | An array of values for the custom property data to associate with this flag. | [<br/>"is-123",<br/>"is-456"<br/>]                                           |