<template>
  <transition appear name="fade">
    <div class="card-group">
      <primary-card
        v-for="(item, index) in items"
        :item="item"
        :key="index"
        @deleteItem="deleteItem(index)"
      />
    </div>
  </transition>
</template>

<script>
import PrimaryCard from "./Primary";
export default {
  name: "index",
  components: {
    PrimaryCard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteItem(itemIndex) {
      this.$emit("deleteItem", itemIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.card-group {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
