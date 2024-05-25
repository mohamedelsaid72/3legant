<template>
  <footer
    class="relative w-full min-h-[249px] bg-neutral_07 text-white flex flex-col sm:flex-row items-center justify-center py-10"
  >
    <div class="container">
      <div
        class="flex items-center justify-between flex-col sm:flex-row flex-wrap gap-y-4"
      >
        <div class="flex items-center flex-col sm:flex-row gap-4">
          <p class="text-h6_size">3legant.</p>
          <p class="text-neutral_04 text-h6_size rotate-90 sm:rotate-0">|</p>
          <p class="text-caption1_size">Gift & Decoration Store</p>
        </div>
        <div class="flex items-center flex-col sm:flex-row gap-4">
          <nuxt-link
            v-for="(link, i) in links"
            :key="i"
            :to="link.path"
            class="capitalize"
            >{{ link.title }}</nuxt-link
          >
        </div>
      </div>
      <div
        class="border-t border-neutral_04 mt-5 sm:mt-10 py-5 flex items-center justify-between gap-4 flex-wrap flex-col sm:flex-row"
      >
        <div
          class="flex items-center justify-between gap-4 flex-wrap flex-col sm:flex-row text-center sm:text-left"
        >
          <p class="text-caption1_size text-neutral_03 poppins-light">
            Copyright © 2023 3legant. All rights reserved
          </p>
          <div class="flex items-center gap-4 flex-col sm:flex-row">
            <p class="text-caption1_size text-neutral_01 poppins-semibold">
              Privacy Policy
            </p>
            <p class="text-caption1_size text-neutral_01 poppins-semibold">
              Terms of Use
            </p>
          </div>
        </div>
        <div class="flex gap-6 items-center flex-wrap gap-y-2">
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
                stroke="#fefefe"
                stroke-width="1.5"
              />
              <circle cx="18" cy="6" r="1" fill="#fefefe" />
              <circle
                cx="12"
                cy="12"
                r="5"
                stroke="#fefefe"
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
                stroke="#fefefe"
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
                stroke="#fefefe"
                stroke-width="1.5"
              />
              <path
                d="M10.4472 8.72361L15.2111 11.1056C15.9482 11.4741 15.9482 12.5259 15.2111 12.8944L10.4472 15.2764C9.78231 15.6088 9 15.1253 9 14.382V9.61803C9 8.87465 9.78231 8.39116 10.4472 8.72361Z"
                stroke="#fefefe"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const links = ref([
  { title: "home", path: "/" },
  { title: "shop", path: "/shop" },
  { title: "products", path: "/products" },
  { title: "articles", path: "/articles" },
  { title: "contact us", path: "/contact-us" },
]);
</script>

<style lang="scss" scoped></style>
