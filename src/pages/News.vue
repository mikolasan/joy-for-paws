<template>
  <main-layout page="news">
    <main class="bg-white">
      <div class="max-w-7xl mx-auto px-8 my-8">
      
        <h1 class="mt-16 text-4xl leading-8 font-black tracking-tight text-gray-900">Последние новости приюта</h1>
        <p class="mt-4 text-xl text-gray-500">Публикуем понемногу, чтобы наши читатели всегда оставались в курсе</p>
        <hr class="mt-8 mb-8 border" />

        <article class="my-4">
          <h3 class="inline-block mt-6 px-3 pt-0 pb-0.5 rounded-full bg-blue-200 text-blue-700">Воспитание</h3>
          <h2 class="mt-2 max-w-2xl text-xl font-semibold text-gray-900">
            Кот насрал на полу - наказан на несколько дней.
          </h2>
          <p class="mt-2 max-w-2xl text-base text-gray-500">
            Кот насрал на полу - наказан на несколько дней. Кот насрал на полу - наказан на несколько дней. Кот насрал на полу - наказан на несколько дней. Кот насрал на полу - наказан на несколько дней. Кот насрал на полу - наказан на несколько дней.
          </p>
          <div class="my-4 flex content-center gap-x-3">
            <img class="w-12 h-12 object-cover rounded-full" src="/images/cat-1.jpg">
            <div class="flex flex-col justify-center">
              <p class="text-sm text-gray-900">Луа</p>
              <time class="text-sm text-gray-500">29 сентября 2021</time>
            </div>
          </div>
        </article>
      
        <article class="my-4">
          <h3 class="inline-block mt-6 px-3 pt-0 pb-0.5 rounded-full bg-pink-200 text-pink-700">Здоровье</h3>
          <h2 class="mt-2 max-w-2xl text-xl font-semibold text-gray-900">
            У Мелкой появились белые пятна.
          </h2>
          <p class="mt-4 max-w-2xl text-base text-gray-500">
            У Мелкой появились белые пятна. У Мелкой появились белые пятна. У Мелкой появились белые пятна. У Мелкой появились белые пятна. У Мелкой появились белые пятна. У Мелкой появились белые пятна. У Мелкой появились белые пятна. 
          </p>
          <div class="my-4 flex content-center gap-x-3">
            <img class="w-12 h-12 object-cover rounded-full" src="/images/cat-2.jpg">
            <div class="flex flex-col justify-center">
              <p class="text-sm text-gray-900">Эклипс</p>
              <time class="text-sm text-gray-500">29 сентября 2021</time>
            </div>
          </div>
        </article>

        <article class="my-4">
          <h3 class="inline-block mt-6 px-3 pt-0 pb-0.5 rounded-full bg-yellow-200 text-yellow-700">Туалет</h3>
          <h2 class="mt-2 max-w-2xl text-xl font-semibold text-gray-900">
            Сансет сегодня сходила только в лоток!
          </h2>
          <p class="mt-4 max-w-2xl text-base text-gray-500">
            Сансет сегодня сходила только в лоток! Сансет сегодня сходила только в лоток! Сансет сегодня сходила только в лоток! Сансет сегодня сходила только в лоток! Сансет сегодня сходила только в лоток! Сансет сегодня сходила только в лоток! Сансет сегодня сходила только в лоток! 
          </p>
          <div class="my-4 flex gap-x-3">
            <img class="w-12 h-12 object-cover rounded-full" src="/images/cat-6.jpg">
            <div class="flex flex-col justify-center">
              <p class="text-sm text-gray-900">Сансет</p>
              <time class="text-sm text-gray-500">29 сентября 2021</time>
            </div>
          </div>
        </article>
      </div>
    </main>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
</script>