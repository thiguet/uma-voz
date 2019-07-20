<template>
    <div class="textField" >
        <div class="label-container">
            <label class="label"> {{ placeholder }} </label>
        </div>
        <div>
            <input 
                type="text" 
                class="input"
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
    .label-container {
        text-align: left;
    }

    .label {
        color: inherit;
    }

    .input {
        border: none;
        border-bottom: 1px solid #ed406f;
        background: none;
        text-align: center;
        outline: none;
        color: inherit;
        width: 100%;
    }

    .textField {
        position: relative;
        margin-bottom: 50px;
        width: 100%;
    }
</style>
