<template>
    <div class="black-home-container">
        <MyRange />
        <my-span label="teste" fontSize="30px" />
    </div>    
</template>

<script>
import MyRange from "@/components/basic/MyRange/MyRange.vue";
import MySpan from "@/components/basic/MySpan/MySpan.vue";

const tableData = [
    {
        Id: 1,
        Name: "Teste",
        Value: "Jooj"
    },
    {
        Id: 1,
        Name: "Teste",
        Batata: "Jooj"
    }
];

export default {
    name : "BlackHome",
    components: { 
        MyRange,
        MySpan
    },
    data() {
        return ({
            tableData
        });
    }
}
</script>

<style>
    .black-home-container {
        width: 80%;
        padding: 280px 10%;
    }
</style>