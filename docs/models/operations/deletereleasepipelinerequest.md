# DeleteReleasePipelineRequest

## Example Usage

```typescript
import { DeleteReleasePipelineRequest } from "@launchdarkly/mcp-server/models/operations";

let value: DeleteReleasePipelineRequest = {
  projectKey: "<value>",
  pipelineKey: "<value>",
};
```

## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `projectKey`             | *string*                 | :heavy_check_mark:       | The project key          |
| `pipelineKey`            | *string*                 | :heavy_check_mark:       | The release pipeline key |