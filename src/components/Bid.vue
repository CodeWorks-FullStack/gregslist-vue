<template>
  <div class="bid border border-dark p-3 my-2">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex align-items-center">
        <img class="rounded-pill" :src="accountBid.picture" height="50" />
        <p class="f-16 m-0 ms-2">
          <b>{{ accountBid.name }}</b>
        </p>
      </div>
      <div class="d-flex">
        <p class="f-16 m-0">${{ formatNumber(accountBid.amount) }}</p>
        <!-- FIXME why does this show up on every bid? And it should not be on the top bid-->
        <button
          v-if="
            account.id == accountBid.id && highestBid.bidId != accountBid.bidId
          "
          class="btn btn-outline-secondary ms-3"
          @click="increaseBid(highestBid.amount + 100)"
        >
          Bid: {{ highestBid.amount + 100 }}
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { bidsService } from "../services/BidsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  props: {
    accountBid: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      highestBid: computed(
        () => AppState.bids.sort((a, b) => b.amount - a.amount)[0]
      ),
      account: computed(() => AppState.account),
      formatNumber(num) {
        const iNF = new Intl.NumberFormat("en-US");
        return iNF.format(num);
      },
      async increaseBid(amount) {
        try {
          props.accountBid.amount = amount;
          await bidsService.increaseBid(props.accountBid);
        } catch (error) {
          logger.error(error);
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
</style>
