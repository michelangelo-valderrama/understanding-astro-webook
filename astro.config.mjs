import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import expressiveCode from "astro-expressive-code"
import { remarkReadingTime } from "./plugins"

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    expressiveCode({
      themes: ["github-dark", "github-light"],
      useDarkModeMediaQuery: true,
      themeCssSelector: (theme) => `.theme-${theme.name}`,
    }),
  ],
})
