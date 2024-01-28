import { defineConfig } from "astro/config"
import {
  remarkReadingTime,
  remarkImageOptimization,
  rehypeLinkHeading,
} from "./plugins"
import { rehypeHeadingIds } from "@astrojs/markdown-remark"
import expressiveCode from "astro-expressive-code"
import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import tailwind from "@astrojs/tailwind"
import theme from "./public/vercel-theme.json"

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime, remarkImageOptimization],
    rehypePlugins: [rehypeHeadingIds, rehypeLinkHeading],
  },
  devToolbar: {
    enabled: false,
  },
  site: "https://understanding-astro-webook.vercel.app/",
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
