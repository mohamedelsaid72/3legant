<template>
  <div class="mt-5 sm:mt-10">
    <div class="flex justify-between items-center">
      <p class="text-h5_size poppins-semibold">Articles</p>

      <ArrowLink :link="'articles'" :title="'More Articles'" />
    </div>
    <div class="flex items-center justify-between flex-wrap mt-5 sm:mt-10">
      <ArticleMiniCard v-for="i in 3" :key="i" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
