<!-- ap- stands for "add-poem" shorthanded -->
<template>
    <article>
        <div class="ap-container">
            <div class="ap-title">
                <input type="text"
                       v-model="title"
                       class="ap-input" />
            </div>
            <div class="ap-paragraphs-container">
                <textarea oninput='this.style.height = "";this.style.height = this.scrollHeight + "px"' 
                    class="ap-ct-textarea" 
                    v-on:keyup="addVerse"
                    v-for="(paragraph, i) in paragraphs" 
                    :key="i"
                    v-model="paragraphs[i]">
                </textarea>
            </div>
            <div class="ap-footer">
                <my-button 
                    label="Add"
                    :onClick="addParagraph">
                </my-button>
            </div>
            <div class="ap-footer">
                <my-button  
                    label="Save"
                    :onClick="savePoem">
                </my-button>
            </div>
        </div>
    </article>
</template>
<script>
import MyButton from "@/components/basic/MyButton/MyButton.vue"; 
import { addPoem } from "@/screens/AddPoem/AddPoemController.js";

export default {
    name: 'add-poem',
    data() {
        return ({
            paragraphs: ['asdasd'],
            title: ''    
        });
    },
    components: {
        MyButton        
    },
    methods: {
        addParagraph() {
            const aux = this.paragraphs;
            aux.push('');
            this.paragraphs = aux;
        },
        addVerse(evt) {
            if( evt.ctrlKey && 
                evt.key == 'Enter') {
                this.addParagraph();
            }
        },
        savePoem() {
            const data = {
                title: this.title,
                paragraphs: this.paragraphs
            };

            addPoem(data);
        }
    }
}
</script>

<style>
    .ap-ct-textarea {
        background: none;
        border: none;
        border-bottom: 1px dotted #ed406f;
        -webkit-appearance: none;
        width: 100%;
        resize: none;
        font-size: 20px;
        font-family: inherit;
        outline: none;
        color: inherit;
    }
    .ap-container {
        width: 80%;
        padding: 0px 10%; 
    }
    .ap-paragraphs-container {
        margin-bottom: 30px;
    }
    .ap-title {
        margin: 0px 0px 30px 0px; 
    }
    .ap-input {
        border: none;
        border-bottom: 1px solid #ed406f;
        background: none;
        text-align: center;
        outline: none;
        color: inherit;
        width: 100%;
        font-size: 40px;
    }

</style>
