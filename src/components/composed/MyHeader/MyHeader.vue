<template>
    <header class="my-header">
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
    .my-header {
        position: relative;
        padding: 30px 0px;
        width: 100%;
    }
</style>