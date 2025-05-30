<template>
  <section class="px-4 py-6 bg-bg">
    <div class="max-w-3xl mx-auto space-y-6">
      <h1 class="text-3xl text-center font-semibold text-primary font-medium">
        Немного о себе
      </h1>

      <div class="space-y-4">
        <!-- Образование -->
        <button
          @click="isShow('education')"
          class="w-full flex justify-between items-center bg-surface border border-gray-200 rounded-md px-4 py-3 text-left font-medium hover:bg-primary hover:text-surface transition-colors"
        >
          <span>Образование</span>
          <span class="text-xl">
            {{ section.education ? "−" : "+" }}
          </span>
        </button>

        <div
          v-if="section.education"
          class="bg-surface p-4 rounded-md text-text-light space-y-2"
        >
          <ul class="list-disc list-inside space-y-2">
            <li>
              <span class="font-semibold">Высшее образование:</span>
              ГБОУ РНИМУ им. Н.И. Пирогова, Москва, педиатрия, 2010–2016 гг.
            </li>
            <li>
              <span class="font-semibold">Ординатура:</span>
              ГБОУ НИКИО им. Л.И. Свержевского, Москва, оториноларингология,
              2016–2018 гг.
            </li>
            <li>
              <span class="font-semibold">Повышение квалификации:</span>
              2023 — доп. проф. программа «Оториноларингология».
            </li>
          </ul>
        </div>

        <!-- Опыт работы -->
        <button
          @click="isShow('experience')"
          class="w-full flex justify-between items-center bg-surface border border-gray-200 rounded-md px-4 py-3 text-left font-medium hover:bg-primary hover:text-surface transition-colors"
        >
          <span>Опыт работы</span>
          <span class="text-xl">
            {{ section.experience ? "−" : "+" }}
          </span>
        </button>

        <div
          v-if="section.experience"
          class="bg-surface p-4 rounded-md text-text-light space-y-2"
        >
          <ul class="list-disc list-inside space-y-2">
            <li>
              2018–2022 — врач-оториноларинголог, ДГКБ им. Г.Н. Сперанского
            </li>
            <li>
              2018–2022 — врач-оториноларинголог, ГКБ № 13, центр восстановления
              детей
            </li>
            <li>2022–2024 — врач-оториноларинголог, ММЦ «Медси»</li>
            <li>2024–н. в. — врач-оториноларинголог, «Огни Олимпа»</li>
            <li>2024–н. в. — врач-оториноларинголог, «Атмосфера»</li>
          </ul>
        </div>

        <!-- Направления деятельности -->
        <button
          @click="isShow('work')"
          class="w-full flex justify-between items-center bg-surface border border-gray-200 rounded-md px-4 py-3 text-left font-medium hover:bg-primary hover:text-surface transition-colors"
        >
          <span>Направления деятельности</span>

          <span class="text-xl">
            {{ section.work ? "−" : "+" }}
          </span>
        </button>

        <div
          v-if="section.work"
          class="bg-surface p-4 rounded-md text-text-light space-y-2"
        >
          <p>
            Амбулаторная и консультативная помощь пациентам с ЛОР-заболеваниями.
            Планирование и проведение оперативных вмешательств. Подбор
            индивидуальных схем терапии. Консервативное лечение острой и
            хронической патологии лимфоэпителиального кольца, отиты, тугоухость,
            серные пробки, риниты, синуситы, носовые кровотечения.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";

const section = reactive({
  education: false,
  experience: false,
  work: false,
});

function isShow(key) {
  section[key] = !section[key];
}
</script>
