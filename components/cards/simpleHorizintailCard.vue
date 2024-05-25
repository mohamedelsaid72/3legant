<template>
  <div
    class="bg-neutral_03 w-full h-full flex items-end p-5 justify-between max-h-[319px]"
  >
    <div class="basis-1/2">
      <p class="text-neutral_07 text-h5_size">{{ category }}</p>
      <ArrowLink :link="'shop'" :title="'Shop Now'" />
    </div>
    <div
      class="relative flex items-center justify-center overflow-hidden w-full h-full basis-1/2"
    >
      <img
        width="100%"
        height="100%"
        class="object-contain"
        :src="image"
        alt="product image"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  category: String,
  image: String,
});
</script>

<style lang="scss" scoped></style>
