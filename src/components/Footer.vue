<template>
  <footer class="bg-gray-300">
    <div class="container max-w-7xl mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 mr-8 text-black">
          <router-link to="/" class="text-pink-700 no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            Joy For Paws
          </router-link>
          <img class="w-full mt-2" src="/images/logo.png" />
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Приют</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/news" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Новости</router-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/video" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Видео</router-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/about" class="no-underline hover:underline text-gray-800 hover:text-gray-500">О нас</router-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Животные</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/adopt" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Взять</router-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/at_home_now" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Уже дома</router-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/articles" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Советы</router-link>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Соцсети</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a to="#" class="no-underline hover:underline text-gray-800 hover:text-gray-500">VK</a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a to="#" class="no-underline hover:underline text-gray-800 hover:text-gray-500">YouTube</a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Помощь</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/volunteers" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Ищем волонтеров</router-link>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <router-link to="/sponsors" class="no-underline hover:underline text-gray-800 hover:text-gray-500">Спонсорам</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- copyright -->
    <div class="bg-gray-600 py-4">
      <div class="max-w-7xl mx-auto px-8">
        <p class="text-white">
          Copyright © 2021 Joy For Paws. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>