<template>
  <div class="flex items-center gap-2">
    <input
      :id="id"
      type="checkbox"
      class="border-2 rounded border-neutral_04 bg-white input-field w-[16px] h-[16px] md:w-[24px] md:h-[24px] checked:bg-primary_black checked:border-primary_black accent-primary_black"
    />
    <label
      :for="id"
      class="md:text-body2_size text-neutral_04 text-caption2_size"
      >{{ title }}
      <span class="poppins-semibold text-primary_black"> {{ firstSpan }} </span>
      {{ secondSpan }}
      <span class="poppins-semibold text-primary_black">{{
        thirdSpan
      }}</span></label
    >
  </div>
</template>

<script setup>
defineProps({
  id: String,
  title: String,
  firstSpan: String,
  secondSpan: String,
  thirdSpan: String,
});
</script>
