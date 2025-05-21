# FileRep

## Example Usage

```typescript
import { FileRep } from "@launchdarkly/mcp-server/models/components";

let value: FileRep = {
  filename: "bigsegimport.csv",
  status: "complete",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `filename`                                      | *string*                                        | :heavy_minus_sign:                              | The imported file name, including the extension | bigsegimport.csv                                |
| `status`                                        | *string*                                        | :heavy_minus_sign:                              | The imported file status                        | complete                                        |