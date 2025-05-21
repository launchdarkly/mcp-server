# ProjectPost

## Example Usage

```typescript
import { ProjectPost } from "@launchdarkly/mcp-server/models/components";

let value: ProjectPost = {
  name: "My Project",
  key: "project-key-123abc",
  includeInSnippetByDefault: true,
  defaultClientSideAvailability: {
    usingEnvironmentId: true,
    usingMobileKey: true,
  },
  tags: [
    "ops",
  ],
  environments: [
    {
      name: "My Environment",
      key: "environment-key-123abc",
      color: "F5A623",
      defaultTtl: 5,
      secureMode: true,
      defaultTrackEvents: false,
      confirmChanges: false,
      requireComments: false,
      tags: [
        "ops",
      ],
      critical: true,
    },
  ],
  namingConvention: {
    case: "kebabCase",
    prefix: "enable-",
  },
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `name`                                                                                                        | *string*                                                                                                      | :heavy_check_mark:                                                                                            | A human-friendly name for the project.                                                                        | My Project                                                                                                    |
| `key`                                                                                                         | *string*                                                                                                      | :heavy_check_mark:                                                                                            | A unique key used to reference the project in your code.                                                      | project-key-123abc                                                                                            |
| `includeInSnippetByDefault`                                                                                   | *boolean*                                                                                                     | :heavy_minus_sign:                                                                                            | Whether or not flags created in this project are made available to the client-side JavaScript SDK by default. | true                                                                                                          |
| `defaultClientSideAvailability`                                                                               | [components.DefaultClientSideAvailabilityPost](../../models/components/defaultclientsideavailabilitypost.md)  | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |
| `tags`                                                                                                        | *string*[]                                                                                                    | :heavy_minus_sign:                                                                                            | Tags for the project                                                                                          | [<br/>"ops"<br/>]                                                                                             |
| `environments`                                                                                                | [components.EnvironmentPost](../../models/components/environmentpost.md)[]                                    | :heavy_minus_sign:                                                                                            | Creates the provided environments for this project. If omitted default environments will be created instead.  |                                                                                                               |
| `namingConvention`                                                                                            | [components.NamingConvention](../../models/components/namingconvention.md)                                    | :heavy_minus_sign:                                                                                            | N/A                                                                                                           |                                                                                                               |