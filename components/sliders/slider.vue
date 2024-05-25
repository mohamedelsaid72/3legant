<template>
  <div class="w-full md:h-[536px] h-[304px] overflow-hidden relative">
    <button
      type="button"
      @click="slideLeft"
      class="bg-white w-[48px] h-[48px] rounded-full absolute top-[50%] left-[5%] translate-x-[-50%] translate-y-[-50%] hidden md:flex items-center justify-center cursor-pointer z-10"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66669 16H25.3334"
          stroke="#141718"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66669 16L14.6667 24"
          stroke="#141718"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.66669 16L14.6667 8"
          stroke="#141718"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <transition-group name="slide">
      <div
        v-for="slide in slides"
        :key="slide.id"
        class="slide w-full h-full absolute top-0"
        v-show="slide.id === currentSlide"
      >
        <img
          class="w-full h-full"
          width="100%"
          height="100%"
          :src="slide.src"
          alt=""
        />
      </div>
    </transition-group>
    <button
      type="button"
      @click="slideRight"
      class="bg-white hidden w-[48px] h-[48px] rounded-full absolute top-[50%] right-[5%] translate-x-[50%] translate-y-[-50%] md:flex items-center justify-center cursor-pointer z-10"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.66666 16H25.3333"
          stroke="#141718"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3333 24L25.3333 16"
          stroke="#141718"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.3333 8L25.3333 16"
          stroke="#141718"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<script setup>
const slides = ref([
  {
    id: 1,
    src: "/slider_image_1.png",
  },
  {
    id: 2,
    src: "/slider_image_2.png",
  },
  {
    id: 3,
    src: "/slider_image_3.png",
  },
]);
const currentSlide = ref(1);
const slideRight = () => {
  currentSlide.value = (currentSlide.value % slides.value.length) + 1;
};

const slideLeft = () => {
  if (currentSlide.value === 1) {
    currentSlide.value = slides.value.length;
  } else {
    currentSlide.value--;
  }
};

onMounted(() => {
  setInterval(() => {
    slideRight();
  }, 3000);
});
</script>

<style lang="scss" scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.6s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
.slide-enter-to,
.slide-leave-from {
  opacity: 1;
}
</style>
