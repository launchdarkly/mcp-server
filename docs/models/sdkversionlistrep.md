# SDKVersionListRep

## Example Usage

```typescript
import { SDKVersionListRep } from "@launchdarkly/mcp-server";

let value: SDKVersionListRep = {
  links: {
    "key": "<value>",
  },
  sdkVersions: [
    {
      sdk: "Android",
      version: "3.1.2",
    },
    {
      sdk: "Android",
      version: "3.1.5",
    },
    {
      sdk: "C",
      version: "2.4.6",
    },
  ],
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `links`                                                                                                                    | Record<string, *any*>                                                                                                      | :heavy_check_mark:                                                                                                         | The location and content type of related resources                                                                         |                                                                                                                            |
| `sdkVersions`                                                                                                              | [models.SDKVersionRep](../models/sdkversionrep.md)[]                                                                       | :heavy_check_mark:                                                                                                         | The list of SDK names and versions                                                                                         | [<br/>{<br/>"sdk": "Android",<br/>"version": "3.1.2"<br/>},<br/>{<br/>"sdk": "Android",<br/>"version": "3.1.5"<br/>},<br/>{<br/>"sdk": "C",<br/>"version": "2.4.6"<br/>}<br/>] |