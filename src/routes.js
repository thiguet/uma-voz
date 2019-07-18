import Home from "@/screens/Home/Home.vue";
import About from "@/screens/About/About.vue";
import Poems from "@/screens/Poems/Poems.vue";
import PoemDisplay from "@/screens/PoemDisplay/PoemDisplay.vue";

const routes = [
    { 
        path: '/home', 
        component: Home,
        name: "home",
        label: "Home",
        isVisible: true
    },
    { 
        path: '/about', 
        component: About,
        name: "about",
        label: "Sobre",
        isVisible: true
    },
    { 
        path: '/poems', 
        component: Poems,
        props: {
            default: true,
            itemsPerRow: window.document.body.offsetWidth > 600 ? 3
                          : 1
        },
        name: "poems",
        label: "Poemas",
        isVisible: true
    },
    {
        path: '/poem/:id', 
        component: PoemDisplay,
        name: "poem",
        isVisible: false
    }    
];


export default routes;