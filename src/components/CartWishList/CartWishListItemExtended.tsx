import '../CartProductList/CartProductListItemExtended.scss'
import { Product } from '../../utils/productsArray'
import { Link } from 'react-router-dom'

type Props = {
    product: Product
    id: number
}

const CartWishListItemExtended = ({ product }: Props) => {
    return (
        <>
            <div>
                <img src={product.image} alt={product.alt} />
                <h5 className="product-title">{product.title}</h5>
                <div className="price">${product.price}</div>
                <Link to={`/productsPage/${product.id}`}>
                    <div className="more-info-btn">More information</div>
                </Link>
            </div>
        </>
    )
}

export default CartWishListItemExtended
