<template>
  <nav>
    <ul>
      <li>
        <nuxt-link exact to="/">
          <AppLogo />
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/shops">Shops</nuxt-link>
      </li>
    </ul>
    <span class="smallnum" v-if="cartCounter > 0">{{ cartCounter }}</span>
    <nuxt-link to="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import AppLogo from "@/components/AppLogo.vue";
import { computed, defineComponent, useStore } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    AppLogo,
  },

  setup() {
    const store = useStore();
    const cartCounter = computed(() => store.getters.cartCounter);

    return { cartCounter };
  },
});
</script>

<style lang="scss" scoped></style>
