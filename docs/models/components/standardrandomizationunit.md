# StandardRandomizationUnit

One of LaunchDarkly's fixed set of standard randomization units.

## Example Usage

```typescript
import { StandardRandomizationUnit } from "@launchdarkly/mcp-server/models/components";

let value: StandardRandomizationUnit = "request";
```

## Values

```typescript
"guest" | "guestTime" | "organization" | "request" | "user" | "userTime"
```