import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// Separate from vite.config.ts so tests do not boot the Start and Cloudflare plugins.
// threads, not forks: Bun's child_process lacks channel.unref, which the forks pool calls.
export default defineConfig({
  resolve: { alias: { "#": fileURLToPath(new URL("./src", import.meta.url)) } },
  test: {
    pool: "threads",
    environment: "node",
    include: ["src/**/*.test.{ts,tsx}"],
    globalSetup: ["../../scripts/test-tmp-scope.ts"],
  },
});
