import app from './app.js'
import router from './router.js'

let vue = new Vue({
    el : '#app',
    router,
    template : '<app/>',
    components : {
        app
    }
})
