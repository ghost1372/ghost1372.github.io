// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress'
import { NolebaseBreadcrumbs } from '@nolebase/vitepress-plugin-breadcrumbs/client'
import SidebarFilter from './components/SidebarFilter.vue'

import './style.css'
import './custom.css'


export default {
  extends: DefaultTheme,
  Layout: () => {
    const route = useRoute()

    return h(DefaultTheme.Layout, null, {
      'sidebar-nav-before': () => h(SidebarFilter),
      'doc-before': () => {
        const { frontmatter, page } = useData()

        const title = frontmatter.value.title || page.value.title
        if (!title) return null

        return h('div', { class: 'page-header', key: route.path }, [
          h(NolebaseBreadcrumbs, { key: route.path }),
          h('h1', { id: 'page-title', class: 'page-title' }, title)
        ])
      }
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme