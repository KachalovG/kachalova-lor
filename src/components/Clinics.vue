<template>
  <div
    class="bg-surface border-l-4 border-primary rounded-xl p-6 shadow-md max-w-xs mx-auto transition-transform hover:-translate-y-1"
  >
    <h1 class="text-xl text-primary font-semibold mb-2">
      {{ title }}
    </h1>
    <p class="text-text-light mb-4">
      {{ description }}
    </p>
    <a :href="link" target="_blank" class="inline-block">
      <button
        class="bg-primary text-surface px-6 py-2 rounded-md font-medium hover:bg-accent transition-colors"
      >
        Записаться
      </button>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "название клиники",
  },
  description: {
    type: String,
    default: "описание карточки",
  },
  link: {
    type: String,
    default: "ссылка",
  },
});
</script>
