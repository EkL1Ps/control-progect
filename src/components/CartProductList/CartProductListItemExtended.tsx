import React, { useContext } from 'react'
import { Product } from '../../utils/productsArray'
import { AppContext } from '../../App/App'
import TrashIcon from './image/delete-trash-icon.svg'
import './CartProductListItemExtended.scss'
import Quantity from '../Quantity/Quantity'

type Props = { product: Product; productCount: number }

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    const data = useContext(AppContext)

    return (
        <>
            <div>
                <button
                    className="removeProductFromCart-btn"
                    onClick={() => data?.removeProductFromCart(product.id)}
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
                    data?.changeProductQuantity(product.id, productCount + 1)
                }
                onDecrementClick={() =>
                    data?.changeProductQuantity(product.id, productCount - 1)
                }
                minCount={1}
            />
        </>
    )
}

export default CartProductListItemExtended
