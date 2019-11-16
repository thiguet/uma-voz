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
    margin-left: 0;
    padding-inline-start: 0px;
}

.my-nav ul li {
    padding: 10px;
    display: inline;
    text-align: center;
    font-size: 24px;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}

.my-nav ul li:hover {
    opacity: 0;
}

.nav-items {
    text-decoration: none;
    color: #ed406f;
}
</style>
