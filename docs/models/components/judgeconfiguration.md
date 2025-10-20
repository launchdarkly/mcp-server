# JudgeConfiguration

## Example Usage

```typescript
import { JudgeConfiguration } from "@launchdarkly/mcp-server/models/components";

let value: JudgeConfiguration = {
  judges: [
    {
      judgeConfigKey: "judgeConfigKey",
      samplingRate: 0.7061401,
    },
    {
      judgeConfigKey: "judgeConfigKey",
      samplingRate: 0.7061401,
    },
  ],
};
```

## Fields

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `judges`                                                                                                                                      | [components.JudgeAttachment](../../models/components/judgeattachment.md)[]                                                                    | :heavy_minus_sign:                                                                                                                            | List of judges for this variation. When updating, this replaces all existing judge attachments, and if empty, removes all judge attachments.<br/> |