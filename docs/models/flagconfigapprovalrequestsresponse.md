# FlagConfigApprovalRequestsResponse

## Example Usage

```typescript
import { FlagConfigApprovalRequestsResponse } from "@launchdarkly/mcp-server";

let value: FlagConfigApprovalRequestsResponse = {
  items: [
    {
      id: "12ab3c45de678910abc12345",
      version: 1,
      creationDate: 727908,
      serviceKind: "<value>",
      requestorId: "12ab3c45de678910abc12345",
      description: "example: request approval from someone",
      reviewStatus: "pending",
      allReviews: [
        {
          id: "12ab3c45de678910abc12345",
          kind: "approve",
          comment: "Approved!",
          memberId: "12ab3c45de678910abc12345",
          serviceTokenId: "12ab3c45de678910abc12345",
        },
      ],
      notifyMemberIds: [
        "1234a56b7c89d012345e678f",
      ],
      appliedByMemberId: "1234a56b7c89d012345e678f",
      appliedByServiceTokenId: "1234a56b7c89d012345e678f",
      status: "pending",
      instructions: [
        {
          "key": "<value>",
        },
      ],
      conflicts: [
        {},
      ],
      links: {
        "key": "<value>",
      },
      operatingOnId: "12ab3c45de678910abc12345",
      source: {
        key: "source-flag-key-123abc",
        version: 1,
      },
      customWorkflowMetadata: {
        name: "Example workflow name",
        stage: {
          index: 0,
          name: "Stage 1",
        },
      },
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `items`                                                                                      | [models.FlagConfigApprovalRequestResponse](../models/flagconfigapprovalrequestresponse.md)[] | :heavy_check_mark:                                                                           | An array of approval requests                                                                |
| `links`                                                                                      | Record<string, [models.Link](../models/link.md)>                                             | :heavy_check_mark:                                                                           | The location and content type of related resources                                           |