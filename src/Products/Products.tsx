import './Products.scss'
import ProductList from '../components/Product/ProductList'
import FilterIcon from './images/Filter-icon.svg'
import productsArray from '../utils/productsArray'

type Props = {
    addProductToCart: (count: number, price: number) => void
}
const Products = ({ addProductToCart }: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">PRODUCTS</div>
            </div>
            <div className="products-container">
                <div className="product-list-container">
                    <div className="filter-tools">
                        <a href="#">
                            <img src={FilterIcon} alt="filter-icon" />
                            Filters
                        </a>
                    </div>
                    <ProductList addProductToCart={addProductToCart} />
                </div>
            </div>
        </>
    )
}
export default Products
