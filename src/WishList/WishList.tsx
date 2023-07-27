import CartWishList from '../components/CartWishList/CartWishList'
import CartWishListItemExtended from '../components/CartWishList/CartWishListItemExtended'
import { useAppSelector } from '../redux/hooks'

type Props = {}
const WishList = (props: Props) => {
    const productsInFavorite = useAppSelector(
        (state) => state.productsInFavorite
    )

    return (
        <>
            <div className="products-title">
                <div className="title-h1">Wishlist</div>
            </div>
            <div className="cartProductList">
                <div className="row main-card">
                    <CartWishList
                        productsInFavorite={productsInFavorite}
                        FavoriteCardItem={CartWishListItemExtended}
                    />
                </div>
            </div>
        </>
    )
}
export default WishList
