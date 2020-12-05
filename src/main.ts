import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'

import { FontAwesomeIcon } from '@/libs/icon'

require('@/assets/scss/global.scss')

const app = createApp(App)

app.use(router)

// global component
app.component('app-icon', FontAwesomeIcon)

app.mount('#app')
