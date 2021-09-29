import Home from './pages/Home.vue'

import News from './pages/News.vue'
import Shelter from './pages/Shelter.vue'
import About from './pages/About.vue'
import Video from './pages/Video.vue'
import Dreams from './pages/Dreams.vue'
import StrayAnimals from './pages/StrayAnimals.vue'
import Adopt from './pages/Adopt.vue'
import Cat from './pages/Cat.vue'
import AtHomeNow from './pages/AtHomeNow.vue'
import Articles from './pages/Articles.vue'
import Help from './pages/Help.vue'
import Volunteers from './pages/Volunteers.vue'
import Sponsors from './pages/Sponsors.vue'
import Contacts from './pages/Contacts.vue'

export default [
  {path: '/', component:  Home},

  {path: '/news', component:  News},

  {path: '/shelter', component:  Shelter},
  {path: '/about', component:  About},
  {path: '/video', component:  Video},
  {path: '/dreams', component:  Dreams},
  
  {path: '/stray_animals', component:  StrayAnimals},
  {path: '/adopt', component:  Adopt},
  {path: '/adopt/cats/:cat', component:  Cat, props: true},
  {path: '/at_home_now', component:  AtHomeNow},
  {path: '/articles', component:  Articles},
  
  
  {path: '/help', component:  Help},
  {path: '/volunteers', component:  Volunteers},
  {path: '/sponsors', component:  Sponsors},

  {path: '/contacts', component:  Contacts},

  {path: '/:pathMatch(.*)*', component: { template: '<h1>404</h1>' }}
]