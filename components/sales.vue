<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 w-full items-center mt-5 sm:mt-10 bg-neutral_03"
  >
    <div
      class="bg-no-repeat bg-center bg-cover bg-neutral_02 bg-sale-image h-[367px] sm:h-[532px]"
    ></div>
    <div class="p-5 sm:p-10">
      <p class="text-primary_blue poppins-semibold text-body2_size">
        SALE UP TO 35% OFF
      </p>
      <p class="text-h6_size sm:text-h5_size poppins-medium">HUNDREDS of</p>
      <p class="text-h6_size sm:text-h5_size poppins-medium -mt-2 md:-mt-3">
        New lower prices!
      </p>
      <p class="text-neutral_07 text-caption1_size sm:text-body1_size">
        It’s more affordable than ever to give every
      </p>
      <p
        class="text-neutral_07 text-caption1_size sm:text-body1_size mb-3 sm:mb-5"
      >
        room in your home a stylish makeover
      </p>
      <ArrowLink :link="'shop'" :title="'Shop Now'" />
    </div>
  </div>
</template>
