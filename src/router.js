import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [{
        path: '/socketF',
        name: '发消息',
        component: () =>
            import ('./components/socket.vue')
    }, {
        path: '/socketJ',
        name: '接收消息',
        component: () =>
            import ('./components/socketJ.vue')
    }]
})