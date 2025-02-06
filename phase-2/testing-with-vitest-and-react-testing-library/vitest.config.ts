import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Sets the testing environment to a browser-like environment
    globals: true,        // Provides globals like `describe` and `test`
    setupFiles: './src/setupTests.ts', // Optional: specify a setup file for additional configurations
  },
});
