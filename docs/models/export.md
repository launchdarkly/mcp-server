# Export

## Example Usage

```typescript
import { Export } from "@launchdarkly/mcp-server";

let value: Export = {
  id: "1234a567-bcd8-9123-4567-abcd1234567f",
  segmentKey: "example-big-segment",
  creationTime: 826639,
  status: "complete",
  sizeBytes: 18,
  size: "18 B",
  initiator: {
    name: "Bob Loblaw",
    email: "ariel@acme.com",
  },
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `id`                                                                                            | *string*                                                                                        | :heavy_check_mark:                                                                              | The export ID                                                                                   | 1234a567-bcd8-9123-4567-abcd1234567f                                                            |
| `segmentKey`                                                                                    | *string*                                                                                        | :heavy_check_mark:                                                                              | The segment key                                                                                 | example-big-segment                                                                             |
| `creationTime`                                                                                  | *number*                                                                                        | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `status`                                                                                        | *string*                                                                                        | :heavy_check_mark:                                                                              | The export status                                                                               | complete                                                                                        |
| `sizeBytes`                                                                                     | *number*                                                                                        | :heavy_check_mark:                                                                              | The export size, in bytes                                                                       | 18                                                                                              |
| `size`                                                                                          | *string*                                                                                        | :heavy_check_mark:                                                                              | The export size, with units                                                                     | 18 B                                                                                            |
| `initiator`                                                                                     | [models.InitiatorRep](../models/initiatorrep.md)                                                | :heavy_check_mark:                                                                              | N/A                                                                                             |                                                                                                 |
| `links`                                                                                         | Record<string, [models.Link](../models/link.md)>                                                | :heavy_check_mark:                                                                              | The location and content type of related resources, including the location of the exported file |                                                                                                 |