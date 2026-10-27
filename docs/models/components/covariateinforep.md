# CovariateInfoRep

## Example Usage

```typescript
import { CovariateInfoRep } from "@launchdarkly/mcp-server/models/components";

let value: CovariateInfoRep = {
  id: "74a49a2b-4834-4246-917e-5d85231d8c2a",
  fileName: "covariate.csv",
  createdAt: 748931,
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_check_mark:                             | The ID of the covariate matrix                 | 74a49a2b-4834-4246-917e-5d85231d8c2a           |
| `fileName`                                     | *string*                                       | :heavy_check_mark:                             | The file name of the uploaded covariate matrix | covariate.csv                                  |
| `createdAt`                                    | *number*                                       | :heavy_check_mark:                             | N/A                                            |                                                |