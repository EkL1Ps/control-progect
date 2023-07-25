import { Product } from '../../utils/productsArray'
import TrashIcon from './image/delete-trash-icon.svg'
import './CartProductListItemExtended.scss'
import Quantity from '../Quantity/Quantity'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
    changeProductQuantity,
    removeProductFromCart,
} from '../../redux/cartReducer'

type Props = { product: Product; productCount: number }

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const dispatch = useAppDispatch()
    return (
        <>
            <div>
                <button
                    className="removeProductFromCart-btn"
                    onClick={() => dispatch(removeProductFromCart(product.id))}
                >
                    <img src={TrashIcon} alt="move to trash" />
                </button>
                <img src={product.image} alt={product.alt} />
                <h5 className="product-title">{product.title}</h5>
                <div className="price">${product.price}</div>
                <div className="price">Count: {productCount}</div>
            </div>
            <Quantity
                count={productCount}
                onIncrementClick={() =>
                    dispatch(
                        changeProductQuantity({
                            id: product.id,
                            count: productCount + 1,
                        })
                    )
                }
                onDecrementClick={() =>
                    productCount === 1
                        ? dispatch(removeProductFromCart(product.id))
                        : dispatch(
                              changeProductQuantity({
                                  id: product.id,
                                  count: productCount - 1,
                              })
                          )
                }
                minCount={0}
            />
        </>
    )
}

export default CartProductListItemExtended
