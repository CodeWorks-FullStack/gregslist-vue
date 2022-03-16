<template>
  <div class="container">
    <div class="row mt-3 bg-light shadow p-4">
      <div class="col-md-6">
        <img :src="car.imgUrl" class="img-fluid" alt="" srcset="" />
      </div>
      <div class="col-md-6">
        <h1 class="text-uppercase">{{ car.make }} | {{ car.model }}</h1>
        <h2>{{ car.year }}</h2>
        <p>{{ car.description }}</p>
        <div class="d-flex justify-content-between">
          <input type="color" class="m-2" disabled :value="car.color" />
          <b>${{ formatNumber(car.price) }}</b>
        </div>
        <div class="text-end selectable" @click="openModal">
          edit car
          <i class="mdi mdi-pencil"></i>
        </div>
      </div>
    </div>
    <div class="row mt-3 bg-light shadow p-4">
      <div class="d-flex justify-content-between">
        <h4>Bids</h4>
        <!-- FIXME This button always shows up? I only want it disabled when not logged in and only show if you have not yet bid -->
        <button class="btn btn-success" @click="createBid">
          Bid ${{ formatNumber(car.price + 100) }}
        </button>
      </div>
      <!-- FIXME why are they out of order? the highest bid should be first -->
      <div class="col-12" v-for="b in bids" :key="b.id">
        <Bid :bid="b" />
      </div>
    </div>
    <Modal>
      <template #modal-title>Edit {{ car.make }} {{ car.model }}</template>
      <template #modal-body><CarForm :carData="car" /></template>
    </Modal>
  </div>
</template>


<script>
import { AppState } from "../AppState"
import { computed, reactive, onMounted } from "vue"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { carsService } from "../services/CarsService"
import { bidsService } from "../services/BidsService"
import { useRoute } from "vue-router"
import { Modal } from "bootstrap"
export default {
  setup() {
    const route = useRoute()
    onMounted(async () => {
      try {
        // NOTE this first line is only to get rid of the previous car from showing up for half a second as we pick a new active car. not required to work.
        AppState.activeCar = {}
        await carsService.getById(route.params.id)
        await bidsService.getCarBids(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message, "error")
      }
    })
    return {
      car: computed(() => AppState.activeCar),
      bids: computed(() => AppState.bids),
      createBid() {
        // FIXME this isn't working?
        bidsService.createBid()
      },
      openModal() {
        Modal.getOrCreateInstance(document.getElementById("form-modal")).show()
      },
      formatNumber(num) {
        const iNF = new Intl.NumberFormat('en-US')
        return iNF.format(num)
      }
    }
  },
};
</script>


<style scoped>
</style>
