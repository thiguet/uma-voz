<template>
    <button class="button" v-on:click="onClick">
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
    .button {
        color: #dddddd;
        border: none;
        background-color: rgba(0,0,0,0.4);
        font-size: 16px;
        padding: 20px;
        border-radius: 100px;   
        outline: none; 
        cursor: pointer;
    }

    .button:hover {
        transform: translateY(4px);
        color: purple;
    }
</style>
