<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const readingTimeMinutes = ref<number | null>(null)

const WORDS_PER_MINUTE = 200

let frameId: number | null = null

function formatReadingTime(minutes: number) {
  return `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`
}

function updateReadingTime() {
  if (typeof document === 'undefined') {
    return
  }

  const container = document.querySelector<HTMLElement>('.VPDoc .content-container')
  if (!container) {
    readingTimeMinutes.value = null
    return
  }

  const clone = container.cloneNode(true) as HTMLElement
  clone.querySelectorAll('pre, code, .header-anchor, .vp-code-group, .copy').forEach((element) => {
    element.remove()
  })

  const text = clone.innerText.replace(/\s+/g, ' ').trim()
  if (!text) {
    readingTimeMinutes.value = null
    return
  }

  const wordCount = text.split(' ').length
  readingTimeMinutes.value = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE))
}

function scheduleReadingTimeUpdate() {
  if (typeof window === 'undefined') {
    return
  }

  if (frameId !== null) {
    window.cancelAnimationFrame(frameId)
  }

  frameId = window.requestAnimationFrame(() => {
    frameId = null
    updateReadingTime()
  })
}

onMounted(() => {
  scheduleReadingTimeUpdate()
})

watch(
  () => route.path,
  async () => {
    await nextTick()
    scheduleReadingTimeUpdate()
  }
)

onBeforeUnmount(() => {
  if (frameId !== null && typeof window !== 'undefined') {
    window.cancelAnimationFrame(frameId)
  }
})
</script>

<template>
  <div v-if="readingTimeMinutes" class="page-reading-time" aria-label="Reading time">
    <svg
      class="page-reading-time__icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.8" />
      <path d="M12 7.8V12L15 14.2" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" />
    </svg>
    <span class="page-reading-time__text">Reading time</span>
    <span class="page-reading-time__value">{{ formatReadingTime(readingTimeMinutes) }}</span>
  </div>
</template>