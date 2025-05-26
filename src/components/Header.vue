<template>
  <header class="bg-primary text-surface">
    <div class="relative max-w-6xl mx-auto px-4 py-4">
      <!-- Десктоп-нав -->
      <nav class="hidden md:flex justify-center space-x-8">
        <a href="#main" class="hover:text-accent transition">Главная</a>
        <a href="#clinics" class="hover:text-accent transition">Клиники</a>
        <a href="#about" class="hover:text-accent transition">Обо мне</a>
      </nav>

      <!-- Бургер-кнопка -->
      <button
        @click="isOpen = !isOpen"
        class="md:hidden absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl focus:outline-none"
      >
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <!-- Моб. меню -->
    <nav
      v-if="isOpen"
      class="md:hidden bg-primary text-center space-y-2 py-4"
    >
      <a href="#main" class="block hover:text-accent transition">Главная</a>
      <a href="#clinics" class="block hover:text-accent transition">Клиники</a>
      <a href="#about" class="block hover:text-accent transition">Обо мне</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const isOpen = ref(false);
</script>