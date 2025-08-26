<template>
     <UCarousel arrows v-slot="{ item }" :items="props.images" loop
          :ui="{
              controls: 'absolute inset-y-1/2 -inset-x-5 sm:inset-x-8 flex items-center',
          }"
          class="hover:scale-105 transition duration-700 ease-in-out">
          <img :src="item" class="rounded-3xl">
      </UCarousel>

</template>

<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  images: {
    type: Array,
    required: true
  }
})
</script>