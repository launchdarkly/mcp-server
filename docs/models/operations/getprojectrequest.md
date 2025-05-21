# GetProjectRequest

## Example Usage

```typescript
import { GetProjectRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetProjectRequest = {
  projectKey: "<value>",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The project key.                                                                             |
| `expand`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | A comma-separated list of properties that can reveal additional information in the response. |