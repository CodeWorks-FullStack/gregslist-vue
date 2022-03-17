<template>
  <router-link :to="{ name: 'CarDetails', params: { id: car.id } }">
    <div class="car row p-3 bg-light rounded shadow selectable">
      <div class="col-12">
        <img class="img-fluid" :src="car.imgUrl" alt="" />
      </div>
      <h3 class="text-center col-12 text-uppercase">
        {{ car.make }} | {{ car.model }} | {{ car.year }}
      </h3>
      <!-- NOTE v-if here cause the amount doesn't exist on all cars, just cars from bids -->
      <div v-if="car.bidId" class="bg-dark text-light">
        current highest bid: ${{ formatNumber(car.amount) }}
      </div>
    </div>
  </router-link>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
export default {
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {
      formatNumber(num) {
        const iNF = new Intl.NumberFormat("en-US");
        return iNF.format(num);
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.car {
  transition: all 0.2s ease;
}
.car:hover {
  transform: scale(1.03);
}
</style>
