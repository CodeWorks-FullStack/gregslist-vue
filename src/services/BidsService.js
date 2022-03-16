import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class BidsService {
  async getCarBids(id) {
    const res = await api.get(`/api/cars/${id}/bids`)
    logger.log("Car Bids", res.data)
    AppState.bids = res.data
  }

  async create(bidData) {
    const res = await api.post(`/api/bids`, bidData)
    AppState.bids.push(res.data)
  }
}

export const bidsService = new BidsService()