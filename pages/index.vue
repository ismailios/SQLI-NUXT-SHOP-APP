<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :fooddata="fooddata" />
  </main>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppRestaurantInfo from "@/components/AppRestaurantInfo.vue";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState(["fooddata"]),
  },
};
</script>
