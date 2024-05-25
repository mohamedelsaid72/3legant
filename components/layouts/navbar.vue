<template>
  <nav>
    <div class="container mx-auto py-4 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <button class="sm:hidden" type="button" @click="$emit('openSidebar')">
          <svg
            width="16"
            height="20"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1H11M1 5H11M1 9H11"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>

        <nuxt-link
          to="/"
          class="text-primary_black poppins-semibold text-[24px]"
          >3legant.
        </nuxt-link>
      </div>

      <div class="sm:flex hidden items-center gap-7">
        <nuxt-link
          to="/"
          class="text-neutral_04"
          active-class="text-primary_black poppins-semibold"
          >Home</nuxt-link
        >
        <nuxt-link
          to="/shop"
          class="text-neutral_04"
          active-class="text-primary_black poppins-semibold"
          >Shop</nuxt-link
        >
        <nuxt-link
          to="/products"
          class="text-neutral_04"
          active-class="text-primary_black poppins-semibold"
          >Products</nuxt-link
        >
        <nuxt-link
          to="/contact-us"
          class="text-neutral_04"
          active-class="text-primary_black poppins-semibold"
          >Contact US</nuxt-link
        >
      </div>

      <div class="flex items-center gap-4">
        <nuxt-link class="hidden sm:flex" to="my-account">
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5588 18.5488C16.5654 15.8918 14.0036 14 11 14C7.99638 14 5.4346 15.8918 4.44117 18.5488M17.5588 18.5488C19.6672 16.7154 21 14.0134 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 14.0134 2.33285 16.7154 4.44117 18.5488M17.5588 18.5488C15.8031 20.0756 13.5095 21 11 21C8.49052 21 6.19694 20.0756 4.44117 18.5488M14 8C14 9.65685 12.6569 11 11 11C9.34315 11 8 9.65685 8 8C8 6.34315 9.34315 5 11 5C12.6569 5 14 6.34315 14 8Z"
              stroke="#141718"
              stroke-width="1.5"
              stroke-linejoin="round"
            />
          </svg>
        </nuxt-link>

        <button
          type="button"
          @click="$emit('openCart')"
          class="flex items-center gap-1"
        >
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
        </button>
      </div>
    </div>
  </nav>
</template>
