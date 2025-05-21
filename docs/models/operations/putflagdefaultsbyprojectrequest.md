# PutFlagDefaultsByProjectRequest

## Example Usage

```typescript
import { PutFlagDefaultsByProjectRequest } from "@launchdarkly/mcp-server/models/operations";

let value: PutFlagDefaultsByProjectRequest = {
  projectKey: "<value>",
  upsertFlagDefaultsPayload: {
    tags: [
      "tag-1",
      "tag-2",
    ],
    temporary: true,
    booleanDefaults: {
      trueDisplayName: "True",
      falseDisplayName: "False",
      trueDescription: "serve true",
      falseDescription: "serve false",
      onVariation: 0,
      offVariation: 1,
    },
    defaultClientSideAvailability: {
      usingMobileKey: true,
      usingEnvironmentId: true,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `projectKey`                                                                                 | *string*                                                                                     | :heavy_check_mark:                                                                           | The project key                                                                              |
| `upsertFlagDefaultsPayload`                                                                  | [components.UpsertFlagDefaultsPayload](../../models/components/upsertflagdefaultspayload.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |