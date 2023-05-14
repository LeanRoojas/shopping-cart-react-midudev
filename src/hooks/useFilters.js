
import { useContext } from "react"
import { FilterCotext } from "../context/filters"

export function useFilters() {

    const {filters ,setFilters} = useContext(FilterCotext)
  
    const filterProducts = (products) => {
      return products.filter(product => {
        return (
          product.price >= filters.minPrice &&
          (
            filters.category === 'all' ||
            product.category === filters.category
          )
        )
      })
    }
  
    return {filters,filterProducts, setFilters}
  }
  