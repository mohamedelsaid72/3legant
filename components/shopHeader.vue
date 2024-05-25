<template>
  <div
    class="w-full h-[308px] md-h-[392px] bg-shop-header bg-no-repeat bg-cover bg-center flex items-center justify-center"
  >
    <div class="flex flex-col gap-2 items-center">
      <p class="flex items-center gap-3">
        <nuxt-link class="text-neutral_04 text-body2_size poppins-light" to="/"
          >Home</nuxt-link
        >
        > <span>{{ $route.name }}</span>
      </p>
      <p class="text-h5_size md:text-h3_size text-primary_black \">
        {{ $route.name }} Page
      </p>
      <p class="text-body1_size text-[#121212] poppijns-medium">
        Let’s design the place you always imagined.
      </p>
    </div>
  </div>
</template>
