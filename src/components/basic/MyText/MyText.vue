<!-- mt stands for my text -->
<template>
    <div class="mt-container">
        <div class="mt-label-container">
            <label class="mt-label"> {{ placeholder }} </label>
        </div>
        <div>
            <input 
                type="text" 
                class="mt-input"
                v-bind:value="value"
                v-on:input="$emit('input', $event.target.value)" 
                :style="style"/>
        </div>
    </div>    
</template>

<script>
export default {
    name: "my-text",
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        onChange: Function,
        onBlur: Function,
        placeholder: String,
        id: String,
        value: String,
        fontSize: String
    },
    computed: {
        style() {
            return 'font-size: ' + this.fontSize + ';' ;
        }
    },
}
</script>

<style scoped>
    .mt-label-container {
        text-align: left;
    }

    .mt-label {
        color: inherit;
    }

    .mt-input {
        border: none;
        border-bottom: 1px solid #ed406f;
        background: none;
        text-align: center;
        outline: none;
        color: inherit;
        width: 100%;
    }

    .mt-container {
        position: relative;
        margin-bottom: 50px;
        width: 100%;
    }
</style>
