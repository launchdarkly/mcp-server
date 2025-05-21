# Extinction

## Example Usage

```typescript
import { Extinction } from "@launchdarkly/mcp-server/models/components";

let value: Extinction = {
  revision: "a94a8fe5ccb19ba61c4c0873d391e987982fbbd3",
  message: "Remove flag for launched feature",
  time: 527034,
  flagKey: "enable-feature",
  projKey: "default",
};
```

## Fields

| Field                                                                                 | Type                                                                                  | Required                                                                              | Description                                                                           | Example                                                                               |
| ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| `revision`                                                                            | *string*                                                                              | :heavy_check_mark:                                                                    | The identifier for the revision where flag became extinct. For example, a commit SHA. | a94a8fe5ccb19ba61c4c0873d391e987982fbbd3                                              |
| `message`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | Description of the extinction. For example, the commit message for the revision.      | Remove flag for launched feature                                                      |
| `time`                                                                                | *number*                                                                              | :heavy_check_mark:                                                                    | N/A                                                                                   |                                                                                       |
| `flagKey`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | The feature flag key                                                                  | enable-feature                                                                        |
| `projKey`                                                                             | *string*                                                                              | :heavy_check_mark:                                                                    | The project key                                                                       | default                                                                               |