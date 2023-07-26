import type { App } from 'vue'
import _Button from './src/button.vue'

_Button.install = (app: App): void => {
  app.component(_Button.name, _Button)
}

type IWithInstall<T> = T & { install(app: App): void }

export const Button: IWithInstall<typeof _Button> = _Button
