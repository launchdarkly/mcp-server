# RelayAutoConfigPost

## Example Usage

```typescript
import { RelayAutoConfigPost } from "@launchdarkly/mcp-server/models/components";

let value: RelayAutoConfigPost = {
  name: "<value>",
  policy: [
    {
      resources: [
        "proj/*:env/*;qa_*:/flag/*",
      ],
      actions: [
        "*",
      ],
      effect: "allow",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                  | Type                                                                                                                                                                                                                                   | Required                                                                                                                                                                                                                               | Description                                                                                                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                                                                                                                                                 | *string*                                                                                                                                                                                                                               | :heavy_check_mark:                                                                                                                                                                                                                     | A human-friendly name for the Relay Proxy configuration                                                                                                                                                                                |
| `policy`                                                                                                                                                                                                                               | [components.Statement](../../models/components/statement.md)[]                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                     | A description of what environments and projects the Relay Proxy should include or exclude. To learn more, read [Write an inline policy](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration#write-an-inline-policy). |