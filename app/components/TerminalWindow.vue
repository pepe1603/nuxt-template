<script setup lang="ts">
defineProps<{
  title?: string
  showButtons?: boolean
}>()
</script>

<template>
  <div class="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-(--ui-border) shadow-2xl">
    <div class="bg-(--ui-bg-muted) px-4 py-3 flex items-center justify-between">
      <div
        v-if="showButtons !== false"
        class="flex items-center gap-2"
      >
        <div class="w-3 h-3 rounded-full bg-red-500" />
        <div class="w-3 h-3 rounded-full bg-yellow-500" />
        <div class="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <div
        v-else
        class="w-[52px]"
      />

      <div class="flex-1 text-center">
        <span
          v-if="title"
          class="text-sm font-medium text-(--ui-text-muted)"
        >
          {{ title }}
        </span>
      </div>

      <div class="w-[52px]" />
    </div>

    <div class="bg-(--ui-bg-elevated) px-8 py-6 min-h-[300px]">
      <slot />
    </div>
  </div>
</template>
