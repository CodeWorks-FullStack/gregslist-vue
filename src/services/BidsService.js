import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BidsService {
  async getCarBids(id) {
    const res = await api.get(`/api/cars/${id}/bids`)
    logger.log("Car Bids", res.data)
    AppState.bids = res.data
  }

  async createBid(bidData) {
    const res = await api.post(`/api/bids`, bidData)
    logger.log('[new bid]', res.data)
    // is this hokey? sure, is create or update on a bid hokey? also sure.
    // NOTE ...res.data pulls the data up a level to the same level as name and picture
    const newBid = {...res.data, name: res.data.bidder.name, picture: res.data.bidder.picture }
    AppState.bids.push(newBid)
  }

  async increaseBid(bidData){
    const res = await api.put('/api/bids/'+ bidData.id, bidData)
    logger.log('[update bid]', res.data)
  }
}

export const bidsService = new BidsService()
