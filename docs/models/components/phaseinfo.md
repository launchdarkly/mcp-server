# PhaseInfo

## Example Usage

```typescript
import { PhaseInfo } from "@launchdarkly/mcp-server/models/components";

let value: PhaseInfo = {
  id: "1234a56b7c89d012345e678f",
  name: "Phase 1 - Testing",
  releaseCount: 2,
};
```

## Fields

| Field                                       | Type                                        | Required                                    | Description                                 | Example                                     |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `id`                                        | *string*                                    | :heavy_check_mark:                          | The phase ID                                | 1234a56b7c89d012345e678f                    |
| `name`                                      | *string*                                    | :heavy_check_mark:                          | The release phase name                      | Phase 1 - Testing                           |
| `releaseCount`                              | *number*                                    | :heavy_check_mark:                          | The number of active releases in this phase | 2                                           |