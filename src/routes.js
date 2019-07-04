import Home from "@/screens/Home.vue";
import BlackHome from "@/screens/BlackHome.vue";
import Poems from "@/screens/Poems.vue";

const routes = [
    { 
        path: '/home', 
        component: Home,
        name: "home",
        label: "Home"
    },
    { 
        path: '/black-home', 
        component: BlackHome,
        name: "blackhome",
        label: "Black Home"
    },
    { 
        path: '/poems', 
        component: Poems,
        name: "poems",
        label: "Poems"
    }
];


export default routes;