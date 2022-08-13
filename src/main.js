import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'echarts'
import TopBar from "@/components/TopBar";
import VueCookies from 'vue-cookies';
import {createPinia} from 'pinia'

const app = createApp(App)

app.config.globalProperties.$cookies = VueCookies;
app.component('TopBar', TopBar)
    .use(router)
    .use(ElementPlus)
    .use(createPinia())
    .mount('#app')

console.log(process.env.VUE_APP_NAME)
console.log(process.env.VUE_APP_URL)
console.log(process.env.VUE_APP_STATIC, typeof process.env.VUE_STATIC)