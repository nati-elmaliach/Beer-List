import axios from "axios"
import Beer from "../types/Beer"

const BASE_URL = "https://api.punkapi.com/v2/beers"
const perPage = 10


const getBeers = (page: number) => {
  return axios.get<Beer[]>(BASE_URL + `?page=${page}&per_page=${perPage}`).then(res => res.data)
}

export default { getBeers }

