<template>    
    <div class="span-container">
        <span :label="label" :style="style"> {{label}} </span>
    </div>
</template>

<script>
export default {
    name: "my-span",
    props: {
        label: {
            type: String,
            required: true
        },
        fontSize: {
            type: String
        }
    },
    computed: {
        style() {
            return "font-size: " + (this.fontSize ? this.fontSize : "16px");
        }
    }
}
</script>

<style>
</style>
