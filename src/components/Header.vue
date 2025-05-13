<template>
  <header class="fixed top-0 left-0 w-full bg-primary shadow z-50">
    <nav class="container mx-auto flex flex-wrap justify-center gap-4 py-4">
      <router-link :to="{ path: '/', hash: '#main' }" class="text-surface text-sm md:text-base hover:text-accent">Главная</router-link>
      <router-link :to="{ path: '/', hash: '#clinics' }" class="text-surface text-sm md:text-base hover:text-accent">Записаться</router-link>
      <router-link :to="{ path: '/', hash: '#about' }" class="text-surface text-sm md:text-base hover:text-accent">О враче</router-link>
      <router-link :to="{ path: '/', hash: '#footer' }" class="text-surface text-sm md:text-base hover:text-accent">Контакты</router-link>
    </nav>
  </header>
</template>

<script setup>

</script>