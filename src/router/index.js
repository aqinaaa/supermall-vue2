import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('../views/home/home.vue')
const catagory = () =>
    import ('../views/catagory/catagory.vue')
const cart = () =>
    import ('../views/cart/cart.vue')
const profile = () =>
    import ('../views/profile/profile.vue')

// 安装插件
Vue.use(VueRouter)

const routes = [{
    path: '',
    redirect: '/home'
}, {
    path: '/home',
    component: home
}, {
    path: '/profile',
    component: profile
}, {
    path: '/catagory',
    component: catagory
}, {
    path: '/cart',
    component: cart
}]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router