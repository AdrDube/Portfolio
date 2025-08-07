<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'

const coins = ref<HTMLElement | null>(null)

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

onMounted(async () => {
  await nextTick()

  if (!coins.value) return

  const items = Array.from(coins.value.querySelectorAll('img'))
  let current = 0
  let img = items[current]

  while (true) {
  const img = items[current];
  img.classList.add('spinning');
  img.style.visibility = 'visible';
  await delay(6000);

  img.style.visibility = 'hidden';
  img.classList.remove('spinning');
  current = (current + 1) % items.length;
}
})
</script>

<template>
  <div>

  <div class ="coins flex items-center relative w-40 h-40" ref="coins">
    <a href="https://images3.boardingschoolreview.com/photo/593/IMG-Academy-6r5kz9j4u144kso44sw8800k0-1122.webp">
      <img class="rounded-full" src="https://cosmic-s3.imgix.net/d332de50-0b10-11ea-95fe-01afbd7f5f3b-nbpa.png" alt="Random Image 1" />
    </a>

    <a href="https://nbpa.com/">
      <img class="rounded-full w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJk75I53dGJ9D4C8HArRJTeNWqZY63rsrrpggmW0tUsM9f06uf_U_nSZ4KoNblGEzauc&usqp=CAU" 
           alt="Random Image 2" />
    </a>

    <a href="#">
      <img class="rounded-full w-full h-full" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Seal_of_the_Central_Intelligence_Agency.svg/2048px-Seal_of_the_Central_Intelligence_Agency.svg.png" 
           alt="Random Image 3" />
    </a>
  </div>



  </div>


</template>

<style scoped>
.coins img {
  position: absolute;
  visibility: hidden;
  top:10px;
  left:0;
}

.spinning {
  animation: spin 6s reverse linear;
}

@keyframes spin {
  0% {
    transform: rotateY(-90deg);
  }
  100% {
    transform: rotateY(90deg);
  }
}



</style>
