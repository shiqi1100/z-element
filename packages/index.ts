import type { App } from 'vue'
import { Button } from './components/button'
import { Table } from './components/table'

const components = [Button, Table]

export default {
  install(app: App) {
    components.forEach((comp) => {
      app.use(comp)
    })
  }
}
