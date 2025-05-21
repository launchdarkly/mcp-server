# DestinationKind

The type of Data Export destination

## Example Usage

```typescript
import { DestinationKind } from "@launchdarkly/mcp-server/models/components";

let value: DestinationKind = "google-pubsub";
```

## Values

```typescript
"google-pubsub" | "kinesis" | "mparticle" | "segment" | "azure-event-hubs" | "snowflake-v2"
```