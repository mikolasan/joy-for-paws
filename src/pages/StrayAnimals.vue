<template>
  <main-layout page="stray-animals">
    <div class="relative bg-white overflow-hidden">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
          <div class="sm:max-w-lg">
            <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
              Бездомные животные
            </h1>
            <p class="mt-4 text-xl text-gray-500">В Новосибирске много бездомных животных. Чтобы и у вас появился друг - не надо за него платить</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div v-for="(column, columnId) in imageGrid" :key="columnId" class="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div v-for="(image, rowId) in column" :key="rowId" class="w-44 h-64 rounded-lg overflow-hidden" v-bind:class="(columnId === 0 && rowId === 0) ? 'sm:opacity-0 lg:opacity-100' : ''">
                        <img :src="image" alt="" class="w-full h-full object-center object-cover">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <router-link to="/adopt" class="inline-block text-center bg-indigo-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Взять домой</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
const imageGrid = [
  [
    "/images/cat-1.jpg",
    "/images/cat-2.jpg",
  ],
  [
    "/images/cat-8.jpg",
    "/images/cat-4.jpg",
    "/images/cat-5.jpg",
  ],
  [
    "/images/cat-6.jpg",
    "/images/cat-7.jpg"
  ],
];
</script>