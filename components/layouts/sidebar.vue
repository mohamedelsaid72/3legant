<template>
  <div
    v-if="opened"
    class="fixed top-0 left-0 right-0 w-100% bg-[#232627c7] h-[100vh] z-[999]"
    @click.self="$emit('close')"
  >
    <div
      class="relative w-[90%] h-[100vh] bg-white p-5 flex flex-col justify-between"
    >
      <div>
        <div class="flex justify-between items-center mb-3">
          <p class="text-[16px] font-medium">3legant.</p>
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
        <div class="flex flex-col gap-3">
          <nuxt-link to="/" class="border-b py-3">Home</nuxt-link>
          <nuxt-link to="/shop" class="border-b py-3">shop</nuxt-link>
          <nuxt-link to="/products" class="border-b py-3">Products</nuxt-link>
          <nuxt-link to="/contact-us" class="border-b py-3"
            >Contact Us</nuxt-link
          >
        </div>
      </div>

      <div>
        <div class="flex flex-col gap-3">
          <nuxt-link
            to="/cart"
            class="border-b py-3 flex items-center justify-between"
            ><span>Cart</span>
            <nuxt-link to="/cart" class="flex items-center gap-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L9 7C9 8.65685 10.3431 10 12 10C13.6569 10 15 8.65685 15 7V6"
                  stroke="#141718"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.6115 3H8.38851C6.43316 3 4.7644 4.41365 4.44294 6.3424L2.77627 16.3424C2.36992 18.7805 4.25009 21 6.72185 21H17.2782C19.7499 21 21.6301 18.7805 21.2237 16.3424L19.5571 6.3424C19.2356 4.41365 17.5669 3 15.6115 3Z"
                  stroke="#141718"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
              </svg>
              <span
                class="flex items-center justify-center rounded-full bg-primary_black text-white w-[20px] h-[20px] text-caption2_size poppins-semibold"
              >
                0
              </span>
            </nuxt-link>
          </nuxt-link>
          <nuxt-link
            to="/wishlist"
            class="border-b py-3 flex items-center justify-between"
            ><span>Wishlist</span>
            <nuxt-link to="/wishlist" class="flex items-center gap-1">
              <svg
                width="22"
                height="19"
                viewBox="0 0 22 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.6924 4.58373C11.3055 4.95505 10.6945 4.95505 10.3076 4.58373L9.6152 3.91927C8.80477 3.14154 7.70994 2.66667 6.5 2.66667C4.01472 2.66667 2 4.68139 2 7.16667C2 9.5493 3.28979 11.5167 5.15176 13.1332C7.01532 14.7511 9.2434 15.8241 10.5746 16.3717C10.853 16.4862 11.147 16.4862 11.4254 16.3717C12.7566 15.8241 14.9847 14.7511 16.8482 13.1332C18.7102 11.5167 20 9.54929 20 7.16667C20 4.68139 17.9853 2.66667 15.5 2.66667C14.2901 2.66667 13.1952 3.14154 12.3848 3.91927L11.6924 4.58373ZM11 2.47624C9.83211 1.35548 8.24649 0.666672 6.5 0.666672C2.91015 0.666672 0 3.57682 0 7.16667C0 13.5349 6.97034 17.0517 9.81379 18.2214C10.5796 18.5364 11.4204 18.5364 12.1862 18.2214C15.0297 17.0517 22 13.5349 22 7.16667C22 3.57682 19.0899 0.666672 15.5 0.666672C13.7535 0.666672 12.1679 1.35548 11 2.47624Z"
                  fill="#141718"
                />
              </svg>

              <span
                class="flex items-center justify-center rounded-full bg-primary_black text-white w-[20px] h-[20px] text-caption2_size poppins-semibold"
              >
                0
              </span>
            </nuxt-link>
          </nuxt-link>
        </div>
        <nuxtLink
          to="/signin"
          class="w-[295px] block text-center bg-black text-white py-3 rounded-lg mt-5"
        >
          Sign In
        </nuxtLink>
        <div class="flex gap-6 items-center mt-6">
          <a target="_blank" rel="noreferrer" href="https://www.instagram.com/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="2"
                width="20"
                height="20"
                rx="4"
                stroke="#141718"
                stroke-width="1.5"
              />
              <circle cx="18" cy="6" r="1" fill="#141718" />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#141718"
                stroke-width="1.5"
              />
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 3H15C12.2386 3 10 5.23858 10 8V10H6V14H10V21H14V14H18V10H14V8C14 7.44772 14.4477 7 15 7H18V3Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
          <a target="_blank" rel="noreferrer" href="https://www.youtube.com/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2"
                y="3"
                width="20"
                height="18"
                rx="4"
                stroke="#141718"
                stroke-width="1.5"
              />
              <path
                d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  opened: Boolean,
});
</script>
