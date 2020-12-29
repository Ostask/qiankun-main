import Home from "../components/HelloWorld.vue"
import Login from "../components/login.vue"

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

export default routes