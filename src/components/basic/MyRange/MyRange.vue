<template>    
    <div>
        <label>
            <span>Volume</span>
            <input type="range" id="start" name="volume"
                min="0" max="20" />
        </label>
    </div>
</template>

<script>
export default {
    name: "MyRange"
}
</script>

<style>

input[type=range] {
    background: none;
    border: none;
    width: 100%;
    border-bottom: 1px solid #333;
    -webkit-appearance: none;
    -moz-appearance: none;
    outline: none;
    cursor: pointer;
    
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #333;; 
  border-radius: 120%;
  height: 24px;
  width: 24px;
  background: none;
  cursor: pointer;
  margin-top: 0px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
}

</style>
