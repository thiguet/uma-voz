<template>
    <div class="checkbox-container">
        <label>
            <input type="checkbox" class="checkbox" checked/>
            {{ label }}
        </label>
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    props: {
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
.checkbox-container {
    background: none;
}

.checkbox {
    background: none;
    padding: 5px;
    border: 1px solid black;
}
</style>