<template>
  <div
    class="relative bg-neutral_03 flex flex-col gap-3 overflow-hidden max-h-[664px]"
  >
    <div class="m-10 overflow-hidden">
      <p class="text-neutral_07 text-h5_size">Living Room</p>
      <ArrowLink :link="'shop'" :title="'Shop Now'" />
      <div
        class="image-container relative flex items-center justify-center overflow-hidden w-full pt-6"
      >
        <img
          loading="lazy"
          width="100%"
          height="100%"
          class="object-contain max-w-[400px]"
          src="/simple_card_img.png"
          alt="product image"
        />
      </div>
    </div>
  </div>
</template>
