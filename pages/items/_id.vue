<template>
  <main class="container">
    <section
      class="image"
      :style="`background: url('http://${currentItem.imageUrl}') no-repeat center center`"
    ></section>

    <section class="details">
      <h1>{{ currentItem.name }}</h1>

      <h3>Current Price: ${{ currentItem.price.current.value.toFixed(2) }}</h3>
      <h3>brand Name: {{ currentItem.brandName }}</h3>
      <h3>Color: {{ currentItem.colour }}</h3>
      <h4>SKU: {{ currentItem.productCode }}</h4>
      <h3>Description</h3>
      <p>
        color Id : {{ currentItem.colourWayId }}
        <br />
        Url : {{ currentItem.url }}
      </p>

      <div class="quantity">
        <input type="number" min="1" v-model="count" />
        <button class="primary" @click="addToCart">
          Add to Cart - ${{ combinedPrice }}
        </button>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from "vuex";
import AppToast from "@/components/AppToast.vue";
import { required } from "@vuelidate/validators";
import {
  computed,
  defineComponent,
  useStore,
  ref,
  useRoute,
} from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    AppToast,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const id = computed(() => route.value.params.id);

    const count = ref(1);

    const products = computed(() => store.state.products);
    const currentItem = computed(() =>
      products.value.find((product) => product.id == id.value)
    );

    // console.log(currentItem);
    const combinedPrice = computed(() => {
      let total = count.value * currentItem.value.price.current.value;
      return total?.toFixed(2);
    });

    function addToCart() {
      let formOutput = {
        item: currentItem.value,
        count: count.value,
        combinedPrice: combinedPrice.value,
      };
      store.commit("addToCart", formOutput);
    }

    return { addToCart, currentItem, count, combinedPrice };
  },
});
</script>

<style lang="scss" scoped>
.container {
  width: 1000px;
  margin: 100px auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  grid-template-rows: 400px 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  line-height: 2;
}

.image {
  grid-area: 1 / 1 / 2 / 2;
  background-size: cover;
}
.details {
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
}
.options {
  grid-area: 2 / 1 / 3 / 2;
}
</style>
