# IpList

## Example Usage

```typescript
import { IpList } from "@launchdarkly/mcp-server";

let value: IpList = {
  addresses: [
    "104.156.80.0/20",
    "151.101.0.0/16",
  ],
  outboundAddresses: [
    "52.21.152.96/32",
  ],
};
```

## Fields

| Field                                                         | Type                                                          | Required                                                      | Description                                                   | Example                                                       |
| ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------- |
| `addresses`                                                   | *string*[]                                                    | :heavy_check_mark:                                            | A list of the IP addresses LaunchDarkly's service uses        | [<br/>"104.156.80.0/20",<br/>"151.101.0.0/16"<br/>]           |
| `outboundAddresses`                                           | *string*[]                                                    | :heavy_check_mark:                                            | A list of the IP addresses outgoing webhook notifications use | [<br/>"52.21.152.96/32"<br/>]                                 |