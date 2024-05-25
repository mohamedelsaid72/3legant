<template>
  <div
    v-if="opened"
    class="fixed top-0 right-0 w-full bg-[#232627c7] h-[100vh] z-[999] flex flex-row-reverse"
    @click.self="$emit('close')"
  >
    <div
      class="relative w-[90%] sm:w-[60%] md:w-[413px] h-[100vh] bg-white py-10 px-5 flex flex-col justify-between"
    >
      <div>
        <div class="flex justify-between items-center mb-5">
          <p class="text-[16px] font-medium">Cart</p>
          <button @click="$emit('close')" type="button">
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
        </div>
        <div
          class="flex flex-col gap-4 h-[calc(100vh-400px)] overflow-y-scroll no-scrollbar"
        >
          <CartCard v-for="i in cartItems" :key="i" />
        </div>
      </div>

      <div>
        <div class="flex flex-col gap-3">
          <p class="border-b py-3 flex items-center justify-between">
            <span class="text-neutral_04 text-body2_size">Subtotal</span>
            <span class="text-neutral_07 text-body2_size poppins-semibold"
              >$199.00</span
            >
          </p>
          <p class="py-3 flex items-center justify-between">
            <span class="text-neutral_07 text-h7_size">Total</span>
            <span class="text-neutral_07 text-h7_size poppins-semibold"
              >$199.00</span
            >
          </p>
        </div>
        <button
          type="button"
          to="/signin"
          class="w-full block text-center bg-black text-white py-3 rounded-lg mt-5"
        >
          Checkout
        </button>
        <nuxt-link
          to="/cart"
          class="underline text-body2_size poppins-semibold mt-5 block text-center"
          >View Cart</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  opened: Boolean,
  cartItems: Array,
});
</script>
