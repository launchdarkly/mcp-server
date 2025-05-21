# AuditLogEntryRep

## Example Usage

```typescript
import { AuditLogEntryRep } from "@launchdarkly/mcp-server/models/components";

let value: AuditLogEntryRep = {
  links: {
    "key": {},
  },
  id: "1234a56b7c89d012345e678f",
  accountId: "1234a56b7c89d012345e678f",
  date: 858217,
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
  subentries: [
    {
      links: {
        "key": {},
      },
      id: "1234a56b7c89d012345e678f",
      accountId: "1234a56b7c89d012345e678f",
      date: 653597,
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
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            | Example                                                                                                                |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                | Record<string, [components.Link](../../models/components/link.md)>                                                     | :heavy_check_mark:                                                                                                     | The location and content type of related resources                                                                     |                                                                                                                        |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the audit log entry                                                                                          | 1234a56b7c89d012345e678f                                                                                               |
| `accountId`                                                                                                            | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the account to which this audit log entry belongs                                                            | 1234a56b7c89d012345e678f                                                                                               |
| `date`                                                                                                                 | *number*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `accesses`                                                                                                             | [components.ResourceAccess](../../models/components/resourceaccess.md)[]                                               | :heavy_check_mark:                                                                                                     | Details on the actions performed and resources acted on in this audit log entry                                        |                                                                                                                        |
| `kind`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `name`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The name of the resource this audit log entry refers to                                                                | Example feature flag                                                                                                   |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Description of the change recorded in the audit log entry                                                              | Example, turning on the flag for testing                                                                               |
| `shortDescription`                                                                                                     | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | Shorter version of the change recorded in the audit log entry                                                          | Example, turning on the flag                                                                                           |
| `comment`                                                                                                              | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | Optional comment for the audit log entry                                                                               | This is an automated test                                                                                              |
| `subject`                                                                                                              | [components.SubjectDataRep](../../models/components/subjectdatarep.md)                                                 | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `member`                                                                                                               | [components.MemberDataRep](../../models/components/memberdatarep.md)                                                   | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `token`                                                                                                                | [components.TokenSummary](../../models/components/tokensummary.md)                                                     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `app`                                                                                                                  | [components.AuthorizedAppDataRep](../../models/components/authorizedappdatarep.md)                                     | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `titleVerb`                                                                                                            | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | The action and resource recorded in this audit log entry                                                               | turned on the flag                                                                                                     |
| `title`                                                                                                                | *string*                                                                                                               | :heavy_minus_sign:                                                                                                     | A description of what occurred, in the format <code>member</code> <code>titleVerb</code> <code>target</code>           |                                                                                                                        |
| `target`                                                                                                               | [components.TargetResourceRep](../../models/components/targetresourcerep.md)                                           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `parent`                                                                                                               | [components.ParentResourceRep](../../models/components/parentresourcerep.md)                                           | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |
| `delta`                                                                                                                | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | If the audit log entry has been updated, this is the JSON patch body that was used in the request to update the entity |                                                                                                                        |
| `triggerBody`                                                                                                          | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | A JSON representation of the external trigger for this audit log entry, if any                                         |                                                                                                                        |
| `merge`                                                                                                                | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | A JSON representation of the merge information for this audit log entry, if any                                        |                                                                                                                        |
| `previousVersion`                                                                                                      | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | If the audit log entry has been updated, this is a JSON representation of the previous version of the entity           |                                                                                                                        |
| `currentVersion`                                                                                                       | *any*                                                                                                                  | :heavy_minus_sign:                                                                                                     | If the audit log entry has been updated, this is a JSON representation of the current version of the entity            |                                                                                                                        |
| `subentries`                                                                                                           | [components.AuditLogEntryListingRep](../../models/components/auditlogentrylistingrep.md)[]                             | :heavy_minus_sign:                                                                                                     | N/A                                                                                                                    |                                                                                                                        |