import './BasketPage.scss'
import CartProductList from '../components/CartProductList/CartProductList'
import CartProductListItemExtended from '../components/CartProductList/CartProductListItemExtended'
import { useAppSelector } from '../redux/hooks'

type Props = {
    productsInCart?: {
        [id: number]: number
    }
}

const BasketPage = (props: Props) => {
    const productsInCart = useAppSelector((state) => state.productsInCart)

    return (
        <>
            <div className="products-title">
                <div className="title-h1">CART</div>
            </div>
            <div className="cartProductList">
                <div className="row main-card">
                    <CartProductList
                        productsInCart={productsInCart}
                        CartItem={CartProductListItemExtended}
                    />
                </div>
            </div>
        </>
    )
}

export default BasketPage
