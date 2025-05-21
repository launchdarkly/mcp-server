# MultiEnvironmentDependentFlag

## Example Usage

```typescript
import { MultiEnvironmentDependentFlag } from "@launchdarkly/mcp-server";

let value: MultiEnvironmentDependentFlag = {
  name: "Example dependent flag",
  key: "dependent-flag-key-123abc",
  environments: [
    {
      name: "Example environment",
      key: "environment-key-123abc",
      links: {
        "key": {},
      },
      site: {},
    },
  ],
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `name`                                                                     | *string*                                                                   | :heavy_minus_sign:                                                         | The flag name                                                              | Example dependent flag                                                     |
| `key`                                                                      | *string*                                                                   | :heavy_check_mark:                                                         | The flag key                                                               | dependent-flag-key-123abc                                                  |
| `environments`                                                             | [models.DependentFlagEnvironment](../models/dependentflagenvironment.md)[] | :heavy_check_mark:                                                         | A list of environments in which the dependent flag appears                 |                                                                            |