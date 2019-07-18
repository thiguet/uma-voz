<template>
    <div class="about-container">
        <p v-for="(paragraph, i) in paragraphs" 
                  :key="i" >
            {{ paragraph }}
        </p>
    </div>    
</template>

<script>
import { aboutInfo } from '@/screens/About/aboutData.js';

export default {
    name : "about",
    data() {
        return ({
            title: aboutInfo.title,
            info: aboutInfo.info,
            paragraphs: aboutInfo.paragraphs
        });
    }
}
</script>

<style>
    .about-container {
        margin-top: 0px;
        width: 80%;
        padding: 0px 10%;
    }
    .about-container p {
        margin-top: 40px;
        font-size: 30px;
    }
    .about-container p {
        letter-spacing: 3px;
        animation: mymove 6s infinite;
    }
    
    .about-container p:nth-child(odd) {
        animation-delay: 2s;
        color: #A53860;
    }

    .about-container p:nth-child(even) {
        color: #DA627D;
    }

    @keyframes mymove {
        25% {
            letter-spacing: 4px;
            transform: rotate(4deg);
        }
        75% {
            letter-spacing: 4px;
            transform: rotate(-4deg);
        }
    }
</style>