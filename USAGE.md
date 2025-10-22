<!-- Start SDK Example Usage [usage] -->
```typescript
import { LaunchDarkly } from "@launchdarkly/mcp-server";

const launchDarkly = new LaunchDarkly({
  apiKey: process.env["LAUNCHDARKLY_API_KEY"] ?? "",
});

async function run() {
  const result = await launchDarkly.codeReferences.listRepositories({});

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->