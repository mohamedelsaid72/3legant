<template>
  <div
    class="h-[100vh] w-full flex items-center justify-between md:flex-row flex-col"
  >
    <div
      class="relative image-container md:w-1/2 w-full md:h-screen h-1/3 bg-no-repeat bg-center bg-contain bg-neutral_02 bg-login-pattern"
    >
      <p class="pt-5 text-[24px] text-center font-medium">3legant.</p>
    </div>
    <div
      class="flex items-start md:items-center pt-10 md:pt-0 justify-center md:w-1/2 w-full md:h-screen h-2/3"
    >
      <div class="w-full px-5 max-w-[456px]">
        <p class="text-h5_size md:text-h4_size mb-3">Sign In</p>
        <p class="text-neutral_04 text-body2_size mb-5 md:mb-10">
          Don’t have an accout yet?
          <nuxt-link class="text-primary_green poppins-semibold" to="/signup"
            >Sign Up
          </nuxt-link>
        </p>
        <form @submit.prevent="signIn" class="w-full">
          <input
            required
            type="text"
            placeholder="Your username or email address "
            class="input-field mb-5 w-full d-block outline-none focus:outline-none border-b-2 py-2 focus:border-black ease-in duration-300"
          />
          <input
            required
            type="password"
            placeholder="Password"
            class="input-field mb-5 mb-7 w-full d-block outline-none focus:outline-none border-b-2 py-2 focus:border-black ease-in duration-300"
          />
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <input
                id="remember"
                type="checkbox"
                class="border-2 rounded border-neutral_04 bg-white input-field w-[16px] h-[16px] md:w-[24px] md:h-[24px] checked:bg-primary_black checked:border-primary_black accent-primary_black"
              />
              <label
                for="remember"
                class="text-body2_size text-neutral_04 cursor-pointer"
                >Remember me</label
              >
            </div>
            <div>
              <span class="text-body2_size text-neutral_07 poppins-semibold"
                >Forgot password?</span
              >
            </div>
          </div>
          <button
            type="submit"
            class="w-full bg-black text-white py-3 rounded-lg mt-5"
            :class="loading ? 'cursor-not-allowed' : 'cursor-pointer'"
          >
            <div v-if="loading">
              <svg
                aria-hidden="true"
                role="status"
                class="inline w-4 h-4 me-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
              Loading...
            </div>

            <div v-else>Sign In</div>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "auth",
});

const loading = ref(false);

const signIn = async () => {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
  }, 3000);
};
</script>
