# MemberTeamsPostInput

## Example Usage

```typescript
import { MemberTeamsPostInput } from "@launchdarkly/mcp-server";

let value: MemberTeamsPostInput = {
  teamKeys: [
    "team1",
    "team2",
  ],
};
```

## Fields

| Field                | Type                 | Required             | Description          | Example              |
| -------------------- | -------------------- | -------------------- | -------------------- | -------------------- |
| `teamKeys`           | *string*[]           | :heavy_check_mark:   | List of team keys    | [<br/>"team1",<br/>"team2"<br/>] |