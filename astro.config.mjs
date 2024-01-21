import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import expressiveCode from "astro-expressive-code"
import { remarkReadingTime, remarkImageOptimization } from "./plugins"
import theme from "./public/vercel-theme.json"

import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkImageOptimization],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    expressiveCode({
      themes: [theme],
      styleOverrides: {
        borderColor: "#27272a",
        codeBackground: "#18181b",
        codeFontFamily:
          "Cascadia, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
        frames: {
          editorActiveTabBackground: "#18181b",
          terminalBackground: "#18181b",
          terminalTitlebarBackground: "#18181b",
          shadowColor: "transparent",
        },
      },
    }),
    mdx(),
  ],
})
