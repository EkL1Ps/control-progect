import '../CartProductList/CartProductListItemExtended.scss'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Product } from '../../utils/productsArray'
import { toggleLike } from '../../redux/likeReducer'
import { addProductToFavorite } from '../../redux/wishListReducer'
import isLikedBtn from './images/IsLikedBtn.svg'
import isNotLikedBtn from './images/isNotLikedBtn.svg'
import { useState } from 'react'

type Props = {
    product: Product
    id: number
}

const CartWishListItemExtended = ({ product, id }: Props) => {
    const [count, setCount] = useState<number>(0)

    const isLiked = useAppSelector((state) => state.productsLikeState[id])

    const dispatch = useAppDispatch()

    return (
        <>
            <>
                <div>
                    <button
                        className="wishList-LikeBtn"
                        onClick={() => (
                            dispatch(toggleLike(id)),
                            dispatch(addProductToFavorite({ id, count }))
                        )}
                    >
                        {isLiked ? (
                            <img src={isLikedBtn} alt="isLikedBtn" />
                        ) : (
                            <img src={isNotLikedBtn} alt="isNotLikedBtn" />
                        )}
                    </button>
                    <img src={product.image} alt={product.alt} />
                    <h5 className="product-title">{product.title}</h5>
                    <div className="price">${product.price}</div>
                </div>
            </>
        </>
    )
}

export default CartWishListItemExtended
