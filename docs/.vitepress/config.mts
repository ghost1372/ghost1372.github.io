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
  cleanUrls: true,
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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DevWinUI', link: '/QuickStart/DevWinUIQuickStart' },
      { text: 'HandyControl', link: '/handycontrol/' },
      { 
        text: 'Nuget',
        items: [
          { text: 'DevWinUI', link: 'https://www.nuget.org/packages/DevWinUI' },
          { text: 'DevWinUI.Base', link: 'https://www.nuget.org/packages/DevWinUI.Base' },
          { text: 'DevWinUI.ContextMenu', link: 'https://www.nuget.org/packages/DevWinUI.ContextMenu' },
          { text: 'DevWinUI.Shader', link: 'https://www.nuget.org/packages/DevWinUI.Shader' },
          { text: 'DevWinUI.SourceGenerator', link: 'https://www.nuget.org/packages/DevWinUI.SourceGenerator' },
          { text: 'HandyControls', link: 'https://www.nuget.org/packages/HandyControls' },
        ]
      },
      { text: 'VSIX', link: 'https://marketplace.visualstudio.com/items?itemName=MahdiHosseini.DevWinUITemplates' },
      { text: 'Breaking Changes', link: '/BreakingChanges/DevWinUIBreakingChanges' },
      { text: 'Contributers', link: '/Contributers/Team/' },
    ],

    sidebar: {
      '/ReleaseNotes/': devWinUISidebar,
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