<template>
  <section class="productinfo">
    <div class="row" v-if="products.length">
      <div
        v-for="product in products"
        :key="product.id"
        class="items"
        :style="`background: url('http://${product.imageUrl}') no-repeat center center`"
      >
        <div class="iteminfo">
          <div>
            <div class="product-img"></div>
            <h4>{{ product.name }}</h4>
            <p>{{ formatingPrice(product.price.current.value) }}</p>
          </div>
          <nuxt-link :to="`/items/${product.id}`">
            <button class="ghost">View Item</button>
          </nuxt-link>
        </div>
      </div>
    </div>
    <div v-else>
      <h1>No Product found</h1>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "@nuxtjs/composition-api";
export default defineComponent({
  props: {
    products: {
      type: [Array, Object],
    },
  },
  setup() {
    function formatingPrice(price) {
      return "$" + price.toFixed(2);
    }

    return { formatingPrice };
  },
});
</script>

<style lang="scss" scoped></style>
