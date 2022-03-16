<template>
  <header>
    <Navbar />
  </header>
  <main class="container-fluid d-flex">
    <div class="row flex-grow-1">
      <div class="col-2 p-0">
        <Sidebar />
      </div>
      <div class="col-10">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import { computed } from "vue"
import { AppState } from "./AppState"
export default {
  name: "App",
  setup() {
    return {
      appState: computed(() => AppState),
    }
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
