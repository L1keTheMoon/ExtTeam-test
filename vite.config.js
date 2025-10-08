import { defineConfig } from 'vite'

export default defineConfig({
  base: 'https://l1kethemoon.github.io/ExtTeam-test/',
  build: {
    assetsInlineLimit: 0 // отключает инлайнинг всех assets
  }
})