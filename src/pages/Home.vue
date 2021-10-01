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
            <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
              <img id="adopt-image" class="hidden lg:block lg:w-full lg:h-full lg:object-center lg:object-cover" src="/images/the-lucky-neko-unsplash.jpg" />
            </div>
            <p class="my-4 text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Бездомные животные</p>
            <p class="mt-4 max-w-2xl text-base text-gray-500">В Новосибирске много бездомных животных. Чтобы и у вас появился друг - не надо за него платить</p>
            
            <!-- button -->
            <router-link to="/adopt" class="my-4 inline-block text-center bg-green-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-green-700">Взять домой</router-link>
            
          </div>
          <!-- right block -->
          <div class="flex-1">
            <h2 class="mb-2 text-base text-pink-600 font-semibold tracking-wide uppercase">Новости</h2>
            <p class="text-3xl leading-8 font-extrabold tracking-tight text-gray-900">Группе нужны добровольцы!</p>
            <p class="mt-4 max-w-2xl text-base text-gray-500">
              Подпишитесь на группу ВКонтакте чтобы быть в курсе важных событий из жизни приюта
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