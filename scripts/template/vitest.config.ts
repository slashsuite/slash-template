import { defineConfig } from "vitest/config";

// The template's own tests. Run under the Bun runtime (`bun --bun vitest`): init uses Bun APIs.
// threads, not forks: Bun's child_process lacks channel.unref, which the forks pool calls.
export default defineConfig({
  test: {
    pool: "threads",
    environment: "node",
    include: ["template/**/*.test.ts"],
    globalSetup: ["./test-tmp-scope.ts"],
    testTimeout: 30_000,
  },
});
