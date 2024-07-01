import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "JoubaMety's Notes",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    baseUrl: "notes.joubamety.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      typography: {
        header: "Archivo",
        body: "Noto Sans",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: { // Catpuccin Latte
          light: "#eff1f5", // Latte Base
          lightgray: "#ccd0da", // Latte Surface0
          gray: "#8c8fa1", // Latte Overlay1
          darkgray: "#6c6f85", // Latte Subtext0
          dark: "#4c4f69", // Latte Text
          secondary: "#1e66f5", // Latte Blue
          tertiary: "#7287fd", // Latte Lavender
          highlight: "rgba(143, 159, 169, 0.15)",
          text_highlight: "rgb(223, 142, 29)"
        },
        darkMode: { // Catpuccin Mocha/Frappé
          light: "#11111b", // Mocha Crust
          lightgray: "#313244", // Mocha Surface0
          gray: "#7f849c", // Mocha Overlay1
          darkgray: "#a6adc8", // Mocha Subtext0
          dark: "#c6d0f5", // Frappé Text
          secondary: "#8caaee", // Frappé Blue
          tertiary: "#babbf1", // Frappé Lavender
          highlight: "rgba(143, 159, 169, 0.15)",
          text_highlight: "rgb(249, 226, 175)"
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate({
        // you can add 'git' here for last modified from Git
        // if you do rely on git for dates, ensure defaultDateType is 'modified'
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.Latex({ renderEngine: "katex" }),
      Plugin.SyntaxHighlighting(),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources({ fontOrigin: "googleFonts" }),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
