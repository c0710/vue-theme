// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Theme from './plugins/Theme/index'

Vue.use(Theme, {
    themePath: `/static/theme.cs22s`,
    colors: [
        {
            name: 'theme1',
            primary: '#B7A3FF',
            secondary: '#879FFF',
            thirdly: '#8981D8'
        }, {
            name: 'theme2',
            primary: '#FDC5C5',
            secondary: '#F070A0',
            thirdly: '#E7829F'
        }, {
            name: 'theme3',
            primary: '#414D6C',
            secondary: '#2D1E3C',
            thirdly: '#423C50'
        }
    ],
    afterChange: (curThemeName) => {
        console.log(`current theme is ${curThemeName}`)
    }

})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
