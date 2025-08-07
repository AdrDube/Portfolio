<script setup lang="ts">

const carousel = ref(null)
const carouselContainer = ref(null)
 
onMounted(async () => {
  await nextTick()
  if (carousel.value) { 
    const infCarousel = carousel.value;
    const items = Array.from(infCarousel.children);
    items.forEach(item => {
        const duplicatedItem = item.cloneNode(true);
        infCarousel.appendChild(duplicatedItem);
      });

    infCarousel.style.animation = "move 30s linear infinite";
    }
}); 

</script>
 
<template>
 <div ref="carouselContainer" class="carousel flex overflow-hidden whitespace-nowrap gap-3 h-50 mx-auto w-70 sm:w-160">
    <div ref="carousel" class="carousel-images flex gap-3">

      <img class="rounded-2xl -rotate-3" src="https://picsum.photos/468/468?random=1" alt="Random Image 1">

      <img class="rounded-2xl rotate-3" src="https://picsum.photos/468/468?random=2" alt="Random Image 2">

      <img class="rounded-2xl -rotate-3" src="https://picsum.photos/468/468?random=3" alt="Random Image 3">

      <img class="rounded-2xl rotate-3" src="https://picsum.photos/468/468?random=4" alt="Random Image 4">

      <img class="rounded-2xl -rotate-3" src="https://picsum.photos/468/468?random=5" alt="Random Image 5">

      <img class="rounded-2xl rotate-3" src="https://picsum.photos/468/468?random=6" alt="Random Image 6">

    </div>
</div>

</template>

<style>

.carousel{
  -webkit-mask: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent);
}

@keyframes move {
   0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-240%);
  }
}
</style>
