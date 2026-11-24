import { defineConfig } from "vitest/config";

// Runs under the Bun runtime (`bun --bun vitest`): the code and the tests use Bun APIs.
// threads, not forks: Bun's child_process lacks channel.unref, which the forks pool calls.
export default defineConfig({
  test: {
    pool: "threads",
    environment: "node",
    include: ["test/**/*.test.ts"],
    globalSetup: ["../../scripts/test-tmp-scope.ts"],
  },
});
