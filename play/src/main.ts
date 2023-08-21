import { createApp } from 'vue'
import App from './App.vue'
import Icon from '@ksw/components/icon';
import '@ksw/theme-chalk/src/index.scss'


const app = createApp(App);
app.use(Icon);
app.mount('#app')