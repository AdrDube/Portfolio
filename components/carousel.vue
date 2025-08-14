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

    infCarousel.style.animation = "move 40s linear infinite";
    }
}); 

</script>
 
<template>
 <div ref="carouselContainer" class="carousel flex overflow-hidden whitespace-nowrap gap-3 h-50 mx-auto w-70 sm:w-160">
    <div ref="carousel" class="carousel-images flex gap-3">

      <img class="rounded-2xl -rotate-3 w-50" src="https://www.planetware.com/wpimages/2019/11/canada-in-pictures-beautiful-places-to-photograph-morraine-lake.jpg" alt="Carasoul Image 1">

      <img class="rounded-2xl rotate-3 w-50" src="https://variety.com/wp-content/uploads/2021/07/Band-Geeks-1.jpg?w=1000&h=667&crop=1" alt="Carasoul Image 2">

      <img class="rounded-2xl -rotate-3 w-50" src="https://pittnews.com/wp-content/uploads/2022/01/PittNewsSpongebob-778x900.jpg" alt="Carasoul Image 3">

      <img class="rounded-2xl rotate-3 w-50" src="https://www.denofgeek.com/wp-content/uploads/2024/07/dog-lead-spongebob-bit-players.jpg?fit=1200%2C675" alt="Carasoul Image 4">

      <img class="rounded-2xl -rotate-3 w-50" src="https://img10.hotstar.com/image/upload/f_auto,q_auto/sources/r1/cms/prod/2159/1736416462159-i" alt="Carasoul Image 5">

    </div>
</div>

</template>

<style>

.carousel{
  -webkit-mask: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent);
  mask: linear-gradient(90deg, transparent, #fff 10%, #fff 90%, transparent);
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
