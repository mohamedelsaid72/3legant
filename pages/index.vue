<template>
  <div>
    <div class="container">
      <Slider />
      <div
        class="flex items-center justify-between mt-3 flex-wrap gap-y-4 mb-10"
      >
        <div>
          <p class="text-h5_size sm:text-h3_size md:text-h2_size">
            Simply Unique<span class="text-neutral_05">/</span>
          </p>
          <p class="text-h5_size sm:text-h3_size md:text-h2_size -mt-6">
            Simply Better<span class="text-neutral_05">.</span>
          </p>
        </div>
        <p class="text-body2_size sm:text-body1_size text-neutral_04">
          <span class="text-primary_black poppins-semibold">3legant</span> is a
          gift & decorations store based in HCMC,<br />
          Vietnam. Est since 2019.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        <div class="bg-neutral_03 w-full row-span-2">
          <SimpleCenterCard />
        </div>
        <SimpleHorizintailCard :category="'Bedroom'" :image="'/bedroom.png'" />

        <SimpleHorizintailCard :category="'kitchen'" :image="'/kitchen.png'" />
      </div>

      <NewArrivals />

      <Benefits />
    </div>

    <Sales />

    <div class="container">
      <Articles />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
const api_url = useRuntimeConfig().public.baseURL;
const { data: data } = await useFetch(`${api_url}/api/categories`);
console.log(data.value);

const send = async () => {
  const res = await axios.post(`${api_url}/api/categories`, {
    name: "test",
  });
  console.log(res);
};
</script>
