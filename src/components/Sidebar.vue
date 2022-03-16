<template>
  <div class="sidebar row flex-column h-100 bg-success p-3 ps-5">
    <h2 class="col-12 selectable p-2 rounded" @click="goTo('Cars')">Cars</h2>
    <h2 class="col-12 selectable p-2 rounded" @click="goTo('Houses')">
      Houses
    </h2>
    <h2 class="col-12 selectable p-2 rounded" @click="goTo('Jobs')">Jobs</h2>
  </div>
</template>


<script>
import { AppState } from "../AppState"
import { computed, reactive, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { logger } from "../utils/Logger"
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    onMounted(() => logger.log(route.name))
    return {
      route,
      goTo(page) {
        router.push({ name: page })
      },
    }
  },
};
</script>


<style scoped>
</style>
