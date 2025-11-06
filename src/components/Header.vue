<template>
  <header class="bg-primary text-surface relative z-30">
    <div class="relative max-w-6xl mx-auto px-4 py-4">
      <!-- Десктоп -->
      <nav class="hidden md:flex justify-center space-x-8">
        <a href="#main" class="hover:text-accent transition">Главная</a>
        <a href="#clinics" class="hover:text-accent transition">Клиники</a>
        <a href="#about" class="hover:text-accent transition">Обо мне</a>
        <a href="#contacts" class="hover:text-accent transition">Контакты</a>
      </nav>

      <!-- Бургер -->
      <button
        @click="toggle()"
        class="md:hidden absolute right-4 top-1/2 -translate-y-1/2 text-2xl focus:outline-none z-50"
      >
        <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
    </div>

    <!-- Мобильное меню -->
    <Transition
      enter-active-class="transition-transform ease-out duration-300"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform ease-in duration-200"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-primary text-surface flex flex-col items-center justify-center space-y-6 text-xl z-40"
      >
        <a @click="close()" href="#main" class="hover:text-accent transition"
          >Главная</a
        >
        <a @click="close()" href="#clinics" class="hover:text-accent transition"
          >Клиники</a
        >
        <a @click="close()" href="#about" class="hover:text-accent transition"
          >Обо мне</a
        >
        <a
          @click="close()"
          href="#contacts"
          class="hover:text-accent transition"
          >Контакты</a
        >
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
function toggle() {
  isOpen.value = !isOpen.value;
}
function close() {
  isOpen.value = false;
}
</script>
