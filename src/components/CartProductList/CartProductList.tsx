import productsArray, {
    Product,
    getProductObject,
} from '../../utils/productsArray'
import CartProductListItem from './CartProductListItem'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    CartItem?: any
}

const CartProductList = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
    CartItem = CartProductListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInCart).map((productId) => (
                <div className="col-3 product-card">
                    <div className="card-content">
                        <CartItem
                            key={productId}
                            product={productsObject[parseInt(productId)]}
                            productCount={productsInCart[parseInt(productId)]}
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartProductList
