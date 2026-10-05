// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
     theme: {
    defaultTheme: 'light', // Tema por defecto ('light' o 'dark')
    themes: {
      light: {
        dark: false,
        colors: {
          background: '#FFFFFF',
        },
      },
    },
  },
  })
  app.vueApp.use(vuetify)
})
