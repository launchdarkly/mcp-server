import { describe, expect, test } from "bun:test";
import { formatResult } from "../src/mcp-server/tools.js";

describe("formatResult link normalization", () => {
  test("rewrites app.launchdarkly.com href to response origin", async () => {
    const origin = "https://random-domain.example.test";
    const input = {
      _links: {
        site: {
          href: "https://app.launchdarkly.com/default/production/features/flag-a",
        },
      },
    };

    const response = {
      headers: new Headers({ "content-type": "application/json" }),
      url: `${origin}/api/v2/flags/default/flag-a`,
    };

    const result = await formatResult(input, { response });
    const text = result.content[0];
    expect(text?.type).toBe("text");
    const parsed = JSON.parse(text.text);
    expect(parsed._links.site.href).toBe(
      `${origin}/default/production/features/flag-a`,
    );
  });

  test("rewrites app.launchdarkly.us href to response origin", async () => {
    const origin = "https://federal-alt.example.test";
    const input = {
      _links: {
        site: {
          href: "https://app.launchdarkly.us/default/production/features/flag-c",
        },
      },
    };

    const response = {
      headers: new Headers({ "content-type": "application/json" }),
      url: `${origin}/api/v2/flags/default/flag-c`,
    };

    const result = await formatResult(input, { response });
    const text = result.content[0];
    expect(text?.type).toBe("text");
    const parsed = JSON.parse(text.text);
    expect(parsed._links.site.href).toBe(
      `${origin}/default/production/features/flag-c`,
    );
  });

  test("expands relative href against response origin", async () => {
    const origin = "https://another-random.example.test";
    const input = {
      _links: {
        site: {
          href: "/default/production/features/flag-b",
        },
      },
    };

    const response = {
      headers: new Headers({ "content-type": "application/json" }),
      url: `${origin}/api/v2/flags/default/flag-b`,
    };

    const result = await formatResult(input, { response });
    const text = result.content[0];
    expect(text?.type).toBe("text");
    const parsed = JSON.parse(text.text);
    expect(parsed._links.site.href).toBe(
      `${origin}/default/production/features/flag-b`,
    );
  });
});
