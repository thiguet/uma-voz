<template>
    <div class="table-container">
        <table>
            <thead>
                <td v-for="col in getCols(tableData)"
                    :key="col">
                    {{ col }}
                </td> 
            </thead>
            <tr v-for="row in tableData"
                :key="row">
                <td v-for="col in getCols(tableData)"
                    :key="row[col]">
                    {{row[col]}}
                </td>
            </tr>
        </table>
    </div>    
</template>

<script>
Object.assign(Array.prototype, () => {
    let arr = this.concat();
    for(let i = 0; i < arr.length; ++i) {
        for(let j = i + 1; j < arr.length; ++j) {
            if(arr[i] === arr[j])
                arr.splice(j--, 1);
        }
    }

    return arr;
});

export default {
    name: "my-table",
    props: {
        tableData: {
            type: Array,
            required: true
        }
    },
    data() {
        return ({
            getCols : (tableData) => {
                return tableData
                        .map(next => Object.keys(next) )
                        .reduce((acc, next) => 
                            acc.concat(next) 
                        ).unique();
            },
            order : (tableData) => {
                return tableData.sort();
            }
        })
    }
}
</script>

<style scoped>
    .table-container table {
        padding: 5px;
    }

    .table-container table tr {
        border: 6px solid #333;
    }
    
    .table-container table thead td {
        font-weight: 700;
    }
    
    .table-container table thead td,
    .table-container table tr td {
        padding: 15px;
        border: 1px solid #333;
        border-radius: 100px;
    }   

</style>
