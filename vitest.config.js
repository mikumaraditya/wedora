import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    projects: ['apps/web/vitest.config.js', 'apps/api/vitest.config.js', 'packages/shared'],
  },
});
