<template>
  <div class="primary-card">
    <div class="card-editor">
      <img
        class="card-editor__icon"
        @click="deleteItem()"
        src="@/assets/image/icons/cross.svg"
        alt=""
      />
    </div>
    <p>{{ item }}</p>
  </div>
</template>

<script>
export default {
  name: "Primary",
  props: {
    item: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Arizonia&family=Montserrat&display=swap");
.primary-card {
  position: relative;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e9ecef;
  border-radius: 4px;
  p {
    margin: 0;
    font-size: 1.2rem;
    font-family: "Arizonia", "Montserrat", cursive, sans-serif;
  }

  .card-editor {
    position: absolute;
    top: 0.1rem;
    right: 0.1rem;
    &__icon {
      width: 1rem;
      height: 1rem;
      object-fit: contain;
      display: block;
      cursor: pointer;
    }
  }
}
</style>
