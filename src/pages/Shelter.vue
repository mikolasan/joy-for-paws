<template>
  <main-layout page="shelter">
    <main class="bg-white">
      <div class="max-w-7xl mx-auto px-8 my-8">
      <!-- right block -->
      <div class="flex-1">
        <h2 class="mb-2 text-base text-pink-600 font-semibold tracking-wide uppercase">Приют</h2>
        <p class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Приют в Новосибирске</p>
        <p class="mt-4 max-w-2xl text-base text-gray-500">
          Возьмите у нас кошечку домой
        </p>
      </div>
        
      </div>
    </main>
    <section class="mt-16" style="height: 400px">
      <img class="w-full max-h-full object-cover filter grayscale" src="/images/nick-jenkins-unsplash.jpg" />
    </section>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
</script>