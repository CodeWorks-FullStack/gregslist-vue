<template>
  <router-link :to="{ name: 'CarDetails', params: { id: car.id } }">
    <div class="car row p-3 bg-light rounded shadow selectable">
      <div class="col-12">
        <img class="img-fluid" :src="car.imgUrl" alt="" />
      </div>
      <h3 class="text-center col-12">
        {{ car.make }} | {{ car.model }}| {{ car.year }}
      </h3>
    </div>
  </router-link>
</template>


<script>
import { AppState } from "../AppState"
import { computed, reactive, onMounted } from "vue"
export default {
  props: {
    car: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {}
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
