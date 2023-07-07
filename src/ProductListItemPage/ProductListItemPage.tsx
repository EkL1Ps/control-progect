import './ProductListItemPage.scss'
import productsArray from '../utils/productsArray'

type Props = {}

const ProductListItemPage = (props: Props) => {
    return (
        <>
            <div className="product-list-item-wrapper">
                <div className="row">
                    <div className="col-2 product-list-item-image"></div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}

export default ProductListItemPage
