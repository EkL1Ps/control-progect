import ProductListItem from './ProductListItem'
import './ProductList.scss'
import './ProductListItem.scss'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <div className="main-product-list">
                <div className="main-product-title">
                    <h6 className="vestibulum">VESTIBULUM</h6>
                    <h2 className="products-typography">PRODUCTS</h2>
                </div>
                <div className="row main-card">
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                    <ProductListItem />
                </div>
            </div>
        </>
    )
}

export default ProductList
