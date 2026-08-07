import { defineConfig } from 'vitepress'
import { devWinUISidebar } from './devWinUI.ts'
import { handycontrolSidebar } from './handycontrol.ts'

import { generateBreadcrumbsData } from '@nolebase/vitepress-plugin-breadcrumbs/vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformPageData(pageData, context) { 
    generateBreadcrumbsData(pageData, context) 
  }, 
  vite: { 
    optimizeDeps: { 
      exclude: [ 
        '@nolebase/vitepress-plugin-breadcrumbs/client'
      ] 
    }, 
    ssr: { 
      noExternal: [ 
        // If there are other packages that need to be processed by Vite, you can add them
        '@nolebase/vitepress-plugin-breadcrumbs'
      ]
    } 
  }, 
  title: "DevWinUI",
  description: "DevWinUI is a collection of useful classes, controls, styles, and codes for WinUI 3. Create a WinUI 3 app in less than a minute with the built-in project templates and scaffolding tools.",
  lastUpdated: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: '/logo.svg',
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2021-present Mahdi Hosseini'
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      }
    },
    outline: {
      level: [0, 6],        // show ## and ###
      label: 'On this page'
    },
    editLink: {
      pattern: 'https://github.com/ghost1372/ghost1372.github.io/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // Last updated text
    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DevWinUI', link: '/QuickStart/DevWinUIQuickStart' },
      { text: 'HandyControl', link: '/handycontrol/' },
      { text: 'Release Notes', link: '/ReleaseNotes/' },
      { text: 'Breaking Changes', link: '/BreakingChanges/DevWinUIBreakingChanges' },

    ],

    sidebar: {
      '/QuickStart/': devWinUISidebar,
      '/DevWinUI/': devWinUISidebar,
      '/DevWinUIBase/': devWinUISidebar,
      '/DevWinUIShader/': devWinUISidebar,
      '/DevWinUIContextMenu/': devWinUISidebar,
      '/DevWinUISourceGenerator/': devWinUISidebar,

      '/BreakingChanges/': [
        {
          text: 'Breaking Changes',
          collapsed: true,
          items: [
            { text: 'DevWinUI', link: '/BreakingChanges/DevWinUIBreakingChanges' },
            { text: 'DevWinUI.Base', link: '/BreakingChanges/BaseBreakingChanges' },
            { text: 'DevWinUI.ContextMenu', link: '/BreakingChanges/ContextMenuBreakingChanges' },
            { text: 'DevWinUI.Shader', link: '/BreakingChanges/ShaderBreakingChanges' },
            { text: 'DevWinUI.SourceGenerator', link: '/BreakingChanges/GeneratorBreakingChanges' },
          ]
        },
      ],
    '/handycontrol/': handycontrolSidebar,
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ghost1372' },
    ],    
  }
})