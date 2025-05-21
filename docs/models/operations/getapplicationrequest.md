# GetApplicationRequest

## Example Usage

```typescript
import { GetApplicationRequest } from "@launchdarkly/mcp-server/models/operations";

let value: GetApplicationRequest = {
  applicationKey: "<value>",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `applicationKey`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The application key                                                                                            |
| `expand`                                                                                                       | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A comma-separated list of properties that can reveal additional information in the response. Options: `flags`. |