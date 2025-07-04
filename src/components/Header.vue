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

    <div
      v-if="isOpen"
      @click="isOpen = false"
      class="fixed inset-0 bg-black/50 md:hidden z-10"
    ></div>

    <!-- 2) Меню поверх оверлея -->
    <nav
      v-if="isOpen"
      class="fixed inset-x-4 top-16 bg-primary text-center space-y-2 py-4 rounded-lg shadow-lg md:hidden z-20"
    >
      <a href="#main" class="block hover:text-accent transition">Главная</a>
      <a href="#clinics" class="block hover:text-accent transition">Клиники</a>
      <a href="#about" class="block hover:text-accent transition">Обо мне</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
