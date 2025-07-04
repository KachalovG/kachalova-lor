<template>
  <footer class="bg-primary text-surface py-1 md:py-8">
    <div
      class="max-w-6xl mx-auto px-4 hidden md:flex flex-col md:flex-row justify-between gap-8"
    >
      <div class="space-y-4">
        <h3 class="font-heading text-2xl">Контакты</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="mailto:ev.kachalova@gmail.com"
              class="text-lg flex items-center gap-2 hover:text-accent transition-colors"
            >
              <i class="fas fa-envelope"></i>
              <span>ev.kachalova@gmail.com</span>
            </a>
          </li>
          <li>
            <a
              href="tel:+79166153180"
              class="text-lg flex items-center gap-2 hover:text-accent transition-colors"
            >
              <i class="fas fa-phone"></i>
              <span>+7 (916) 615-31-80</span>
            </a>
          </li>
        </ul>
      </div>

      <div class="space-y-4">
        <h3 class="font-heading text-2xl">Связаться через</h3>
        <ul class="space-y-2 text-sm">
          <li>
            <a
              href="https://t.me/evgeniyakachalova"
              target="_blank"
              class="text-lg flex items-center gap-2 hover:text-accent transition-colors"
            >
              <i class="fab fa-telegram"></i>
              <span>Telegram</span>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/79166153180"
              target="_blank"
              class="text-lg flex items-center gap-2 hover:text-accent transition-colors"
            >
              <i class="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex md:hidden justify-center space-x-10">
      <a href="tel:+79166153180" class="text-3xl hover:text-accent transition">
        <i class="fas fa-phone"></i>
      </a>
      <a
        href="https://t.me/evgeniyakachalova"
        target="_blank"
        class="text-3xl hover:text-accent transition"
      >
        <i class="fab fa-telegram"></i>
      </a>
      <a
        href="https://wa.me/79166153180"
        target="_blank"
        class="text-3xl hover:text-accent transition"
      >
        <i class="fab fa-whatsapp"></i>
      </a>
    </div>
  </footer>
</template>

<script setup></script>
