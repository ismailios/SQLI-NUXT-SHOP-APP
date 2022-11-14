<template>
  <main class="cart container">
    <h2>Your Cart</h2>

    <section v-if="cart.length">
      <table aria-label="">
        <thead>
          <tr>
            <th>Item</th>
            <th>Color</th>
            <th>Amount</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cart" :key="item.id">
            <td>
              {{ item.item.name }}
              <span v-if="item.options">- {{ item.options }}</span>
            </td>
            <td>
              {{ item.item.colour }}
              <span v-if="item.options">- {{ item.options }}</span>
            </td>
            <td>{{ item.count }}</td>
            <td>{{ item.combinedPrice }}</td>
          </tr>
          <tr>
            <td colspan="3"></td>
            <td class="total">Total: ${{ totalPrice }}</td>
          </tr>
        </tbody>
      </table>
    </section>
    <AppEmptyCart v-else />
  </main>
</template>

<script>
import { mapState, mapGetters } from "vuex";

import AppEmptyCart from "@/components/AppEmptyCart.vue";
import { computed, defineComponent, useStore } from "@nuxtjs/composition-api";
export default defineComponent({
  components: {
    AppEmptyCart,
  },

  setup() {
    const store = useStore();
    const cart = computed(() => store.state.cart);
    const totalPrice = computed(() => store.getters.totalPrice);
    const cartCounter = computed(() => store.getters.cartCounter);
    return {
      cart,
      totalPrice,
      cartCounter,
    };
  },
});
</script>

<style lang="scss" scoped></style>
