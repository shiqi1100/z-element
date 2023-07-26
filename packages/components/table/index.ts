import type { App } from 'vue'
import _Table from './src/table.vue'

_Table.install = (app: App): void => {
  app.component(_Table.name, _Table)
}

type IWithInstall<T> = T & { install(app: App): void }

export const Table: IWithInstall<typeof _Table> = _Table
