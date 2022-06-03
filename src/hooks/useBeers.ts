import { useEffect, useState } from "react"
import Beer from "../types/Beer"
import api from "../services/punkApi"

export const useBeers = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const [beers, setBeers] = useState<Beer[]>([])
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBeers(pageNumber)
  }, [])

  const fetchBeers = async (page: number) => {
    try {
      const newData = await api.getBeers(page)
      setBeers(beers.concat(newData))
      setPageNumber(page)
    } catch (error) {
      setError("Somthing went wrong,Could not fetch...")
    }
  }

  const loadMoreBeers = () => {
    fetchBeers(pageNumber + 1)
  }

  return [beers, loadMoreBeers, error] as const
}