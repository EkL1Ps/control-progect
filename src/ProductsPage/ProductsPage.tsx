import { useParams, NavLink } from 'react-router-dom'
import productsArray, {
    Product,
    getProductObject,
} from '../utils/productsArray'
import FreeRuturnImg from './image/days-free-return.svg'
import EasyPaymentImg from './image/easy-payment.svg'
import HoursDeliveryImg from './image/hours-delivery.svg'
import SelfPageWoman from './image/woman-self-page.webp'
import './ProductsPage.scss'

type Props = {
    productsObject?: {
        [id: number]: Product
    }
}
const ProductsPage = ({
    productsObject = getProductObject(productsArray),
}: Props) => {
    const { id } = useParams()

    return (
        <>
            <div className="selfPage-product-list-item-wrapper">
                <div className="row">
                    <div className="col-2 selfPage-product-image">
                        <img
                            src={productsObject[parseInt(id!)].image}
                            alt={productsObject[parseInt(id!)].alt}
                        />
                    </div>
                    <div className="product-list-item-data">
                        <h2 className="selfPage-product-title">
                            {productsObject[parseInt(id!)].title}
                        </h2>
                        <p className="selfPage-product-price">
                            Price: {productsObject[parseInt(id!)].price}$
                        </p>
                        <p className="selfPage-product-description">
                            {productsObject[parseInt(id!)].description}
                        </p>

                        <div className="possibilities">
                            <p>
                                <img src={FreeRuturnImg} alt="FreeRuturnImg" />
                                30 days free return
                            </p>
                            <p>
                                <img
                                    src={EasyPaymentImg}
                                    alt="EasyPaymentImg"
                                />
                                Easy payment
                            </p>
                            <p>
                                <img
                                    src={HoursDeliveryImg}
                                    alt="HoursDeliveryImg"
                                />
                                24 hours delivery
                            </p>
                        </div>
                        <div className="liked-buy">
                            Liked? Buy! <br />
                            <NavLink to="/products">
                                <button className="scarlet-button">
                                    Products
                                </button>
                            </NavLink>
                        </div>
                        <div className="woman-self-page">
                            <img src={SelfPageWoman} alt="woman" />
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
                                {productsObject[parseInt(id!)].categories}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsPage
