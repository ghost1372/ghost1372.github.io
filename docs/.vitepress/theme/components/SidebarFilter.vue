<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const query = ref('')
const route = useRoute()
let observer: MutationObserver | null = null

function normalize(value: string): string {
  return value.trim().toLowerCase()
}

function applyFilter(): void {
  if (typeof document === 'undefined') return

  const sidebar = document.querySelector('.VPSidebar') as HTMLElement | null
  if (!sidebar) return

  const allItems = Array.from(sidebar.querySelectorAll('.VPSidebarItem')) as HTMLElement[]
  if (!allItems.length) return

  const normalizedQuery = normalize(query.value)
  if (!normalizedQuery) {
    for (const item of allItems) {
      item.style.display = ''
    }
    return
  }

  const nodes = allItems
    .map((element) => {
      const labelElement = element.querySelector('.item .text, .item')
      const label = (labelElement?.textContent || '').toLowerCase()

      let depth = 0
      let parent = element.parentElement
      while (parent) {
        if (parent.classList.contains('VPSidebarItem')) {
          depth += 1
        }
        parent = parent.parentElement
      }

      return {
        element,
        label,
        depth,
        isVisible: false,
      }
    })
    .sort((a, b) => b.depth - a.depth)

  for (const current of nodes) {
    const selfMatch = current.label.includes(normalizedQuery)
    const childMatch = nodes.some((candidate) =>
      candidate !== current
      && candidate.isVisible
      && candidate.depth > current.depth
      && current.element.contains(candidate.element)
    )

    current.isVisible = selfMatch || childMatch
    current.element.style.display = current.isVisible ? '' : 'none'
  }
}

onMounted(() => {
  nextTick(() => {
    applyFilter()

    if (typeof document === 'undefined') return

    const sidebar = document.querySelector('.VPSidebar')
    if (!sidebar) return

    observer = new MutationObserver(() => {
      applyFilter()
    })

    observer.observe(sidebar, {
      childList: true,
      subtree: true,
    })
  })
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})

watch(query, () => {
  applyFilter()
})

watch(
  () => route.path,
  () => {
    query.value = ''
    nextTick(() => {
      applyFilter()
    })
  }
)
</script>

<template>
  <div class="sidebar-filter" role="search">
    <div class="sidebar-filter-control">
      <span class="sidebar-filter-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11" r="6.5" stroke="currentColor" stroke-width="1.8" />
          <path d="M16 16L21 21" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
        </svg>
      </span>
      <input
        v-model="query"
        class="sidebar-filter-input"
        type="search"
        placeholder="Search..."
        aria-label="Search..."
        autocomplete="on"
        spellcheck="false"
      />
    </div>
  </div>
</template>
