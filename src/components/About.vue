<template>
  <section id="about" class="bg-bg py-12 px-4">
    <div
      class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 items-start gap-8"
    >
      <!-- 1) Левая колонка: фото + текст -->
      <div
        class="flex flex-col space-y-4 items-center md:items-start text-center md:text-left"
      >
        <p class="text-text-light leading-relaxed">
          Я доктор, который точно не скажет: «Подумаешь, насморк, само
          пройдет!».
        </p>
        <p class="text-text-light leading-relaxed">
          Визит к отоларингологу — это не стресс, а забота о себе, своем голосе
          и свободном дыхании
        </p>
        <img
          :src="photo"
          alt="Доктор"
          class="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      <!-- 2) Правая колонка: текст в зелёном блоке -->
      <div class="bg-primary/20 p-6 rounded-2xl space-y-4">
        <h2 class="text-2xl font-medium text-primary">Обо мне</h2>
        <p
          class="border-l-4 border-primary pl-4 text-text-light leading-relaxed"
        >
          <a
            >Современные методики, инновацисиние технологии и искреннее внимание
            к каждому пациенту позволяют мне не только лечить болезни, но и
            дарить уверенность в завтрашнем дне</a
          >
        </p>

        <p
          class="border-l-4 border-primary pl-4 text-text-light leading-relaxed"
        >
          <a
            >Мои принципы работы это доверие и открытость Опираясь на доверие,
            можно решать самые ответственные и сложные задани</a
          >
        </p>

        <p
          class="border-l-4 border-primary pl-4 text-text-light leading-relaxed"
        >
          <a
            >Про-открытость наши пациенты, должны понимать, что делает врач, как
            он это делает и последовательность действий врача.</a
          >
        </p>

        <p
          class="border-l-4 border-primary pl-4 text-text-light leading-relaxed"
        >
          <a
            >Для меня всегда важны гармония и баланс во взаимоотношенията между
            пациентом и краном</a
          >
        </p>
      </div>
    </div>

    <!-- 3) Аккордеон ↓ -->
    <div class="mt-12 max-w-4xl mx-auto space-y-4">
      <div v-for="item in accordion" :key="item.key" class="space-y-4">
        <button
          @click="isOpen[item.key] = !isOpen[item.key]"
          class="w-full flex justify-between items-center bg-primary/20 border border-gray-200 rounded-md px-4 py-3 text-left font-medium hover:bg-primary hover:text-surface transition-colors"
        >
          <span>{{ item.title }}</span>
          <span class="text-xl">{{ isOpen[item.key] ? "−" : ">" }}</span>
        </button>

        <transition name="fade">
          <div v-if="isOpen[item.key]" class="mt-4 bg-surface p-4 rounded-2xl">
            <!-- Рендерим список из переносов строк -->
            <ul class="list-disc list-inside space-y-2 text-text-light">
              <li v-for="(line, i) in item.content.split('\n')" :key="i">
                {{ line.trim() }}
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
const photo = "…ваша ссылка…";

const accordion = [
  {
    key: "education",
    title: "Образование",
    content: `Высшее образование: ГБОУ РНИМУ им. Н.И. Пирогова, Москва, педиатрия, 2010–2016 гг.
Ординатура: ГБОУ НИКИО им. Л.И. Свержевского, Москва, оториноларингология, 2016–2018 гг.
Повышение квалификации: 2023 — доп. проф. программа «Оториноларингология».`,
  },
  {
    key: "experience",
    title: "Опыт работы",
    content: `2018–2022 — врач-оториноларинголог, ДГКБ им. Г.Н. Сперанского
2018–2022 — врач-оториноларинголог, ГКБ № 13, центр восстановления детей
2022–2024 — врач-оториноларинголог, ММЦ «Медси»
2024–н. в. — врач-оториноларинголог, «Огни Олимпа»
2024–н. в. — врач-оториноларинголог, «Атмосфера»`,
  },
  {
    key: "work",
    title: "Направления деятельности",
    content: `Амбулаторная и консультативная помощь пациентам с ЛОР-заболеваниями. 
    Планирование и проведение оперативных вмешательств. Подбор индивидуальных схем терапии. 
    Консервативное лечение острой и хронической патологии лимфоэпителиального кольца, отиты, 
    Тугоухость, серные пробки, риниты, синуситы, носовые кровотечения.`,
  },
];

const isOpen = reactive({
  education: false,
  experience: false,
  work: false,
});

function isShow(key) {
  isOpen[key] = !isOpen[key];
}
</script>
