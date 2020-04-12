<template>
  <form class="row ml-0 mr-0" @submit.prevent="submit()">
    <textarea
      v-model="value"
      class="form-control"
      :class="{
        input__error: error
      }"
      id="exampleFormControlTextarea1"
      rows="3"
    ></textarea>
    <div class="col text-center">
      <button type="submit" class="btn btn-primary mt-2">Add Quote</button>
    </div>
  </form>
</template>

<script>
import Validate from "@/modules/validate/notNull";
export default {
  name: "index",
  data: () => ({
    value: "",
    error: false
  }),
  watch: {
    value: function() {
      this.error = false;
    }
  },
  methods: {
    submit() {
      const valueTrim = this.value.trim();
      console.log("helo");
      if (!Validate(valueTrim)) {
        this.value = "";
        this.error = true;
      } else {
        this.value = "";
        this.$emit("submit", valueTrim);
      }
    }
  }
};
</script>

<style scoped>
.input__error {
  border-color: red;
}
</style>
