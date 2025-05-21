# ReviewResponse

## Example Usage

```typescript
import { ReviewResponse } from "@launchdarkly/mcp-server";

let value: ReviewResponse = {
  id: "12ab3c45de678910abc12345",
  kind: "approve",
  comment: "Approved!",
  memberId: "12ab3c45de678910abc12345",
  serviceTokenId: "12ab3c45de678910abc12345",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `id`                                                         | *string*                                                     | :heavy_check_mark:                                           | The approval request ID                                      | 12ab3c45de678910abc12345                                     |
| `kind`                                                       | [models.ReviewResponseKind](../models/reviewresponsekind.md) | :heavy_check_mark:                                           | The type of review action to take                            | approve                                                      |
| `creationDate`                                               | *number*                                                     | :heavy_minus_sign:                                           | N/A                                                          |                                                              |
| `comment`                                                    | *string*                                                     | :heavy_minus_sign:                                           | A comment describing the approval response                   | Approved!                                                    |
| `memberId`                                                   | *string*                                                     | :heavy_minus_sign:                                           | ID of account member that reviewed request                   | 12ab3c45de678910abc12345                                     |
| `serviceTokenId`                                             | *string*                                                     | :heavy_minus_sign:                                           | ID of account service token that reviewed request            | 12ab3c45de678910abc12345                                     |