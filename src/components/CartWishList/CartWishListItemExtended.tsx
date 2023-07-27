import TrashIcon from './image/delete-trash-icon.svg'
import './CartProductListItemExtended.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    changeProductQuantity,
    removeProductFromCart,
} from '../../redux/cartReducer'
import { Product } from '../../utils/productsArray'
import { Link } from 'react-router-dom'

type Props = { product: Product; productCount: number; id: number }

const CartWishListItemExtended = ({ product, productCount, id }: Props) => {
    const dispatch = useAppDispatch()

    return (
        <>
            <>
                <div>
                    <img src={product.image} alt={product.alt} />
                    <h5 className="product-title">{product.title}</h5>
                    <div className="price">${product.price}</div>
                    <div className="price">Count: {productCount}</div>
                    <Link to={`/productsPage/${id}`}>
                        <div className="more-info-btn">More information</div>
                    </Link>
                </div>
            </>
        </>
    )
}

export default CartWishListItemExtended
