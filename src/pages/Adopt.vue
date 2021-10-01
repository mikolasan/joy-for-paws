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
    link: "/adopt/cats/eclipse",
    name: "Эклипс",
    text: "Толстощекая мелкая",
    picture: "/images/cat-1.jpg"
  },
  {
    link: "/adopt/cats/lua",
    name: "Луа",
    text: "Кот которго звали Марта",
    picture: "/images/cat-4.jpg"
  },
]
</script>