import productsArray, {
    Product,
    getProductObject,
} from '../../utils/productsArray'
import CartWishListItem from './CartWishListItem'

type Props = {
    productsInFavorite: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
    FavoriteCardItem?: any
}

const CartWishList = ({
    productsInFavorite,
    productsObject = getProductObject(productsArray),
    FavoriteCardItem = CartWishListItem,
}: Props) => {
    return (
        <>
            {Object.keys(productsInFavorite).map((productId) => (
                <div className="col-3 product-card">
                    <div className="card-content">
                        <FavoriteCardItem
                            key={productId}
                            product={productsObject[parseInt(productId)]}
                            productCount={
                                productsInFavorite[parseInt(productId)]
                            }
                        />
                    </div>
                </div>
            ))}
        </>
    )
}

export default CartWishList
