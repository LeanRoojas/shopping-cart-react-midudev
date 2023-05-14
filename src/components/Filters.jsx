import { useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

function Filters() {

    const { setFilters, filters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFitlerId = useId() 

    function handleMinPrice(e) {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value,
        }))
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor={minPriceFilterId}>Precio a partir de:</label>
                <input type="range" value={filters.minPrice} id={minPriceFilterId} min='0' max='1000' onChange={handleMinPrice}/>
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFitlerId}>Categoria</label>
                <select id={categoryFitlerId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portatiles</option>
                    <option value="smartphones">Smart Phones</option>
                    <option value="home-decoration">Home Deco</option>
                </select>
            </div>

        </section>
    )
}

export default Filters