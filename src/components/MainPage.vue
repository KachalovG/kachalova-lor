<template>
  <div class="flex flex-col min-h-screen">
    <!-- Header -->
    <header class="sticky top-0 bg-primary shadow z-50">
      <Header />
    </header>

    <!-- Главный экран -->
    <section id="main" class="flex-grow bg-bg pt-16 px-4">
      <div
        class="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-center gap-8"
      >
        <!-- Левая колонка: фото -->
        <img
          :src="photo"
          alt="Доктор Качалова"
          class="w-64 md:w-80 rounded-2xl shadow-lg object-cover"
        />

        <!-- Правая колонка: подпись -->
        <div class="text-center md:text-left space-y-4">
          <!-- Имя -->
          <h1
            class="font-heading text-3xl md:text-4xl font-light text-primary leading-tight"
          >
            Качалова Евгения<br />
            Владимировна
          </h1>

          <!-- Декоративная линия -->
          <hr class="border-t border-text-light w-24 mx-auto md:mx-0" />

          <!-- Описание -->
          <p class="text-text-light leading-relaxed max-w-md mx-auto md:mx-0">
            С любовью к профессии и заботой о каждом пациенте<br />
            Опыт более 8 лет в лечении взрослых и детей<br />
            Вера в ценность человеческой жизни, помощь пациентам, этичное
            отношение к людям.
          </p>
        </div>
      </div>
    </section>

    <!-- <div class="max-w-6xl mx-auto mb-8 mt-8">
        <h2 class="text-2xl md:text-3xl font-semibold text-primary text-center">
          Почему я – ваш ЛОР-врач
        </h2>
      </div>
      <div
        class="my-8 max-w-3xl mx-auto bg-surface p-8 rounded-lg shadow-md space-y-4 text-text-light leading-relaxed"
      >
        <p>
          Я доктор, который точно не скажет: «Подумаешь, насморк, само
          пройдёт!».
        </p>
        <p>
          Я верю, что визит к врачу-оториноларингологу — это не тревожное
          испытание,
        </p>
        <p>а возможность вернуть радость общения и полноценного дыхания.</p>
        <p>
          Современные методики, инновационные технологии и искреннее внимание к
          каждому пациенту позволяют мне не только лечить болезни, но и дарить
          уверенность в завтрашнем дне.
        </p>
        <p>
          Мои принципы работы — это доверие и открытость. Опираясь на доверие,
          можно решать самые ответственные и сложные задачи. Про открытость:
          наши пациенты, должны понимать, что делает врач, как он это делает и
          последовательность действий врача.
        </p>
        <p>
          Для меня всегда важны гармония и баланс во взаимоотношениях между
          пациентом и врачом.
        </p>
      </div> -->

    <!-- Раздел "Обо мне" -->
    <section id="about" class="bg-bg px-4 py-12">
      <About />
    </section>

    <!-- Раздел клиник -->
    <section id="clinics" class="bg-bg px-4 py-12">
      <div class="max-w-6xl mx-auto mb-8">
        <h2 class="font-heading text-3xl md:text-3xl text-primary text-center">
          Клиники
        </h2>
      </div>
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <ClinicsPage
          title="Клиника Атмосфера"
          description="Уютная клиника для всей семьи, где лечат профессионально, тепло и с уважением к каждому пациенту."
          link="https://clck.ru/3L8yoT"
        />
        <ClinicsPage
          title="Олимп Клиник Огни"
          description="Доказательная медицина с заботой о каждом члене семьи"
          link="https://ogni.clinic/doctors/kachalova-evgeniya-vladimirovna?clckid=d45f28a2"
        />
        <ClinicsPage
          title="Telegram"
          description="Для связи и online консультаций"
          link="https://t.me/evgeniyakachalova"
        />
      </div>
    </section>

    <!-- Footer -->
    <footer id="footer" class="bg-primary text-surface py-8">
      <Footer />
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import photo from "../assets/kachalova.jpg";
import ClinicsPage from "../components/Clinics.vue";
import Header from "../components/Header.vue";
import About from "../components/About.vue";
import Footer from "../components/Footer.vue";
</script>
