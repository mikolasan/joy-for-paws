<script>
export default {
  data() {
    return {
      submenu: 'section_1',
      open: false
    }
  }
}
</script>

<template>
  <nav>
    <div class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
            <!-- Mobile menu button-->
            <button 
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-controls="mobile-menu"
              aria-expanded="false"
              @click="open = !open"
            >
              <span class="sr-only">Open main menu</span>
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div class="flex-1 flex items-center justify-center  sm:justify-start">
            <div class="flex-shrink-0">
              <img class="h-16 w-16" src="/images/logo.jpg" />
            </div>
            <div class="hidden sm:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="submenu === 'section_1' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @click="submenu = 'section_1'"
                >Приют</button>

                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="submenu === 'section_2' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @click="submenu = 'section_2'"
                >Животные</button>

                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="submenu === 'section_3' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @click="submenu = 'section_3'"
                >Соцсети</button>

                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="submenu === 'section_4' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @click="submenu = 'section_4'"
                >Контакты</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu" x-show="open">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <router-link to="/about" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">О нас</router-link>

          <router-link to="/adopt" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Взять домой</router-link>

          <router-link to="/articles" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Советы</router-link>

          <router-link to="/at_home_now" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Уже дома</router-link>

          <router-link to="/contacts" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Контакты</router-link>

          <router-link to="/dreams" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Мечты</router-link>

          <router-link to="/help" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Помочь</router-link>

          <router-link to="/news" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Новости</router-link>

          <router-link to="/video" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Видео</router-link>

          <router-link to="/volunteers" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Ищем волонтеров / сотрудничество</router-link>
        </div>
      </div>
    </div>
    <div class="hidden sm:block bg-gray-500" id="sub-menu">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- section 1 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section_1'">
          <router-link to="/news" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Новости</router-link>
          <router-link to="/help" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Помощь</router-link>
          <router-link to="/video" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Видео</router-link>
          <router-link to="/dreams" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Мечты</router-link>
        </div>
        <!-- section 2 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section_2'">
          <router-link to="/adopt" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Взять</router-link>
          <router-link to="/at_home_now" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Уже дома</router-link>
          <router-link to="/articles" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Советы</router-link>
        </div>
        <!-- section 3 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section_3'">
          <a to="#vk" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">ВКонтакте</a>
          <a to="#YouTube" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ютюб</a>
        </div>
        <!-- section 4 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section_4'">
          <router-link to="/about" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">О нас</router-link>
          <router-link to="/volunteers" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Ищем волонтеров</router-link>
          <router-link to="/sponsors" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Спонсорам</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>