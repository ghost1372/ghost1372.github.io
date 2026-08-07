// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute, withBase } from 'vitepress'
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'

import './style.css'
import './custom.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => {
        const { frontmatter, page, site } = useData()

        const title = frontmatter.value.title || page.value.title
        if (!title) return null

        return h('div', { class: 'page-header' }, [
          h(NolebaseBreadcrumbs),
          h('h1', { id: 'page-title', class: 'page-title' }, title)
        ])
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme