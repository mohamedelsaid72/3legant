<template>
  <div>
    <div class="container">
      <ShopHeader />
      <div class="flex flex-col sm:flex-row gap-5 mt-10">
        <div class="w-full sm:basis-1/4 min-w-[25%]">
          <p
            class="text-neutral_07 poppins-semibold flex items-center gap-2 text-body1_size"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H6M6 7C6 8.65685 7.34315 10 9 10C10.6569 10 12 8.65685 12 7C12 5.34315 10.6569 4 9 4C7.34315 4 6 5.34315 6 7ZM3 17H9M18 17H21M18 17C18 18.6569 16.6569 20 15 20C13.3431 20 12 18.6569 12 17C12 15.3431 13.3431 14 15 14C16.6569 14 18 15.3431 18 17ZM15 7H21"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <span>Filter</span>
          </p>
          <div class="mt-10">
            <p class="text-body2_size text-neutral_07 poppins-medium">
              CATEGORIES
            </p>
            <div
              class="w-full max-h-[226px] flex flex-col gap-4 items-start mt-4 scrollbar-vertical"
            >
              <button
                v-for="category in categories"
                :key="category.id"
                type="button"
                class="text-caption1_size poppins-semibold"
                :class="
                  selectedCategory === category.name
                    ? 'underline text-neutral_07'
                    : 'text-[#807E7E] '
                "
                @click="toggleCategory(category.name)"
              >
                {{ category.name }}
              </button>
            </div>
          </div>
          <div class="mt-10">
            <p class="text-body2_size text-neutral_07 poppins-medium">PRICE</p>
            <div class="w-full flex flex-col gap-4 items-start mt-4">
              <div
                class="w-full flex items-center justify-between"
                v-for="(item, index) in priceFilters"
                :key="index"
              >
                <label
                  class="cursor-pointer text-caption1_size text-neutral_04"
                  :for="item.value"
                  >{{ item.label }}</label
                >
                <input
                  type="checkbox"
                  class="border-2 rounded border-neutral_04 bg-white input-field w-[16px] h-[16px] md:w-[24px] md:h-[24px] checked:bg-primary_black checked:border-primary_black accent-primary_black cursor-pointer"
                  :id="item.value"
                  v-model="filteredPrice"
                  :value="item"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:basis-3/4">
          <div class="flex justify-between items-center">
            <p class="text-body1_size poppins-medium text-primary_black">
              {{ selectedCategory ? selectedCategory : "All" }}
            </p>
          </div>
          <div class="flex flex-wrap gap-5 mt-10">
            <MainProductCard
              v-for="product in filteredProducts"
              :key="product.id"
              :product="product"
            />
          </div>

          <div class="text-center my-16 w-full">
            <button
              class="text-neutral_07 text-body2_size py-2 px-10 border-2 border-neutral_06 rounded-full"
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const categories = [
  { id: 1, name: "Category 1" },
  { id: 2, name: "Category 2" },
  { id: 3, name: "Category 3" },
  { id: 4, name: "Category 4" },
  { id: 5, name: "Category 5" },
  { id: 6, name: "Category 6" },
  { id: 7, name: "Category 7" },
  { id: 8, name: "Category 8" },
  { id: 9, name: "Category 9" },
  { id: 10, name: "Category 10" },
];

const selectedCategory = ref(null);

const priceFilters = ref([
  {
    label: "$0.00 - 99.99",
    min: 0,
    max: 99.99,
    checked: false,
    value: "<100",
  },
  {
    label: "$100.00 - 199.99",
    min: 100,
    max: 199.99,
    checked: false,
    value: "<200",
  },
  {
    label: "$200.00 - 299.99",
    min: 200,
    max: 299.99,
    checked: false,
    value: "<300",
  },
  {
    label: "$300.00 - 399.99",
    min: 300,
    max: 399.99,
    checked: false,
    value: "<400",
  },
  { label: "$400.00+", min: 400, max: 100000, checked: false, value: ">400" },
]);

const products = ref([
  { id: 1, name: "Loveseat Sofa", category: "Category 1", price: 199 },
  { id: 2, name: "Luxury Sofa", category: "Category 2", price: 299 },
  { id: 3, name: "Table Lamp", category: "Category 3", price: 250 },
  { id: 4, name: "White Drawer unit", category: "Category 4", price: 89 },
  { id: 5, name: "Black Tray table", category: "Category 5", price: 19 },
  { id: 6, name: "Lamp", category: "Category 6", price: 39 },
  { id: 7, name: "Coffee table", category: "Category 7", price: 99 },
  { id: 8, name: "Wooden bed", category: "Category 8", price: 399 },
  { id: 9, name: "Wooden chair", category: "Category 9", price: 99 },
]);

const filteredPrice = ref([]);

const toggleCategory = (category) => {
  if (selectedCategory.value === category) {
    selectedCategory.value = null;
  } else {
    selectedCategory.value = category;
  }
};

const filteredProducts = computed(() => {
  const min = Math.min(...filteredPrice.value.map((item) => item.min));
  const max = Math.max(...filteredPrice.value.map((item) => item.max));

  return products.value.filter((product) => {
    const isWithinPriceRange = product.price >= min && product.price <= max;
    const matchesCategory = product.category === selectedCategory.value;

    const isPriceFiltered = filteredPrice.value.length > 0;
    const isCategorySelected = selectedCategory.value !== null;

    if (isPriceFiltered && !isCategorySelected) {
      return isWithinPriceRange;
    } else if (isCategorySelected && isPriceFiltered) {
      return isWithinPriceRange && matchesCategory;
    } else if (isCategorySelected && !isPriceFiltered) {
      return matchesCategory;
    } else {
      return product;
    }
  });
});
</script>

<style lang="scss" scoped></style>
