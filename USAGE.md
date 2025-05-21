<!-- Start SDK Example Usage [usage] -->
```typescript
import { LaunchdarklyMcpServer } from "@launchdarkly/mcp-server";

const launchdarklyMcpServer = new LaunchdarklyMcpServer({
  apiKey: process.env["LAUNCHDARKLYMCPSERVER_API_KEY"] ?? "",
});

async function run() {
  const result = await launchdarklyMcpServer.other.getRoot();

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->