<template>
  <div class="bid border border-dark p-3 my-2">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="rounded-pill" :src="bid.picture" height="50" />
        <p class="f-16 m-0 ms-2">
          <b>{{ bid.name }}</b>
        </p>
      </div>
      <div class="d-flex">
        <p class="f-16 m-0">${{ formatNumber(bid.amount) }}</p>
        <!-- FIXME why does this show up on every bid? And it should not be on the top bid-->
        <button class="btn btn-outline-secondary ms-3" @click="increaseBid">
          Bid: ?????
        </button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    bid: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      formatNumber(num) {
        const iNF = new Intl.NumberFormat('en-US')
        return iNF.format(num)
      },
      increaseBid() {
      }
    }
  }
}
</script>


<style lang="scss" scoped>
</style>