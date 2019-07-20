<template>
    <div class="poems-container">
        <table class="poems-table" :key="itemsPerRow">
            <thead></thead>
            <tbody>
                <tr v-for="(poem, i) in poems"
                    :key="i">
                    <td>
                        <router-link class="poem-link" :to="'/poem/' + poem.title">
                            {{ poem.title }}
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>

<script>
import { getPoems } from '@/screens/Poems/PoemsController.js';
import { init } from "@/services/FirebaseService.js";

init();

export default {
    name : "poems",
    props: {
        itemsPerRow: {
            type: Number
        }
    },
    data () {
        return ({
            poems: []
        });
    },
    created() {
        getPoems(snap => {
            const poems = Object.values(snap.val());
            this.poems = poems;
        });
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