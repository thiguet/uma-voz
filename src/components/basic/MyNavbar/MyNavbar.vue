<template>
    <nav class="my-nav">
        <ul>
            <li v-for="route in routes" 
                :key="route.path" >
                <router-link class="nav-items" :to="route.path">
                    {{route.label}}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "MyNavbar",
    props: {
        routes: {
            type: Array,
            required: true             
        }
    }
}
</script>

<style>
.my-nav ul {
    list-style-type: none;
}

.my-nav ul li {
    padding: 10px;
    display: inline;
    text-align: center;
}

.nav-items {
    text-decoration: none;
    color: inherit;
}
</style>
