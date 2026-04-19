import App from './src/App.jsx'
import { initHandlers } from './src/core/handlers.js'
import render from './src/core/render.js'
import { mountRoute } from './src/core/router.js'

render('#app', App())
mountRoute()
initHandlers()
