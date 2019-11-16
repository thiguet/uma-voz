<!-- mb stands for my button -->
<template>
    <button class="mb-input" v-on:click="onClick">
        {{ label }}
    </button>    
</template>

<script>
export default {
    name: "my-button",
    props: {
        label: String,
        onClick: {
            type: Function,
            required: true
        }
    }
}
</script>

<style>
    .mb-input {
        color: #dddddd;
        border: none;
        background-color: rgba(0,0,0,0.4);
        font-size: 16px;
        padding: 20px;
        border-radius: 100px;   
        outline: none; 
        cursor: pointer;
    }

    .mb-input:hover {
        transform: translateY(4px);
        color: purple;
    }
</style>
