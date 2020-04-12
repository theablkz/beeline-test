<template>
  <transition appear name="fade">
    <div class="alert alert-danger" role="alert">
      {{ error.message }}
    </div>
  </transition>
</template>

<script>
export default {
  name: "error",
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  created() {
    this.error.deleter();
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
