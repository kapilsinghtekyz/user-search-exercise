/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { mockApi } from "./mock-api/plugin";

export default defineConfig(({ mode }) => ({
  plugins: [react(), mockApi({ serverErrors: mode === "errors" })],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test-setup.ts"],
  },
}));
