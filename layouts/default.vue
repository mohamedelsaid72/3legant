<!-- default layout for all pages -->
<template>
  <div>
    <Preheader />
    <Navbar @openSidebar="openSidebar" @openCart="openCart" />
    <transition name="fade" mode="out-in">
      <Sidebar :opened="SidebarOpened" @close="SidebarOpened = false" />
    </transition>
    <transition name="fade" mode="out-in">
      <Cart
        :opened="cartOpened"
        :cartItems="cartItems"
        @close="cartOpened = false"
      />
    </transition>
    <slot></slot>
    <PreFooter />
    <Footer />
  </div>
</template>

<script setup>
const SidebarOpened = ref(false);
const openSidebar = () => {
  SidebarOpened.value = !SidebarOpened.value;
};

const cartOpened = ref(false);

const openCart = () => {
  cartOpened.value = !cartOpened.value;
};

const cartItems = ref(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
