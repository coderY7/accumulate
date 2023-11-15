import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'

// 通用字体
import 'vfonts/Lato.css'
// 等宽字体
import 'vfonts/FiraCode.css'



createApp(App).use(naive).mount('#app')
