import { AppState } from "../AppState"
import { api } from "./AxiosService"


class CarsService {
  async getAll() {
    const res = await api.get('api/cars')
    AppState.cars = res.data
  }

  async getById(id) {
    const res = await api.get('api/cars/' + id)
    AppState.activeCar = res.data
  }

  async create(carData) {
    const res = await api.post('api/cars', carData)
    AppState.cars.push(res.data)
    // NOTE returns car to the form so you can push from there
    return res.data
  }

  async update(carData) {
    const res = await api.put('api/cars/' + carData.id, carData)
    AppState.activeCar = res.data
  }
}

export const carsService = new CarsService()
