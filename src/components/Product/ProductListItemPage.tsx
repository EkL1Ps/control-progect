import './ProductListItemPage.scss'
import productsArray from '../../utils/productsArray'
import SilverRing from '../Product/Silver-ring.webp'
import Quantity from '../Quantity/Quantity'
import FreeRuturnImg from './images/days-free-return.svg'
import EasyPaymentImg from './images/easy-payment.svg'
import HoursDeliveryImg from './images/hours-delivery.svg'
import SelfPageWoman from './images/woman-self-page.webp'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
// import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button } from '@mui/material'
import styled from '@emotion/styled'
import isLikedBtn from './images/IsLikedBtn.svg'
import isNotLikedBtn from './images/isNotLikedBtn.svg'

type Props = {
    id: number
    title: string
    price: number
    description: string
    image: string
    alt: string
    categories?: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItemPage = ({
    id,
    title,
    price,
    description,
    image,
    alt,
    categories,
    addProductToCart,
}: Props) => {
    const [count, setCount] = useState<number>(0)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const isLiked = useAppSelector((state) => state.productsLikeState[id])
    const dispatch = useAppDispatch()

    const LikeBtn = styled(Button)({
        width: '30px',
        height: '30px',
        display: 'blick',
    })

    return (
        <>
            <div className="selfPage-product-list-item-wrapper">
                <div className="row">
                    <div className="col-2 selfPage-product-image">
                        <img src={image} alt={alt} />
                    </div>
                    <div className="product-list-item-data">
                        <h2 className="selfPage-product-title">{title}</h2>
                        <p className="selfPage-product-price">
                            Price: {price}$
                        </p>
                        <p className="selfPage-product-description">
                            {description}
                        </p>
                        <div className="row">
                            <Quantity
                                count={count}
                                onIncrementClick={onIncrementClick}
                                onDecrementClick={onDecrementClick}
                                minCount={1}
                            />
                            <div className="add-to-cart-btn">
                                <button
                                    onClick={() => addProductToCart(id, count)}
                                >
                                    Add to cart
                                </button>
                            </div>
                            {/* <LikeBtn className="likeBtn">
                                {isLiked ? (
                                    <FavoriteIcon />
                                ) : (
                                    <FavoriteBorderIcon />
                                )}
                            </LikeBtn> */}
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
                                    <img
                                        src={isNotLikedBtn}
                                        alt="isNotLikedBtn"
                                    />
                                )}
                            </button>
                        </div>

                        <div className="possibilities">
                            <p>
                                <img src={FreeRuturnImg} alt="image" />
                                30 days free return
                            </p>
                            <p>
                                <img src={EasyPaymentImg} alt="image" />
                                Easy payment
                            </p>
                            <p>
                                <img src={HoursDeliveryImg} alt="image" />
                                24 hours delivery
                            </p>
                        </div>
                        <div className="woman-self-page">
                            <img src={SelfPageWoman} alt="image" />
                        </div>
                        <div className="perfect-gift">
                            <h2>Perfect gift</h2>
                            <p>
                                Amet ipsum, enim massa enim mattis pulvinar.
                                Pretium sem a, sed lacus ac. Mattis sapien nunc
                                malesuada tincidunt. Libero integer velit, lorem
                                est. Velit adipiscing scelerisque eget nunc.
                                Nunc, scelerisque vel netus pulvinar quam
                                phasellus. Aenean at id nam neque fermentum.
                                Sagittis eget bibendum commodo lectus nunc donec
                                tincidunt sociis. Purus magna in diam neque,
                                commodo egestas aliquam blandit.
                            </p>
                        </div>
                        <div className="features">
                            <h2>Features</h2>
                            <div className="row">
                                <div className="col-2">
                                    <p>
                                        Metus ultricies curabitur sodales ipsum
                                        elit cubilia.
                                    </p>
                                    <p>
                                        Aliquam elementum ligula erat arcu
                                        maecenas hac elementum.
                                    </p>
                                </div>
                                <div className="col-2">
                                    <p>
                                        Tempor consequat turpis turpis vivamus
                                        quam fusce.
                                    </p>
                                    <p>
                                        Consequat fusce maecenas morbi phasellus
                                        magna nisl.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <p className="self-page-categories">
                            Categories: <span>{categories}</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductListItemPage
