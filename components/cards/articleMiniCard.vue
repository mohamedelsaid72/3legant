<template>
  <div>
    <div
      class="flex items-center justify-center w-[311px] h-[283px] sm:w-[375px] sm:h-[325px] mb-5 overflow-hidden"
    >
      <img
        width="100%"
        height="100%"
        src="/Paste image.png"
        alt="article image"
        class="object-cover"
      />
    </div>
    <p class="text-h7_size text-neutral_06 mb-3">Lorem ipsum</p>
    <ArrowLink :link="'articles'" :title="'Read More'" />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
