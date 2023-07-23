import './Products.scss'
import ProductsPageList from './ProductsPageList'
import productsArray from '../utils/productsArray'
import ProductPageFilter from '../components/ProductPageFilter/ProductPageFilter'

type Props = {
    addProductToCart: (id: number, count: number) => void
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
                    <ProductPageFilter />
                    <ProductsPageList addProductToCart={addProductToCart} />
                </div>
            </div>
        </>
    )
}
export default Products
