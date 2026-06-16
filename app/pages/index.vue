<template>
  <div class="flex flex-col items-center justify-center min-h-screen gap-4 border border-indigo-400 dark:border-indigo-700/70 rounded-lg rounded-xl">
    <h1 class="text-4xl font-bold text-primary">
      Only Truths
    </h1>
    <LucideHeart class="w-8 h-8 text-primary-500 animate-bounce" />
    <UButton
      variant="outline"
      color="primary"
      class="hover:scale-105 transition hover:duration-150 animate-pulse"
      to="/tour"
    >
      Start !
    </UButton>

    <USeparator />

   <TypewriterText
  :items="messages"
/>

<TypewriterText
  :items="[
    {
      text: 'No se encontraron registros.'
    }
  ]"
  :loop="false"
  :erase-before-restart="false"
/>

<TypewriterText
  :items="[
    {
      text: 'Paso 1: Configura tu cuenta.'
    },
    {
      text: 'Paso 2: Conecta tu API.'
    },
    {
      text: 'Paso 3: Despliega tu proyecto.'
    }
  ]"
/>
  </div>
</template>

<script setup>
const messages = [
  {
    text: 'Construimos experiencias digitales modernas.',
    typingSpeed: 35,
    pauseAfter: 2000
  },
  {
    text: 'Aplicaciones web rápidas, escalables y mantenibles.',
    typingSpeed: 30,
    pauseAfter: 2500
  },
  {
    text: 'Especializados en Nuxt 4, TypeScript y arquitecturas modernas.',
    typingSpeed: 25,
    pauseAfter: 3000
  },
  {
    text: 'Eso es todo por el momento.',
    typingSpeed: 50,
    pauseAfter: 5000
  }
]
</script>
