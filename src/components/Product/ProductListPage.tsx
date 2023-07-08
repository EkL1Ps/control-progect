import './ProductListPage.scss'
import ProductListItemPage from './ProductListItemPage'
type Props = {}

const ProductListPage = (props: Props) => {
    return (
        <>
            <div className="selfPage-product-wrapper">
                <div className="productListItemPage">
                    <ProductListItemPage />
                </div>
            </div>
        </>
    )
}

export default ProductListPage
