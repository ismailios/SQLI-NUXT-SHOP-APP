<template>
  <div>
    <label :for="select">What {{ select }} do you want ? </label>
    <select
      @change="$emit('change', $event.target.value)"
      :id="select"
      :name="select"
    >
      <option value="">--- Please select a {{ select }}</option>
      <option v-for="option in selectOptions" :key="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    select: {
      type: String,
      default: "Color",
    },
    selectOptions: {
      type: Array,
      default: () => [
        "Navy",
        "Multi",
        "White",
        "Off white",
        "Black",
        "Red",
        "Blue",
      ],
    },
  },
};
</script>

<style lang="sass" scoped></style>
