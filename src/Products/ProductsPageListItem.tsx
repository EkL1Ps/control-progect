import Quantity from '../components/Quantity/Quantity'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import isLikedBtn from './images/IsLikedBtn.svg'
import isNotLikedBtn from './images/isNotLikedBtn.svg'
import { Link } from 'react-router-dom'
import './ProductsPageListItem.scss'
import { toggleLike } from '../redux/likeReducer'
import { addProductToCart } from '../redux/cartReducer'
import './ProductsPageListItem.scss'
type Props = {
    id: number
    title: string
    price: number
    image: string
    alt: string
    addProductToCart?: (id: number, count: number) => void
}

const ProductsPageListItem = ({ id, title, price, image, alt }: Props) => {
    const [count, setCount] = useState<number>(0)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="card-content">
                <div className="adapt-like-btn">
                    <button
                        className="adapt-LikeBtn"
                        onClick={() => dispatch(toggleLike(id))}
                    >
                        {isLiked ? (
                            <img src={isLikedBtn} alt="isLikedBtn" />
                        ) : (
                            <img src={isNotLikedBtn} alt="isNotLikedBtn" />
                        )}
                    </button>
                </div>
                <img src={image} alt={alt} />
                <h5 className="product-title">{title}</h5>
                <div className="price">${price}</div>
                <Link to={`/productsPage/${id}`}>
                    <div className="more-info-btn">More information</div>
                </Link>

                <div className="row">
                    <Quantity
                        count={count}
                        onIncrementClick={onIncrementClick}
                        onDecrementClick={onDecrementClick}
                        minCount={1}
                    />
                    <div className="add-to-cart-btn">
                        <button
                            onClick={() =>
                                dispatch(addProductToCart({ id, count }))
                            }
                        >
                            Add to cart
                        </button>
                    </div>

                    <button
                        className="LikeBtn"
                        onClick={() =>
                            dispatch({
                                type: 'TOGGLE_LIKE',
                                id,
                            })
                        }
                    >
                        {isLiked ? (
                            <img src={isLikedBtn} alt="isLikedBtn" />
                        ) : (
                            <img src={isNotLikedBtn} alt="isNotLikedBtn" />
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProductsPageListItem
