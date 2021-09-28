import Home from './pages/Home.vue'

import News from './pages/News.vue'
import Help from './pages/Help.vue'
import Video from './pages/Video.vue'
import Dreams from './pages/Dreams.vue'

import Adopt from './pages/Adopt.vue'
import Cat from './pages/Cat.vue'
import AtHomeNow from './pages/AtHomeNow.vue'
import Articles from './pages/Articles.vue'

import About from './pages/About.vue'
import Volunteers from './pages/Volunteers.vue'
import Sponsors from './pages/Sponsors.vue'

import Contacts from './pages/Contacts.vue'

export default [
  {path: '/', component:  Home},

  {path: '/news', component:  News},
  {path: '/help', component:  Help},
  {path: '/video', component:  Video},
  {path: '/dreams', component:  Dreams},
  
  {path: '/adopt', component:  Adopt},
  {path: '/adopt/cats/:cat', component:  Cat, props: true},
  {path: '/at_home_now', component:  AtHomeNow},
  {path: '/articles', component:  Articles},

  {path: '/about', component:  About},
  {path: '/volunteers', component:  Volunteers},
  {path: '/sponsors', component:  Sponsors},

  {path: '/contacts', component:  Contacts},

  {path: '/:pathMatch(.*)*', component: { template: '<h1>404</h1>' }}
]