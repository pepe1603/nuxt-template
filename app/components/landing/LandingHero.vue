<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  description: string
}>()

const heroTexts = [
  {
    text: 'Transformamos ideas en productos digitales.',
    typingSpeed: 25,
    pauseAfter: 2000
  },
  {
    text: 'Desarrollo Full Stack con Nuxt, Laravel y PostgreSQL.',
    typingSpeed: 20,
    pauseAfter: 2500
  },
  {
    text: 'Interfaces modernas, accesibles y optimizadas.',
    typingSpeed: 18,
    pauseAfter: 3000
  }
]
</script>

<template>
  <section class="relative overflow-hidden py-20 sm:py-32">
    <div class="absolute inset-0 -z-10 bg-gradient-to-br from-primary-500/10 via-transparent to-(--ui-bg)" />
    <div class="mx-auto max-w-4xl text-center">
      <UBadge
        :label="subtitle"
        variant="subtle"
        size="lg"
        class="mb-6"
      />
      <h1 class="text-4xl sm:text-6xl font-bold text-(--ui-text) mb-6 leading-tight">
        {{ title }}
      </h1>
      <p class="text-lg sm:text-xl text-(--ui-text-muted) mb-10 max-w-2xl mx-auto">
        {{ description }}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <UButton
          label="Comenzar ahora"
          icon="i-lucide-rocket"
          size="xl"
        />
        <UButton
          label="Ver documentación"
          icon="i-lucide-book-open"
          variant="outline"
          size="xl"
        />
      </div>
    </div>
  </section>
</template>
