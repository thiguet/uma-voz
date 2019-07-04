<template>
    <div class="textField" >
        <div class="label-container">
            <label class="label"> {{ placeholder }} </label>
        </div>
        <div>
            <input 
                type="text" 
                class="input"
                v-model="value" />
        </div>
    </div>    
</template>

<script>
export default {
    name: "TextField",
    props: {
        onChange: Function,
        onBlur: Function,
        placeholder: String,
        id: String,
        value: String
    }
}
</script>

<style scoped>
    

    .label-container {
        text-align: left;
    }

    .label {
        color: #ddd;
    }

    .input {
        border: none;
        border-bottom: 1px solid purple;
        background: none;
        outline: none;
        font-size: 16px;
        color: #ddd;
    }

    .textField {
        margin-bottom: 50px;
    }
</style>
