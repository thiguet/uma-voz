<template>
    <div class="poems-container">
        <table class="poems-table" :key="itemsPerRow">
            <thead></thead>
            <tbody>
                <tr v-for="(groupedPoems, i) in getPoemsLines()"
                    :key="i">
                    <td v-for="(poem, j) in groupedPoems"
                        :key ="j" >
                        <router-link class="poem-link" :to="'/poem/' + poem.name">
                            {{ poem.label }}
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
import { poems } from './poemsData.js';

export default {
    name : "poems",
    props: {
        itemsPerRow: {
            type: Number
        }
    },
    data () {
        return ({
            poems
        });
    },
    methods: {
        getPoemsLines() {
            let rows = [];
            const poemsAux = this.poems; 

            for(let i = 0 ; i < this.poems.length ; i++ ) {
                rows.push(
                    poemsAux.slice(
                        i * this.itemsPerRow, 
                        (i + 1) * this.itemsPerRow 
                    )
                );
            }

            return rows;
        }
    }
}
</script>

<style>
    .poems-container {
        margin-left: 10%;
        width: 80%;
         -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }

    .poems-table {
        border-spacing: 30px;
        table-layout: fixed;
        width: 100%;
        cursor: pointer;
    }

    .poems-table tbody tr td {
        width: 33%;
        height: 100%;
        padding: 15% 0px;
        border-radius: 30px;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        font-size: 30px;
        cursor: pointer;
    }

    .poems-table tbody tr td:hover {
        transform: scale(1.2);
    }

    .poem-link {
        text-decoration: none;
        color: #ed406f;
    }

</style>