import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from '~/plugins'

import '@unocss/reset/tailwind.css'
import 'uno.css'

const app = createApp(App)

setupPlugins(app)

app.mount('#app')
