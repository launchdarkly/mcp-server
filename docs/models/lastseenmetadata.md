# LastSeenMetadata

## Example Usage

```typescript
import { LastSeenMetadata } from "@launchdarkly/mcp-server";

let value: LastSeenMetadata = {
  tokenId: "5b52207f8ca8e631d31fdb2b",
};
```

## Fields

| Field                                                 | Type                                                  | Required                                              | Description                                           | Example                                               |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `tokenId`                                             | *string*                                              | :heavy_minus_sign:                                    | The ID of the token used in the member's last session | 5b52207f8ca8e631d31fdb2b                              |