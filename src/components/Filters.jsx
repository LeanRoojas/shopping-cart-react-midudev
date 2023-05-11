import { useState } from 'react'
import './Filters.css'
function Filters() {

    const [minPrice, setMinPrice] = useState(0)

    const handleMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    return (
        <section className="filters">

            <div>
                <label htmlFor="price">Precio a partir de:</label>
                <input type="range" id="price" min='0' max='1000' onChange={handleMinPrice}/>
                <span>${minPrice}</span>
            </div>

            <div>
                <label htmlFor="category">Categoria</label>
                <select id="category">
                    <option value="all">Todas</option>
                    <option value="laptos">Portatiles</option>
                    <option value="alsmartphones">Smart Phones</option>
                    <option value="home-decorations">Home Deco</option>
                </select>
            </div>

        </section>
    )
}

export default Filters