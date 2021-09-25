import Home from './pages/Home.vue'

import News from './pages/News.vue'
import Help from './pages/Help.vue'
import Video from './pages/Video.vue'
import Dreams from './pages/Dreams.vue'

import Adopt from './pages/Adopt.vue'
import AtHomeNow from './pages/AtHomeNow.vue'
import Articles from './pages/Articles.vue'

import About from './pages/About.vue'
import Volunteers from './pages/Volunteers.vue'
import Sponsors from './pages/Sponsors.vue'

export default {
  '/': Home,

  '/news': News,
  '/help': Help,
  '/video': Video,
  '/dreams': Dreams,
  
  '/adopt': Adopt,
  '/at_home_now': AtHomeNow,
  '/articles': Articles,

  '/about': About,
  '/volunteers': Volunteers,
  '/sponsors': Sponsors,

  '/:pathMatch(.*)*': { template: '<h1>404</h1>'}
}