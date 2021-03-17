import {
    createApp 
} from 'vue'
import Dev from './serve.vue'
import VueTwZipCodeSelector from '@/entry.esm'

const app = createApp(Dev)
app.use(VueTwZipCodeSelector)

app.mount('#app')
