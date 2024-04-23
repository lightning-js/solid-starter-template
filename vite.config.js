import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { importChunkUrl } from '@lightningjs/vite-plugin-import-chunk-url';

export default defineConfig({
  plugins: [importChunkUrl(), solidPlugin({
    solid: {
      moduleName: "@lightningjs/solid",
      generate: 'universal',
    },
  })],
  resolve: {
    alias: {
      theme: '@lightningjs/l3-ui-theme-base',
    },
    dedupe: ['solid-js', '@lightningjs/solid', '@lightningjs/solid-primitives', '@lightningjs/renderer'],
  },
  optimizeDeps: {
    include: [],
    exclude: [
    '@lightningjs/solid',
    '@lightningjs/solid-primitives',
    '@lightningjs/solid-ui',
    '@lightningjs/renderer/core',
    '@lightningjs/renderer/workers/renderer']
  },
  server: {
    hmr: true,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  test: {
    browser: {
      enabled: true,
      headless: false,
      provider: "playwright",
      name: 'webkit'
    },
    testTransformMode: { web: ['/.[jt]sx?$/'] },
    globals: true
  }
});
