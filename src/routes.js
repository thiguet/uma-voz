import Home from "@/screens/Home/Home.vue";
import About from "@/screens/About/About.vue";
import Poems from "@/screens/Poems/Poems.vue";
import PoemDisplay from "@/screens/PoemDisplay/PoemDisplay.vue";
import AddPoem from "@/screens/AddPoem/AddPoem.vue";

const routes = [
    { 
        path: '/home', 
        component: Home,
        name: "home",
        label: "Início",
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
        name: "poems",
        label: "Poemas",
        props: {
            default: true,
            itemsPerRow: window.document.body.offsetWidth > 600 ? 3
                          : 1
        },
        isVisible: true
    },
    {
        path: '/poem/:id', 
        component: PoemDisplay,
        name: "poem",
        isVisible: false
    }    ,
    {
        path: '/add-poem', 
        component: AddPoem,
        name: "add-poem",
        label: 'New Poem',
        isVisible: false
    }    
];


export default routes;