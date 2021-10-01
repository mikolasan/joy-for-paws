<template>
  <main-layout page="adopt">
    <div class="pt-6">
      <!-- breadcrumb -->
      <nav aria-label="Breadcrumb">
        <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li>
            <div class="flex items-center">
              <router-link to="/adopt" class="mr-2 text-sm font-medium text-gray-900">
                Животные
              </router-link>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li>
            <div class="flex items-center">
              <router-link to="/adopt" class="mr-2 text-sm font-medium text-gray-900">
                Взять домой
              </router-link>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
  
          <li class="text-sm">
            <span class="font-medium text-gray-500 hover:text-gray-600">
              {{catInfo[cat].name}}
            </span>
          </li>
        </ol>
      </nav>
  
      <!-- Image gallery -->
      <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img :src="catInfo[cat].photo[0]" alt="Two each of gray, white, and black shirts laying flat." class="w-full h-full object-center object-cover">
        </div>
        <div class="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img :src="catInfo[cat].photo[1]" alt="Model wearing plain black basic tee." class="w-full h-full object-center object-cover">
          </div>
          <div class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img :src="catInfo[cat].photo[2]" alt="Model wearing plain gray basic tee." class="w-full h-full object-center object-cover">
          </div>
        </div>
        <div class="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
          <img :src="catInfo[cat].photo[3]" alt="Model wearing plain white basic tee." class="w-full h-full object-center object-cover">
        </div>
      </div>
  
      <!-- Product info -->
      <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {{catInfo[cat].name}}
          </h1>
        </div>
  
        <!-- Options -->
        <div class="mt-4 lg:mt-0 lg:row-span-3">
          <p class="text-3xl text-gray-900">{{catInfo[cat].nick}}</p>
  
          <div id="chart">
            <apexchart type="polarArea" class="w-auto" :options="chartOptions" :series="catInfo[cat].series"></apexchart>
          </div>
          
          <form @submit.prevent="sumbitPhone">
            <input type="text" v-model="human">
            <input type="text" v-model="phone">
            <button type="submit" class="mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">Взять домой</button>
          </form>
        </div>
  
        <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Description and details -->
          <div>
            <div class="space-y-6">
              <p v-for="paragraph in catInfo[cat].text.split('\n')" :key="paragraph" class="text-base text-gray-900">{{paragraph}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script setup>
import axios from 'axios';
import { ref, toRefs } from 'vue'
import MainLayout from '../layouts/Main.vue';
const catInfo = {
  "eclipse": {
    name: "Эклипс",
    nick: "Толстощекая мелкая",
    photo: ["/images/cat-1.jpg", "/images/cat-1.jpg", "/images/cat-1.jpg", "/images/cat-1.jpg"],
    series: [81, 12, 45, 78, 36],
    text: `В начале лета Эклипс была найдена во дворе дома. Мокрая, голодная, худая. Сидела под дождем и с надеждой смотрела на редких прохожих. Но все спешили мимо.
      Я решилась взять её и найти хозяина.
      Стерилизовала, полностью проверила здоровье, анализы и тесты ПЦР есть.
      Осталось найти её Человека, который сможет подарить ей дом, заботу и любовь. Пожалуйста, присмотритесь, Эклипс молоденькая, ей около трех лет. Шерстка блестящая, переливается, мягкая и нежная как и характер кошечки.
      По характеру ненавязчивая, но с азартом поддержит любую игру, любую забаву, ей нравятся всяческие игрушки, она очень активная и забавная кошечка! Эклипс очень милая, добрая и ласковая, в ней много нежного мурчания, искренне любит людей. Эта кошечка подарит Вам много радости и любви ❤️
      Лоток - отлично, предпочитает натуральную еду, консервы и немного сухого корма. Когтеточку использует по назначению. Будет прекрасным другом Вам и Вашему ребёнку, если к ней отнесутся с тёплом и уважением.
      Стерилизована, привита, есть паспорт.
      Если Вы выберете Эклипс, Вы дадите шанс жить и ещё одной душе, т.к. планирую взять кошку из подвала, когда Эклипс уедет домой и пройдёт испытательный срок.
      Отдается только в собственное жильё взрослым ответственным людям, с возможностью интересоваться ее судьбой.
      Привезу познакомиться.`,
  },
  "lua": {
    name: "Луа",
    nick: "Кот которго звали Марта",
    photo: ["/images/cat-4.jpg", "/images/cat-4.jpg", "/images/cat-4.jpg", "/images/cat-4.jpg"],
    series: [32, 47, 36, 27, 41],
    text: `Интересный окрас, ест сметану. Смешной.`,
  },

  "sunset": {
    name: "Сансет",
    photo: ["/images/cat-7.jpg", "/images/cat-7.jpg", "/images/cat-7.jpg", "/images/cat-7.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "tolya": {
    name: "Толя",
    photo: ["/images/cat-6.jpg", "/images/cat-6.jpg", "/images/cat-6.jpg", "/images/cat-6.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "melissa": {
    name: "Мелисса",
    photo: ["/images/cat-5.jpg", "/images/cat-5.jpg", "/images/cat-5.jpg", "/images/cat-5.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "boris": {
    name: "Боря",
    photo: ["/images/cat-3.jpg", "/images/cat-3.jpg", "/images/cat-3.jpg", "/images/cat-3.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "kuzya": {
    name: "Кузя",
    photo: ["/images/cat-4.jpg", "/images/cat-4.jpg", "/images/cat-4.jpg", "/images/cat-4.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "angela": {
    name: "Анжела",
    photo: ["/images/cat-2.jpg", "/images/cat-2.jpg", "/images/cat-2.jpg", "/images/cat-2.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "tuna": {
    name: "Тунец",
    photo: ["/images/cat-1.jpg", "/images/cat-1.jpg", "/images/cat-1.jpg", "/images/cat-1.jpg"],
    series: [32, 47, 52, 22, 45],
  },
  "leps": {
    name: "Лепс",
    photo: ["/images/cat-8.jpg", "/images/cat-8.jpg", "/images/cat-8.jpg", "/images/cat-8.jpg"],
    series: [32, 47, 52, 22, 45],
  },
}
const chartOptions = {
  chart: {
    width: 380,
    type: 'polarArea'
  },
  labels: ['Любознательность', 'Грациозность', 'Няшность', 'Тискательность', 'Сообразительность'],
  fill: {
    opacity: 1
  },
  stroke: {
    width: 1,
    colors: undefined
  },
  yaxis: {
    show: false
  },
  legend: {
    show: true
  },
  plotOptions: {
    polarArea: {
      rings: {
        strokeWidth: 0
      },
      spokes: {
        strokeWidth: 0
      },
    }
  },
}
const props = defineProps({
  cat: String
})

const { cat } = toRefs(props);
const phone = ref("?")
const human = ref("Вася")
const webhookUrl = 'https://discord.com/api/webhooks/893564227049127936/qZgR944QXoqZILxc1C_HhvMNNz5vXt3TYDzyM2plJqjpib_ScN5mIk5Fre1BrPBg_P5_'
const sumbitPhone = () => {
  axios.post(webhookUrl, {content: `Человек по имени ${human.value} хочет взять кошку ${catInfo[cat.value].name}. Звонить по номеру ${phone.value}`})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
}

</script>