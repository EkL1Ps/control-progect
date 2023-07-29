import { NavLink } from 'react-router-dom'
import FilterIcon from './images/Filter-icon.svg'

type Props = {}
const ProductPageFilter = (props: Props) => {
    return (
        <>
            <div className="filter-tools">
                <div>
                    <span className="filter-icon">
                        <img src={FilterIcon} alt="filter-icon" />
                        Filters
                    </span>
                    <ul className="filter-categories">
                        <NavLink to={'/products'}>
                            <li>All</li>
                        </NavLink>
                        <NavLink to="/productEarrings">
                            <li>Earrings</li>
                        </NavLink>

                        <NavLink to="/productRings">
                            <li>Rings</li>
                        </NavLink>

                        <NavLink to="/productsTiaras">
                            <li>Tiaras</li>
                        </NavLink>

                        <NavLink to="/productsWatches">
                            <li>Watchers</li>
                        </NavLink>

                        <NavLink to="/productsNecklace">
                            <li>Necklaces</li>
                        </NavLink>

                        <NavLink to="/productsBracelets">
                            <li>Bracelets</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default ProductPageFilter
