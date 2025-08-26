<script setup lang="ts">

const carousel = ref<HTMLDivElement | null>(null)
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
    infCarousel.style.animation = "move 60s linear infinite";
    }
});

</script>
 
<template>
 <div ref="carouselContainer" class="carousel dark:carousel-dark flex overflow-hidden whitespace-nowrap gap-3 h-35 sm:h-50 mx-auto w-70 sm:w-160">
    <div ref="carousel" class="carousel-images flex gap-3">

      <img class="rounded-2xl -rotate-3 w-35 sm:w-50" src="/gsureg.png" alt="Carasoul Image 1">

      <img class="rounded-2xl -rotate-3 w-35 sm:w-50" src="/gsureg2.png" alt="Carasoul Image 2">

      <img class="rounded-2xl rotate-3 w-35 sm:w-50" src="/classync3.png" alt="Carasoul Image 3">

      <img class="rounded-2xl -rotate-3 w-35 sm:w-50" src="/portfolio.png" alt="Carasoul Image 4">

    </div>
</div>

</template>

<style>

.carousel{
  -webkit-mask: linear-gradient(90deg, transparent, #fff 30%, #fff 70%, transparent);
  mask: linear-gradient(90deg, transparent, #fff 30%, #fff 70%, transparent);
}

.carousel-dark {
  -webkit-mask: linear-gradient(90deg, transparent, #000 40%, #000 60%);
  mask: linear-gradient(90deg, transparent, #000 40%, #000 60%);
}

@keyframes move {
   0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-130%);
  }
}
</style>
