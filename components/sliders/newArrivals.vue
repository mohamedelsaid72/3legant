<template>
  <div class="w-full">
    <div class="mt-5 sm:mt-10">
      <div class="flex justify-between items-end">
        <div>
          <p class="text-h4_size poppins-semibold">New</p>
          <p class="text-h4_size poppins-semibold">Arrivals</p>
        </div>
        <ArrowLink :link="'products'" :title="'More Products'" />
      </div>
      <div class="scrollbar-horizontal mt-10 flex items-center gap-5 pb-10">
        <MainProductCard :rating="4" v-for="i in 10" />
      </div>
    </div>
  </div>
</template>
