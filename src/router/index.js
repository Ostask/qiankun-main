import Home from "../components/HelloWorld.vue"
import Login from "../components/login.vue"
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/login",
        name:"Login",
        component:Login
    }
]

export default new VueRouter({
    routes
})