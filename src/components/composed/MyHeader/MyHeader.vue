<template>
    <header>
        <my-navbar :routes="routes"></my-navbar>
    </header>
</template>

<script>
import MyNavbar from "@/components/basic/MyNavbar/MyNavbar.vue"

export default {
    name: "my-header",
    components: {
        MyNavbar
    },
    props: {
        routes: {
            type: Array,
            required: true
        }
    }    
}
</script>

<style scoped>
    header {
        position: fixed;
        top: 0px;
        left: 0px;
        padding: 20px;
        width: 100%;
    }
</style>