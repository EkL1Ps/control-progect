import './Products.scss'
import ProductsPageList from './ProductsPageList'
import productsArray from '../utils/productsArray'
import ProductPageFilter from '../components/ProductPageFilter/ProductPageFilter'

type Props = {}
const Products = (props: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">PRODUCTS</div>
            </div>
            <div className="products-container">
                <div className="product-list-container">
                    <ProductPageFilter />
                    <ProductsPageList />
                </div>
            </div>
        </>
    )
}
export default Products
