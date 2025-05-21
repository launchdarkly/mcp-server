# RandomizationSettingsRep

## Example Usage

```typescript
import { RandomizationSettingsRep } from "@launchdarkly/mcp-server/models/components";

let value: RandomizationSettingsRep = {
  projectId: "12345abcde67890fghij",
  projectKey: "project-key-123abc",
  randomizationUnits: [
    {
      randomizationUnit: "user",
      standardRandomizationUnit: "user",
      default: true,
      displayName: "User",
    },
  ],
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `projectId`                                                                          | *string*                                                                             | :heavy_minus_sign:                                                                   | The project ID                                                                       | 12345abcde67890fghij                                                                 |
| `projectKey`                                                                         | *string*                                                                             | :heavy_minus_sign:                                                                   | The project key                                                                      | project-key-123abc                                                                   |
| `randomizationUnits`                                                                 | [components.RandomizationUnitRep](../../models/components/randomizationunitrep.md)[] | :heavy_minus_sign:                                                                   | An array of the randomization units in this project                                  |                                                                                      |
| `creationDate`                                                                       | *number*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `links`                                                                              | Record<string, [components.Link](../../models/components/link.md)>                   | :heavy_minus_sign:                                                                   | The location and content type of related resources                                   |                                                                                      |