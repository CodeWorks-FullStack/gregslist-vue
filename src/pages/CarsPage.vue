<template>
  <div class="container-fluid">
    <b
      title="Create Car"
      class="
        create-btn
        btn btn-success
        rounded-pill
        shadow
        d-flex
        align-items-center
        justify-content-center
      "
      data-bs-toggle="modal"
      data-bs-target="#form-modal"
    >
      <i class="mdi mdi-plus"></i>
    </b>
    <div class="row mt-1">
      <div v-for="c in cars" :key="c.id" class="col-md-4 p-4 mb-2">
        <Car :car="c" />
      </div>
    </div>
    <Modal>
      <template #modal-title class="bg-primary">Create Car</template>
      <template #modal-body><CarForm /></template>
    </Modal>
  </div>
</template>


<script>
import { AppState } from "../AppState"
import { computed, reactive, onMounted } from "vue"
import { carsService } from "../services/CarsService"
import Pop from "../utils/Pop"
import { logger } from "../utils/Logger"
export default {
  setup() {
    onMounted(async () => {
      try {
        await carsService.getAll()
      } catch (error) {
        Pop.toast(error.message, "error")
        logger.error(error)
      }
    })
    return {
      cars: computed(() => AppState.cars),
    }
  },
};
</script>


<style scoped>
.create-btn {
  font-size: 20px;
  height: 60px;
  width: 60px;
  z-index: 100;
  position: fixed;
  bottom: 2vh;
  right: 2vh;
}
</style>
