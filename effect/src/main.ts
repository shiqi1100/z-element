import { createApp } from 'vue'

// @ts-ignore: my-element
import MyElement from 'my-element/index'
import 'my-element/theme/index.scss'

// 打包后测试
// import MyElement from '../../dist/my-element/es'
// import '../../dist/my-element/theme/index.css'

// 模拟装包环境
// @ts-ignore: my-element
// import MyElement from 'my-element'
// import 'my-element/theme/index.css'

import App from './App.vue'

const app = createApp(App)

app.use(MyElement)

app.mount('#app')
