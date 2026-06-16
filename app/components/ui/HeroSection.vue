<script setup lang="ts">
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
  <section
    class="
      mx-auto
      max-w-4xl
      py-24
      text-center
    "
  >
    <h1
      class="
        text-5xl
        font-bold
        tracking-tight
        mb-8
      "
    >
      Tu próximo proyecto empieza aquí
    </h1>

    <TypewriterText
      :items="heroTexts"
      :restart-delay="120000"
    />
  </section>
</template>
