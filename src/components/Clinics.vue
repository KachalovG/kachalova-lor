<template>
  <!-- Этот компонент теперь рисует ровно 1 карточку -->
  <div
    class="bg-primary/30 rounded-2xl p-6 flex flex-col justify-between text-center"
  >
    <h3 class="font-heading text-3xl text-primary mb-4">
      {{ title }}
    </h3>
    <p class="text-text-light mb-6 flex-grow">
      {{ description }}
    </p>
    <a :href="link" target="_blank">
      <button class="bg-primary text-surface py-2 rounded-lg w-full">
        Записаться
      </button>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  link: String,
});
</script>
