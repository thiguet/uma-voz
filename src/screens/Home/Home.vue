<template>
    <div class="home-container">
        <my-span :label="label"/>
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
        color: #A53860;
        margin-top: 10%;
        padding: 20px 0px;
    }
    
    @media (max-height: 640px) {
        .home-container {
            margin-top: 25%;
        }    
    }

    
</style>