<template>
  <main-layout page="help">
    <main class="bg-white">
      <div class="max-w-7xl mx-auto px-8 my-8">
      <!-- right block -->
      <div class="flex-1">
        <h2 class="mb-2 text-base text-pink-600 font-semibold tracking-wide uppercase">Помощь</h2>
        <p class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Если вы хотите помочь</p>
        <p class="mt-4 max-w-2xl text-base text-gray-500">
          Подпишиьесь на группу ВКонтакте чтобы быть вкурсе важных событий в жизни приюта
        </p>
        <!-- card -->
        <div class="bg-gray-200 my-8 p-6">
          <h3 class="text-base text-gray-900 pb-2">Внимание</h3>
          <img class="h-64 w-full object-cover" src="/images/nick-jenkins-unsplash.jpg" />
          <p class="text-base text-gray-500 pt-4">
            Когда требуется автопомощь - этот блок будет всплывать на главной.
          </p>
        </div>
      </div>
        
      </div>
    </main>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
</script>