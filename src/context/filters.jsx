import { createContext, useState } from "react";


export const FilterCotext = createContext()

// eslint-disable-next-line react/prop-types
export function FiltersProvider({ children }){

    const [filters, setFilters] = useState({
        category:'all',
        minPrice: 0
    })

    return (
        <FilterCotext.Provider value={{
            filters,
            setFilters
        }}
        >
            {children}
        </FilterCotext.Provider>
    )
}