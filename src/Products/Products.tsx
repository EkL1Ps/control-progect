import './Products.scss'
import ProductList from '../components/Product/ProductList'
import FilterIcon from './images/Filter-icon.svg'

type Props = {}
const Products = (props: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="products-title-h1">PRODUCTS</div>
            </div>
            <div className="products-container">
                <div className="product-list-container">
                    <div className="filter-tools">
                        <a href="#">
                            <img src={FilterIcon} alt="filter-icon" />
                            Filters
                        </a>
                    </div>
                    <ProductList />
                </div>
            </div>
        </>
    )
}
export default Products
