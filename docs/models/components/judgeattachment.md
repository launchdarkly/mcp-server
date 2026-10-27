# JudgeAttachment

## Example Usage

```typescript
import { JudgeAttachment } from "@launchdarkly/mcp-server/models/components";

let value: JudgeAttachment = {
  judgeConfigKey: "judgeConfigKey",
  samplingRate: 0.36160767,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `judgeConfigKey`                                     | *string*                                             | :heavy_check_mark:                                   | Judge config key                                     |
| `samplingRate`                                       | *number*                                             | :heavy_check_mark:                                   | Sampling rate for this judge attachment (0.0 to 1.0) |