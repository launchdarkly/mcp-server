# AuditLogEntryListingRepCollection

## Example Usage

```typescript
import { AuditLogEntryListingRepCollection } from "@launchdarkly/mcp-server/models/components";

let value: AuditLogEntryListingRepCollection = {
  items: [],
  links: {},
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `items`                                                                                    | [components.AuditLogEntryListingRep](../../models/components/auditlogentrylistingrep.md)[] | :heavy_check_mark:                                                                         | An array of audit log entries                                                              |
| `links`                                                                                    | Record<string, [components.Link](../../models/components/link.md)>                         | :heavy_check_mark:                                                                         | The location and content type of related resources                                         |