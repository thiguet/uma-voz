<template>
    <div class="menu-container">
        <menu-item v-for="menuItem in menuItems" 
                   :key="menuItem" />        
    </div>
</template>

<script>
export default {
    name: "my-menu",
    props: {
        label: {
            type: String,
            required: true
        }
    },
    methods: {

    }
}
</script>

<style>
.menu-container {
    background: none;
}
</style>