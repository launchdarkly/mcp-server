# Message

## Example Usage

```typescript
import { Message } from "@launchdarkly/mcp-server/models/components";

let value: Message = {
  content: "content",
  role: "role",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `content`                                            | *string*                                             | :heavy_check_mark:                                   | The message text                                     |
| `role`                                               | *string*                                             | :heavy_check_mark:                                   | The message role, such as system, user, or assistant |