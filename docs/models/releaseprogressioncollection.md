# ReleaseProgressionCollection

## Example Usage

```typescript
import { ReleaseProgressionCollection } from "@launchdarkly/mcp-server";

let value: ReleaseProgressionCollection = {
  activeCount: 3,
  completedCount: 1,
  items: [
    {
      createdAt: 173635,
      flagKey: "flag-key-123abc",
      activePhaseId: "1234a56b7c89d012345e678f",
      links: {
        "key": {},
      },
    },
  ],
  phases: [
    {
      id: "1234a56b7c89d012345e678f",
      name: "Phase 1 - Testing",
      releaseCount: 2,
    },
  ],
  totalCount: 8,
  links: {
    "key": {},
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `activeCount`                                                                    | *number*                                                                         | :heavy_check_mark:                                                               | The number of active releases                                                    | 3                                                                                |
| `completedCount`                                                                 | *number*                                                                         | :heavy_check_mark:                                                               | The number of completed releases                                                 | 1                                                                                |
| `items`                                                                          | [models.ReleaseProgression](../models/releaseprogression.md)[]                   | :heavy_check_mark:                                                               | A list of details for each release, across all flags, for this release pipeline  |                                                                                  |
| `phases`                                                                         | [models.PhaseInfo](../models/phaseinfo.md)[]                                     | :heavy_check_mark:                                                               | A list of details for each phase, across all releases, for this release pipeline |                                                                                  |
| `totalCount`                                                                     | *number*                                                                         | :heavy_check_mark:                                                               | The total number of releases for this release pipeline                           | 8                                                                                |
| `links`                                                                          | Record<string, [models.Link](../models/link.md)>                                 | :heavy_check_mark:                                                               | The location and content type of related resources                               |                                                                                  |