<template>
  <main-layout page=home>
    <main class="bg-white">
      <div class="max-w-7xl mx-auto px-8 my-8">
        <!-- left and right together here -->
        <div class="flex flex-col lg:flex-row lg:gap-16">
          <!-- left block -->
          <div class="flex-1">
            <h2 class="mb-2 text-base text-pink-600 font-semibold tracking-wide uppercase">Взять домой</h2>
            <!-- image -->
            <img class="hidden lg:block" src="/images/the-lucky-neko-unsplash.jpg" />
            <!-- button -->
            <div class="my-4 rounded-md shadow">
              <a href="/adopt.html" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                Взять домой
              </a>
            </div>
          </div>
          <!-- right block -->
          <div class="flex-1">
            <h2 class="mb-2 text-base text-pink-600 font-semibold tracking-wide uppercase">Новости</h2>
            <p class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Супер заголовок</p>
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
      </div>
    </main>
  </main-layout>
</template>

<script setup>
import MainLayout from '../layouts/Main.vue';
</script>