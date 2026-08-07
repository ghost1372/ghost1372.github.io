<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const isVisible = ref(false)
const scrollProgress = ref(0)

const PROGRESS_RADIUS = 22
const PROGRESS_CIRCUMFERENCE = 2 * Math.PI * PROGRESS_RADIUS

function updateVisibility() {
  if (typeof window === 'undefined') {
    return
  }

  isVisible.value = window.scrollY > 320

  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
  if (scrollableHeight <= 0) {
    scrollProgress.value = 0
    return
  }

  scrollProgress.value = Math.min(1, window.scrollY / scrollableHeight)
}

function scrollToTop() {
  if (typeof window === 'undefined') {
    return
  }

  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  updateVisibility()
  window.addEventListener('scroll', updateVisibility, { passive: true })
})

watch(
  () => route.path,
  () => {
    isVisible.value = false
    scrollProgress.value = 0
  }
)

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('scroll', updateVisibility)
  }
})
</script>

<template>
  <button
    v-show="isVisible"
    class="back-to-top-button"
    type="button"
    aria-label="Go to top"
    @click="scrollToTop"
  >
    <span class="back-to-top-button__progress" aria-hidden="true">
      <svg class="back-to-top-button__progress-svg" viewBox="0 0 52 52">
        <circle class="back-to-top-button__progress-track" cx="26" cy="26" :r="PROGRESS_RADIUS" />
        <circle
          class="back-to-top-button__progress-ring"
          cx="26"
          cy="26"
          :r="PROGRESS_RADIUS"
          :stroke-dasharray="PROGRESS_CIRCUMFERENCE"
          :stroke-dashoffset="PROGRESS_CIRCUMFERENCE * (1 - scrollProgress)"
        />
      </svg>
      <span class="back-to-top-button__icon">↑</span>
    </span>
    <span class="back-to-top-button__label">Top</span>
  </button>
</template>