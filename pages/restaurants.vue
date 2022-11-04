<template>
  <main class="container restaurant">
    <h1>Restaurant</h1>
    <AppRestaurantInfo />
  </main>
</template>

<script>
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
export default {
  name: "restaurants",
  components: {
    AppRestaurantInfo,
  },
};
</script>

<style lang="scss" scoped></style>
