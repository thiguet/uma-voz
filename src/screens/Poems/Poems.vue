<template>
    <article>
        <div class="poems-container">
            <table  class="poems-table" 
                    :key="itemsPerRow">
                <thead></thead>
                <tbody>
                    <tr v-for="poem in this.$store.getters.poems"
                        :key="poem.id">
                        <td>
                            <router-link class="poem-link" :to="'/poem/' + poem.id">
                                {{ poem.title }}
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </article>    
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
    beforeCreate() {
        getPoems(snap => {
            const poems = 
                Object.keys(snap.val())
                      .map(key => 
                          Object.assign({'id': key}, snap.val()[key])
                      );
            this.$store.commit('getPoems', poems);
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
        padding: 30px 0px;
        border-radius: 30px;
        transition: all 0.4s ease-in-out;
        overflow: hidden;
        font-size: 40px;
        font-weight: 600;
        cursor: pointer;
    }

    .poems-table tbody tr td:hover {
        transform: scale(1.2);
    }

    .poem-link {
        text-decoration: none;
        color: #ed406f;
    }

    @media (max-width: 600px) {
        .poems-table tbody tr td {
            padding: 40px 0px;
        }        
    }

</style>