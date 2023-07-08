import './ProductListItemPage.scss'
import productsArray from '../../utils/productsArray'
import Products from '../../Products/Products'
import SilverRing from '../Product/Silver-ring.webp'
type Props = {}

const ProductListItemPage = (props: Props) => {
    return (
        <>
            <div className="selfPage-product-list-item-wrapper">
                <div className="row">
                    <div className="col-2 selfPage-product-image">
                        <img src={SilverRing} alt="" />
                    </div>
                    <div className="col-2 product-list-item-data">
                        <h2 className="selfPage-product-title">Silver Ring</h2>
                        <p className="selfPage-product-price">Price: 35$</p>
                        <p className="selfPage-product-description">
                            Amet ipsum, enim massa enim mattis pulvinar. Pretium
                            sem a, sed lacus ac. Mattis sapien nunc malesuada
                            tincidunt. Libero integer velit, lorem est. Velit
                            adipiscing scelerisque eget nunc
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListItemPage
