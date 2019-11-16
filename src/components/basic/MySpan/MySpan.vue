<template>  
  <article>  
    <div class="span-container">
        <span v-for="(letter, i) in label" 
              :key="i" >
            {{ letter }}
        </span>
    </div>
  </article>
</template>

<script>
export default {
    name: "my-span",
    props: {
        label: {
            type: String,
            required: true
        },
        fontSize: {
            type: String
        }
    }
}
</script>

<style>

.span-container span {
  position: relative;
  font-size: 40px;
  top: 20px;
  display: inline-block;
  padding: 5px;
  animation: bounce 4.5s ease-in-out infinite;
  font-weight: 500;
}

.span-container span:nth-child(1) {
    animation-delay: 0.4s;
}
.span-container span:nth-child(2) {
    animation-delay: 0.5s;
}
.span-container span:nth-child(3) {
    animation-delay: 0.6s;
}
.span-container span:nth-child(4) {
    animation-delay: 0.7s;
}
.span-container span:nth-child(5) {
    animation-delay: 0.8s;
}
.span-container span:nth-child(6) {
    animation-delay: 0.9s;
}
.span-container span:nth-child(7) {
    animation-delay: 1s;
}

@keyframes bounce {
  0% {
    top: 20px;
    text-shadow: 44px 36px 2px #ED376A;
  }
  10% {
    top: -100px;
    text-shadow: 6px 3px 7px #ED376A;
  }
  35% {
    top: 20px;
  }
  80% {
    text-shadow: 44px 36px 1px #ED376A;
  }
  100% {
    top: 20px;     
    text-shadow: 44px 36px 1px #ED376A;
  }
}

</style>
