import Index from './pages/Index.vue'
import Adopt from './pages/Adopt.vue'

export default {
  '/': Index,
  '/adopt': Adopt,
  '/test': { template: '<h1>Test</h1>'},
  '/:pathMatch(.*)*': { template: '<h1>404</h1>'}
}