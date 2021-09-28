<template>
  <main-layout page="adopt">
    <main class="bg-white">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 class="mb-2 text-2xl font-extrabold tracking-tight text-gray-900">Кошки</h2>
    
        <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <router-link v-for="cat in cats" :key="cat.link" :to="cat.link" class="group">
            <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img :src="cat.picture" alt="" class="w-full h-full object-center object-cover group-hover:opacity-75">
            </div>
            <h3 class="mt-4 text-sm text-gray-700">
              {{cat.name}}
            </h3>
            <p class="mt-1 text-lg font-medium text-gray-900">
              {{cat.text}}
            </p>
          </router-link>
    
        </div>
      </div>
    </main>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
const cats = [
  {
    link: "/adopt/cats/sunset",
    name: "Сансет",
    text: "Безвольная вафля",
    picture: "/images/cat-7.jpg"
  },
  {
    link: "/adopt/cats/tolya",
    name: "Толя",
    text: "Сегодня встал не с той ноги",
    picture: "/images/cat-6.jpg"
  },
  {
    link: "/adopt/cats/melissa",
    name: "Мелисса",
    text: "Философ по жизни",
    picture: "/images/cat-5.jpg"
  },
  {
    link: "/adopt/cats/boris",
    name: "Боря",
    text: "Свой в доску пацан",
    picture: "/images/cat-3.jpg"
  },
  {
    link: "/adopt/cats/kuzya",
    name: "Кузя",
    text: "Мелкий паразит",
    picture: "/images/cat-4.jpg"
  },
  {
    link: "/adopt/cats/angela",
    name: "Анжела",
    text: "Белая и пушистая",
    picture: "/images/cat-2.jpg"
  },
  {
    link: "/adopt/cats/tuna",
    name: "Тунец",
    text: "Маленький проказник",
    picture: "/images/cat-1.jpg"
  },
  {
    link: "/adopt/cats/leps",
    name: "Лепс",
    text: "Кот Базилио",
    picture: "/images/cat-8.jpg"
  },
]
</script>