# EvaluationReason

## Example Usage

```typescript
import { EvaluationReason } from "@launchdarkly/mcp-server/models/components";

let value: EvaluationReason = {
  kind: "OFF",
  ruleIndex: 3,
  ruleID: "1234567890",
  prerequisiteKey: "someotherflagkey",
  inExperiment: true,
  errorKind: "USER_NOT_SPECIFIED",
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  | Example                                                                                      |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `kind`                                                                                       | *string*                                                                                     | :heavy_check_mark:                                                                           | Describes the general reason that LaunchDarkly selected this variation.                      | OFF                                                                                          |
| `ruleIndex`                                                                                  | *number*                                                                                     | :heavy_minus_sign:                                                                           | The positional index of the matching rule if the kind is 'RULE_MATCH'. The index is 0-based. | 3                                                                                            |
| `ruleID`                                                                                     | *string*                                                                                     | :heavy_minus_sign:                                                                           | The unique identifier of the matching rule if the kind is 'RULE_MATCH'.                      | 1234567890                                                                                   |
| `prerequisiteKey`                                                                            | *string*                                                                                     | :heavy_minus_sign:                                                                           | The key of the flag that failed if the kind is 'PREREQUISITE_FAILED'.                        | someotherflagkey                                                                             |
| `inExperiment`                                                                               | *boolean*                                                                                    | :heavy_minus_sign:                                                                           | Indicates whether the evaluation occurred as part of an experiment.                          | true                                                                                         |
| `errorKind`                                                                                  | *string*                                                                                     | :heavy_minus_sign:                                                                           | The specific error type if the kind is 'ERROR'.                                              | USER_NOT_SPECIFIED                                                                           |