<script>
import { ref, reactive } from 'vue'

export default {
  props: {
    page: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      open: false,
    }
  },
  setup(props) {
    const sectionMap = {
      'dreams': -1,
      'home': 999,
      'news': 0,
      'shelter': 1,
      'about': 1,
      'video': 1,
      'articles': 1,
      'stray-animals': 2,
      'adopt': 2,
      'at-home-now':2,
      'help': 3,
      'volunteers': 3,
      'sponsors': 3,
      'contacts': 4,
    }
    const submenu = ref(`section${sectionMap[props.page] === undefined ? 999 : sectionMap[props.page]}`)
    const selectedSection = ref(submenu.value)
    console.log(submenu, selectedSection)
    return {
      submenu,
      selectedSection
    }
  },
  methods: {
    onMouseOver(event, section) {
      this.submenu = section
    },
    onMouseClick(event, section) {
      // this.selectedSection = section
    }
  }
}
</script>

<template>
  <nav @mouseleave="submenu = selectedSection">
    <div class="bg-gray-700">
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
            <router-link to="/">
            <div class="flex-shrink-0">
              <img class="h-16 w-16" src="/images/logo.jpg" />
            </div>
            </router-link>
            <div class="hidden sm:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <router-link to="/news">
                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="(submenu === 'section0' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' ' + (selectedSection === 'section0' ? 'border-2 border-white border-solid' : '')"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @mouseover="onMouseOver($event, 'section0')"
                  @click="onMouseClick($event, 'section0')"
                >Новости</button>
                </router-link>

                <router-link to="/shelter">
                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="(submenu === 'section1' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' ' + (selectedSection === 'section1' ? 'border-2 border-white border-solid' : '')"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @mouseover="onMouseOver($event, 'section1')"
                  @click="onMouseClick($event, 'section1')"
                >Приют</button>
                </router-link>

                <router-link to="/stray_animals">
                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="(submenu === 'section2' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' ' + (selectedSection === 'section2' ? 'border-2 border-white border-solid' : '')"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @mouseover="onMouseOver($event, 'section2')"
                  @click="onMouseClick($event, 'section2')"
                >Животные</button>
                </router-link>

                <router-link to="/help">
                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="(submenu === 'section3' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' ' + (selectedSection === 'section3' ? 'border-2 border-white border-solid' : '')"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @mouseover="onMouseOver($event, 'section3')"
                  @click="onMouseClick($event, 'section3')"
                >Помощь</button>
                </router-link>

                <router-link to="/contacts">
                <button
                  type="button"
                  class="px-3 py-2 rounded-md text-sm font-medium"
                  v-bind:class="(submenu === 'section4' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white') + ' ' + (selectedSection === 'section4' ? 'border-2 border-white border-solid' : '')"
                  aria-controls="sub-menu"
                  aria-expanded="false"
                  @mouseover="onMouseOver($event, 'section4')"
                  @click="onMouseClick($event, 'section4')"
                >Контакты</button>
                </router-link>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="md:hidden" id="mobile-menu" v-show="open">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

          <router-link to="/news" v-bind:class="page === 'news' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Новости</router-link>
          
          <router-link to="/adopt" v-bind:class="page === 'adopt' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Взять домой</router-link>
          <router-link to="/at_home_now" v-bind:class="page === 'at-home-now' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Уже дома</router-link>

          <router-link to="/articles" v-bind:class="page === 'articles' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Советы</router-link>

          <router-link to="/help" v-bind:class="page === 'help' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Помочь</router-link>
          <router-link to="/volunteers" v-bind:class="page === 'volunteers' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Ищем волонтеров</router-link>

          <router-link to="/about" v-bind:class="page === 'about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">О нас</router-link>
          <router-link to="/contacts" v-bind:class="page === 'contacts' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 block rounded-md text-base font-medium">Контакты</router-link>
        </div>
      </div>
    </div>
    <div class="hidden sm:block bg-gray-500" id="sub-menu">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="!['section1', 'section2', 'section3'].includes(submenu)">
        </div>
        <!-- section 1 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section1'">
          <router-link to="/about" v-bind:class="page === 'about' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">О нас</router-link>
          <router-link to="/video" v-bind:class="page === 'video' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Видео</router-link>
          <router-link to="/articles" v-bind:class="page === 'articles' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Советы</router-link>
        </div>
        <!-- section 2 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section2'">
          <router-link to="/adopt" v-bind:class="page === 'adopt' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Взять</router-link>
          <router-link to="/at_home_now" v-bind:class="page === 'at-home-now' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Уже дома</router-link>
        </div>
        <!-- section 3 -->
        <div class="flex-1 flex items-center justify-center  sm:justify-start h-16 space-x-4" v-show="submenu === 'section3'">
          <router-link to="/volunteers" v-bind:class="page === 'volunteers' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Ищем волонтеров</router-link>
          <router-link to="/sponsors" v-bind:class="page === 'sponsors' ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'" class="px-3 py-2 rounded-md text-sm font-medium">Спонсорам</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>