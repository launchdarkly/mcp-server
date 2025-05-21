# GetMemberRequest

## Example Usage

```typescript
import { GetMemberRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetMemberRequest = {
  id: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `id`                                                                                         | *string*                                                                                     | :heavy_check_mark:                                                                           | The member ID                                                                                |
| `expand`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | A comma-separated list of properties that can reveal additional information in the response. |