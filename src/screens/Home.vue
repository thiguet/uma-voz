<template>
    <div class="home-container">
        <my-span :label="label" fontSize="30px" />
    </div>    
</template>

<script>

import MySpan from "@/components/basic/MySpan/MySpan.vue";

const label = "Uma Voz";

export default {
    name : "Home",
    components: {
        MySpan
    },
    data() {
        return ({
            label
        });
    }
}
</script>

<style>
    .home-container {
        padding: 250px 100px;
    }

    @media (max-width: 600px) {
        .home-container {
            padding: 300px 100px;
        }
    }
</style>