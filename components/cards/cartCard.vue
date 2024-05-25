<template>
  <div
    class="flex gap-4 items-center justify-between py-6 border-b border-neutral_03"
  >
    <div class="flex gap-4">
      <div
        class="w-[80px] h-[96px] flex items-center justify-center overflow-hidden bg-neutral_03"
      >
        <img
          src="/Paste image.png"
          width="100%"
          height="100%"
          alt="product image"
          class="object-contain"
        />
      </div>
      <div>
        <p class="mb-1 text-caption1_size text-neutral_07 poppins-medium">
          Tray Table
        </p>
        <p class="text-caption2_size text-neutral_04 mb-3">Color: Black</p>
        <div
          class="flex items-center justify-around border-2 border-neutral_04 rounded"
        >
          <button
            type="button"
            class="text-neutral_04 text-caption2_size poppins-semibold p-2 hover:bg-neutral_03 transition ease-in"
          >
            -
          </button>
          <p class="text-neutral_07 text-caption2_size poppins-semibold p-2">
            1
          </p>
          <button
            type="button"
            class="text-neutral_04 text-caption2_size poppins-semibold p-2 hover:bg-neutral_03 transition ease-in"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div class="flex items-end flex-col justify-end gap-12">
      <button type="button" @click="removeFromCart">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.292893 0.292893C0.683417 -0.0976309 1.31658 -0.0976309 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L8.41421 7L13.7071 12.2929C14.0976 12.6834 14.0976 13.3166 13.7071 13.7071C13.3166 14.0976 12.6834 14.0976 12.2929 13.7071L7 8.41421L1.70711 13.7071C1.31658 14.0976 0.683418 14.0976 0.292893 13.7071C-0.0976309 13.3166 -0.0976309 12.6834 0.292893 12.2929L5.58579 7L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"
            fill="#6C7275"
          />
        </svg>
      </button>
      <p class="text-$19.19 text-neutral_07">$199.00</p>
    </div>
  </div>
</template>

<script setup>
const removeFromCart = () => {
  console.log("removed from cart");
};
</script>

<style lang="scss" scoped></style>
