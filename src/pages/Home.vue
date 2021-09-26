<template>
  <main-layout page=home>
    <main class="bg-white">
      <div class="max-w-7xl mx-auto px-8 my-8">
        <!-- left and right together here -->
        <div class="flex flex-col lg:flex-row lg:gap-16">
          <!-- left block -->
          <div class="flex-1">
            <h2 class="mb-2 text-base text-indigo-600 font-semibold tracking-wide uppercase">Взять домой</h2>
            <!-- image -->
            <img class="hidden lg:block" src="/images/the-lucky-neko-unsplash.jpg" />
            <!-- button -->
            <div class="my-4 rounded-md shadow">
              <a href="/adopt.html" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                Взять домой
              </a>
            </div>
          </div>
          <!-- right block -->
          <div class="flex-1">
            <h2 class="mb-2 text-base text-indigo-600 font-semibold tracking-wide uppercase">Новости</h2>
            <p class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Супер заголовок</p>
            <p class="mt-4 max-w-2xl text-base text-gray-500">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.
            </p>
            <!-- card -->
            <div class="bg-gray-200 my-8 p-6">
              <h3 class="text-base text-gray-900 pb-2">Внимание</h3>
              <img class="h-64 w-full object-cover" src="/images/nick-jenkins-unsplash.jpg" />
              <p class="text-base text-gray-500 pt-4">
                Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
</script>