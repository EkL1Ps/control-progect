import { useParams } from 'react-router-dom'
import productsArray, {
    Product,
    getProductObject,
} from '../utils/productsArray'
import Quantity from '../components/Quantity/Quantity'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import isLikedBtn from './image/IsLikedBtn.svg'
import isNotLikedBtn from './image/isNotLikedBtn.svg'
import FreeRuturnImg from './image/days-free-return.svg'
import EasyPaymentImg from './image/easy-payment.svg'
import HoursDeliveryImg from './image/hours-delivery.svg'
import SelfPageWoman from './image/woman-self-page.webp'

type Props = {
    id?: number
    productsObject?: {
        [id: number]: Product
    }
    addProductToCart: (id: number, count: number) => void
}
const ProductsPage = ({
    id,
    productsObject = getProductObject(productsArray),
    addProductToCart,
}: Props) => {
    const { pageId } = useParams()

    const [count, setCount] = useState<number>(0)

    const onIncrementClick = () => {
        setCount((prevState) => prevState + 1)
    }
    const onDecrementClick = () => {
        setCount((prevState) => prevState - 1)
    }
    const isLiked = useAppSelector((state) => state.productsLikeState[id!])
    const dispatch = useAppDispatch()

    return (
        <>
            <div className="selfPage-product-list-item-wrapper">
                <div className="row">
                    <div className="col-2 selfPage-product-image">
                        <img
                            src={productsObject[parseInt(pageId!)].image}
                            alt={productsObject[parseInt(pageId!)].alt}
                        />
                    </div>
                    <div className="product-list-item-data">
                        <h2 className="selfPage-product-title">
                            {productsObject[parseInt(pageId!)].title}
                        </h2>
                        <p className="selfPage-product-price">
                            Price: {productsObject[parseInt(pageId!)].price}$
                        </p>
                        <p className="selfPage-product-description">
                            {productsObject[parseInt(pageId!)].description}
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
                                    onClick={() => addProductToCart(id!, count)}
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
                            Categories:{' '}
                            <span>
                                {productsObject[parseInt(pageId!)].categories}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsPage
