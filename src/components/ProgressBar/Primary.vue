<template>
  <div
    class="progress-bar"
    role="progressbar"
    :style="{ width: progressValueNow }"
    aria-valuenow="10"
    aria-valuemin="0"
    aria-valuemax="100"
  >
    {{ progressContent }}
  </div>
</template>

<script>
export default {
  name: "progress-bar__primary",
  props: {
    detail: {
      type: Object,
      required: true
    }
  },
  computed: {
    progressValueNow() {
      return `${(this.detail.len / this.detail.max) * 100}%`;
    },
    progressContent() {
      return `${this.detail.len}/${this.detail.max}`;
    }
  }
};
</script>
