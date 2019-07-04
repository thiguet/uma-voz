<template>
    <div class="poems-container">
        <table>
            <thead></thead>
            <tbody>
                <tr v-for="(groupedPoems, i) in getPoemsLines(poems)"
                    :key="i">
                    <td v-for="(poem, j) in groupedPoems"
                        :key ="j">
                        {{ poem }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
export default {
    name : "poems",
    data () {
        return ({
            poems: [1, 2, 3, 4]
        });
    },
    methods: {
        getPoemsLines(poems) {
            return poems.map((poem, i) => poems.slice((i/3)*3, (i/3)*3 + 3) );
        }
    }
}
</script>

<style>
    .poems-container {
        width: 80%;
        padding: 280px 10%;
    }
</style>