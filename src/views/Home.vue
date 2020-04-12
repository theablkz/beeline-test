<template>
  <div class="home">
    <div class="container pt-4">
      <div class="row mb-4">
        <div class="col">
          <progress-bar>
            <progress-bar-primary :detail="quote.getDetail()" />
          </progress-bar>
        </div>
      </div>
      <div class="row justify-content-md-center">
        <div class="col-lg-6 col-md-8">
          <quote-form @submit="addQuote" />
        </div>
      </div>
      <transition name="component-fade" mode="out-in">
        <component
          class="mt-4"
          :is="getCard"
          :items="quote.getData()"
          @deleteItem="deleteQuote"
        />
      </transition>
    </div>
    <notifications :errors="quote._errors" />
  </div>
</template>

<script>
import { Quote } from "@/modules/quote";
import { LocalStorage as QuoteStorage } from "@/modules/quote/localStorage";
import ProgressBar from "@/components/ProgressBar";
import ProgressBarPrimary from "@/components/ProgressBar/Primary";
import QuoteForm from "@/components/Form";
import Card from "@/components/Card";
import Notifications from "@/components/Notifications/index";

export default {
  name: "Home",
  data: () => ({
    quote: new Quote(QuoteStorage, 10)
  }),
  components: {
    Notifications,
    ProgressBar,
    ProgressBarPrimary,
    QuoteForm,
    Card
  },
  computed: {
    getCard() {
      if (this.quote.getDetail().len) {
        return Card;
      } else {
        return () => import("@/components/Card/NoCards.vue");
      }
    }
  },
  methods: {
    addQuote(val) {
      this.quote.setItem(val);
    },
    deleteQuote(quoteIndex) {
      this.quote.deleteItem(quoteIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
