# MaintainerMember

## Example Usage

```typescript
import { MaintainerMember } from "@launchdarkly/mcp-server/models/components";

let value: MaintainerMember = {
  id: "<id>",
  email: "Greta_Will@hotmail.com",
  role: "<value>",
  kind: "kind",
};
```

## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `id`               | *string*           | :heavy_check_mark: | N/A                |
| `email`            | *string*           | :heavy_check_mark: | N/A                |
| `firstName`        | *string*           | :heavy_minus_sign: | N/A                |
| `lastName`         | *string*           | :heavy_minus_sign: | N/A                |
| `role`             | *string*           | :heavy_check_mark: | N/A                |
| `kind`             | *string*           | :heavy_check_mark: | N/A                |