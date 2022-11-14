<template>
  <main class="container">
    <AppHeader />
    <AppProductInfo :products="products" />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppProductInfo from "@/components/AppProductInfo.vue";
import { useStore, defineComponent, computed } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Home",
  components: {
    AppHeader,
    AppProductInfo,
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.products);
    return { products };
  },
});
</script>
