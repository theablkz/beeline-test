<template>
  <div class="notifications">
    <error v-for="(error, index) in errors" :key="index" :error="error" />
  </div>
</template>

<script>
import Error from "./error";
export default {
  name: "notifications",
  components: { Error },
  props: {
    errors: {
      type: Array,
      default: []
    }
  }
};
</script>

<style lang="scss" scoped>
.notifications {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  left: 1rem;
  display: flex;
  flex-direction: column-reverse;
}
</style>
