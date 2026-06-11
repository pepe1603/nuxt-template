<script setup lang="ts">
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'es'
  }
})

useSeoMeta({
  title: 'Only Truths',
  description: 'Only Truths'
})
</script>

<template>
  <UApp>
    <header class="fixed top-0 left-0 right-0 z-50 border-b border-(--ui-border) bg-(--ui-bg)">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="text-xl font-bold text-(--ui-text)">
          Only Truths
        </NuxtLink>

        <UColorModeButton />
      </div>
    </header>

    <main class="mx-auto min-h-screen max-w-7xl px-4 pt-20 pb-8 sm:px-6 lg:px-8">
      <NuxtPage />
    </main>
  </UApp>
</template>
