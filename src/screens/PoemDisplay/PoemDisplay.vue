<!-- pd- stands form poem display -->
<template>
    <article>
        <div class="pd-container">
            <h1 class="pd-title"> {{ title }} </h1>
            <div class="pd-paragraphs-container">
                <pre v-for="(p, i) in paragraphs"
                    :key="i">{{ p }}</pre>
            </div>
        </div>
    </article>
</template>

<script>
export default {
    name: 'poem-display',
    data() {
        return ({
            title: '',
            paragraphs: []
        })
    },
    created() {
        const poem = this.$store
                    .getters
                    .poems
                    .filter(poem => poem.id === this.$route.params.id)[0];
        this.title = poem.title;
        this.paragraphs = poem.paragraphs;
    }
}
</script>

<style>
.pd-container {
    width: 80%;
    margin-left: 10%;
}

.pd-title {
    font-size: 40px;
    transition: all 0.4s ease-in-out; 
    margin-top: 0;
}

.pd-title:hover  {
    transform: scale(1.2);
}

.pd-paragraphs-container {
    margin-left: 10px;
    margin-top: 40px;
    width: 100%;
}

.pd-paragraphs-container pre {
    width: 100%;
    font-family: inherit;
    font-size: 20px;
    padding: 5px 0;
    text-align: start;
    line-height: 35px;
    overflow-x: auto;
    overflow-wrap: break-word;
    hyphens: auto;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
}


@media (min-width: 430px) {
    .pd-paragraphs-container {
        margin-left: 16%;
    }
}

@media (min-width: 484px) {
    .pd-paragraphs-container {
        margin-left: 20%;
    }
}

@media (min-width: 705px) {
    .pd-container {
        width: 60%;
        margin-left: 20%;
    }
    .pd-paragraphs-container {
        margin-left: 20%;
    }
}

@media (min-width: 1000px) {
    .pd-paragraphs-container {
        margin-left: 30%;
    }
}

@media (min-width: 1300px) {
    .pd-paragraphs-container {
        margin-left: 34%;
    }
}

</style>
