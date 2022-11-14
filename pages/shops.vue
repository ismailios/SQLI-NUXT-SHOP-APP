<template>
  <main class="container product">
    <div class="productheading">
      <h1>Products</h1>
      <div>
        <AppSelect @change="selectedProduct.color = $event" />
        <AppSelect
          @change="selectedProduct.price = $event"
          select="Price"
          :selectOptions="priceOptions"
        />
      </div>
    </div>

    <AppProductInfo :products="filtredProducts" />
  </main>
</template>

<script>
import AppProductInfo from "@/components/AppProductInfo.vue";
import AppSelect from "@/components/AppSelect.vue";
import {
  computed,
  defineComponent,
  useStore,
  ref,
  reactive,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "shops",
  components: {
    AppProductInfo,
    AppSelect,
  },

  setup() {
    const store = useStore();
    const priceOptions = ref(["50", "100", "150", "200", "250"]);
    const products = computed(() => store.state.products);

    const selectedProduct = reactive({
      color: "",
      price: "",
    });

    const filtredProducts = computed(() => {
      return products.value.filter((product) => {
        let name = product.colour.toLowerCase();
        return (
          name.includes(selectedProduct.color.toLowerCase()) &&
          +product.price.current.value >= +selectedProduct.price
        );
      });
    });

    return {
      selectedProduct,
      filtredProducts,
      products,
      priceOptions,
    };
  },
});
</script>

<style lang="scss" scoped></style>
