<template>
  <div
    class="main-product-card w-[231px] sm:w-[262px] min-w-[231px] sm:min-w-[262px]"
  >
    <div class="w-full bg-neutral_03 p-4">
      <div class="flex justify-between mb-5">
        <div>
          <div
            class="p-1 bg-white rounded poppins-semibold text-body2_size mb-2 w-[67px] h-[24px] flex items-center justify-center"
          >
            <p>New</p>
          </div>
          <div
            class="bg-primary_green text-white text-caption2_size w-[67px] h-[24px] flex items-center justify-center rounded"
          >
            -50%
          </div>
        </div>
        <button
          @click="toggleFavorite"
          type="button"
          class="bg-white rounded-full p-2 w-[32px] h-[32px] flex items-center justify-center cursor-pointer"
        >
          <svg
            v-if="isFavorite"
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0002 2.18159C9.02692 1.24762 7.70557 0.673615 6.25016 0.673615C3.25862 0.673615 0.833496 3.09874 0.833496 6.09028C0.833496 11.3972 6.64211 14.3278 9.01165 15.3025C9.6498 15.565 10.3505 15.565 10.9887 15.3025C13.3582 14.3278 19.1668 11.3972 19.1668 6.09028C19.1668 3.09874 16.7417 0.673615 13.7502 0.673615C12.2948 0.673615 10.9734 1.24762 10.0002 2.18159Z"
              fill="black"
            />
          </svg>

          <svg
            v-else
            width="20"
            height="16"
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.577 3.76422C10.2546 4.07365 9.74545 4.07365 9.42301 3.76422L8.84601 3.2105C8.17065 2.56239 7.25829 2.16667 6.25001 2.16667C4.17894 2.16667 2.50001 3.8456 2.50001 5.91667C2.50001 7.90219 3.57483 9.54171 5.12647 10.8888C6.67944 12.237 8.53618 13.1312 9.64555 13.5876C9.87751 13.683 10.1225 13.683 10.3545 13.5876C11.4638 13.1312 13.3206 12.237 14.8735 10.8888C16.4252 9.54171 17.5 7.90218 17.5 5.91667C17.5 3.8456 15.8211 2.16667 13.75 2.16667C12.7417 2.16667 11.8294 2.56239 11.154 3.2105L10.577 3.76422ZM10 2.00798C9.02676 1.074 7.70542 0.5 6.25001 0.5C3.25847 0.5 0.833344 2.92512 0.833344 5.91667C0.833344 11.2235 6.64196 14.1542 9.0115 15.1289C9.64965 15.3914 10.3504 15.3914 10.9885 15.1289C13.3581 14.1542 19.1667 11.2235 19.1667 5.91667C19.1667 2.92512 16.7416 0.5 13.75 0.5C12.2946 0.5 10.9733 1.074 10 2.00798Z"
              fill="#6C7275"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex items-center justify-center overflow-hidden w-full h-[206px]"
      >
        <img
          loading="lazy"
          width="100%"
          height="100%"
          class="object-contain"
          src="/Paste image.png"
          alt="product image"
        />
      </div>
      <div
        class="add-to-cart w-full opacity-100 md:opacity-0 transition duration-200 ease-in"
      >
        <button
          type="submit"
          class="w-full bg-black text-white py-3 rounded-lg mt-5"
        >
          Add to cart
        </button>
      </div>
    </div>
    <div class="relative flex items-center gap-1 mt-5">
      <svg
        v-for="i in 5"
        :key="i"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.00005 1.47559L9.53714 5.17119C9.68115 5.51742 10.0068 5.75399 10.3805 5.78396L14.3702 6.10381L11.3305 8.70767C11.0457 8.95162 10.9214 9.3344 11.0084 9.69915L11.9371 13.5924L8.52131 11.5061C8.20129 11.3106 7.79882 11.3106 7.4788 11.5061L4.06306 13.5924L4.99174 9.69915C5.07875 9.3344 4.95438 8.95162 4.66959 8.70767L1.62986 6.10381L5.61956 5.78396C5.99335 5.75399 6.31896 5.51742 6.46297 5.17119L8.00005 1.47559Z"
          stroke="#6C7275"
        />
      </svg>

      <div class="absolute flex items-center gap-1 top-0 left-0">
        <svg
          v-if="rating"
          v-for="i in stars"
          :key="i"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.53834 1.28358C7.70914 0.872934 8.29086 0.872932 8.46166 1.28358L9.99874 4.97917C10.0707 5.15229 10.2336 5.27058 10.4204 5.28556L14.4102 5.60541C14.8535 5.64095 15.0332 6.19421 14.6955 6.48354L11.6557 9.0874C11.5133 9.20937 11.4512 9.40076 11.4947 9.58314L12.4234 13.4764C12.5265 13.909 12.0559 14.251 11.6764 14.0191L8.26063 11.9328C8.10062 11.8351 7.89938 11.8351 7.73937 11.9328L4.32363 14.0191C3.94408 14.251 3.47345 13.909 3.57665 13.4764L4.50534 9.58314C4.54884 9.40076 4.48665 9.20937 4.34426 9.0874L1.30453 6.48354C0.966758 6.19421 1.14652 5.64095 1.58985 5.60541L5.57955 5.28556C5.76645 5.27058 5.92925 5.15229 6.00126 4.97917L7.53834 1.28358Z"
            fill="#141718"
          />
        </svg>
      </div>
    </div>
    <p class="text-neutral_07 text-body2_size mt-[10px] poppins-medium">
      Loveseat Sofa
    </p>
    <p class="flex items-center gap-3">
      <span class="text-neutral_07 text-caption1_size poppins-medium"
        >$199.00
      </span>
      <span
        class="text-neutral_04 text-caption1_size poppins-light line-through"
      >
        <!-- price * sale -->
        $400.00
      </span>
    </p>
  </div>
</template>

<script setup>
const stars = ref(null);
const isFavorite = ref(false);

const props = defineProps({ rating: { type: Number, required: false } });

const toggleFavorite = () => {
  isFavorite.value = !isFavorite.value;
};
onMounted(() => {
  stars.value = Math.ceil(props.rating);
});
</script>

<style lang="scss" scoped>
.main-product-card {
  scroll-snap-align: start;
  &:hover {
    .add-to-cart {
      opacity: 1;
    }
  }
}
</style>
