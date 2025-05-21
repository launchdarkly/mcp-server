# AuditLogEntryListingRepCollection

## Example Usage

```typescript
import { AuditLogEntryListingRepCollection } from "@launchdarkly/mcp-server";

let value: AuditLogEntryListingRepCollection = {
  items: [
    {
      links: {
        "key": {},
      },
      id: "1234a56b7c89d012345e678f",
      accountId: "1234a56b7c89d012345e678f",
      date: 166007,
      accesses: [
        {},
      ],
      kind: "<value>",
      name: "Example feature flag",
      description: "Example, turning on the flag for testing",
      shortDescription: "Example, turning on the flag",
      comment: "This is an automated test",
      member: {
        id: "507f1f77bcf86cd799439011",
        email: "ariel@acme.com",
        firstName: "Ariel",
        lastName: "Flores",
      },
      token: {
        name: "DevOps token",
        ending: "2345",
        serviceToken: false,
      },
      titleVerb: "turned on the flag",
      target: {
        name: "Example flag name",
        resources: [
          "proj/example-project:env/production:flag/example-flag",
        ],
      },
    },
  ],
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `items`                                                                  | [models.AuditLogEntryListingRep](../models/auditlogentrylistingrep.md)[] | :heavy_check_mark:                                                       | An array of audit log entries                                            |
| `links`                                                                  | Record<string, [models.Link](../models/link.md)>                         | :heavy_check_mark:                                                       | The location and content type of related resources                       |