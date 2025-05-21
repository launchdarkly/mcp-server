# Import

## Example Usage

```typescript
import { Import } from "@launchdarkly/mcp-server";

let value: Import = {
  id: "1234a567-bcd8-9123-4567-abcd1234567f",
  segmentKey: "example-big-segment",
  creationTime: 738156,
  mode: "replace",
  status: "complete",
  files: [
    {
      filename: "bigsegimport.csv",
      status: "complete",
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `id`                                                                    | *string*                                                                | :heavy_check_mark:                                                      | The import ID                                                           | 1234a567-bcd8-9123-4567-abcd1234567f                                    |
| `segmentKey`                                                            | *string*                                                                | :heavy_check_mark:                                                      | The segment key                                                         | example-big-segment                                                     |
| `creationTime`                                                          | *number*                                                                | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `mode`                                                                  | *string*                                                                | :heavy_check_mark:                                                      | The import mode used, either <code>merge</code> or <code>replace</code> | replace                                                                 |
| `status`                                                                | [models.ImportStatus](../models/importstatus.md)                        | :heavy_check_mark:                                                      | The import status                                                       | complete                                                                |
| `files`                                                                 | [models.FileRep](../models/filerep.md)[]                                | :heavy_minus_sign:                                                      | The imported files and their status                                     | [<br/>{<br/>"filename": "bigsegimport.csv",<br/>"status": "complete"<br/>}<br/>] |
| `links`                                                                 | Record<string, [models.Link](../models/link.md)>                        | :heavy_check_mark:                                                      | The location and content type of related resources                      |                                                                         |