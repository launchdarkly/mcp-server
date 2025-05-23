<!-- Start SDK Example Usage [usage] -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  await launchDarkly.deleteOverrides({
    projectKey: "<value>",
  });
}

run();

```
<!-- End SDK Example Usage [usage] -->