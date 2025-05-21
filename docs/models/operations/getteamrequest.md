# GetTeamRequest

## Example Usage

```typescript
import { GetTeamRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetTeamRequest = {
  teamKey: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `teamKey`                                                                                    | *string*                                                                                     | :heavy_check_mark:                                                                           | The team key.                                                                                |
| `expand`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | A comma-separated list of properties that can reveal additional information in the response. |