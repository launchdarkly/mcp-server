# GenerateWarehouseDestinationKeyPairPostRep

## Example Usage

```typescript
import { GenerateWarehouseDestinationKeyPairPostRep } from "@launchdarkly/mcp-server/models/components";

let value: GenerateWarehouseDestinationKeyPairPostRep = {};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `publicKey`                                          | *string*                                             | :heavy_minus_sign:                                   | The public key used by LaunchDarkly                  |
| `publicKeyPkcs8`                                     | *string*                                             | :heavy_minus_sign:                                   | The public key to assign in your Snowflake worksheet |