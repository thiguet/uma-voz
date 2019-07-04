<template>
    <div class="select-container">
        <select class="select">
            <option class="option" v-for="option in options"
                    :key="option.label"> 
                {{ option.label }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "MySelect",
    props: {
        options: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.select-container {
    margin-bottom: 200px;
}

.select {
    background: none;
    outline: none;
    border-radius: 100px;
    padding: 10px 20px;
    -webkit-appearance: none;
    -moz-appearance: none;
    font-family: inherit;
}

.option {
    background: none;
    outline: none;
    border: none;
}

</style>
