import React from 'react'
import { Product } from '../../utils/productsArray'

type Props = { product: Product; productCount: number }

const CartProductListItemExtended = ({ product, productCount }: Props) => {
    return (
        <>
            <div>
                <img src={product.image} alt={product.alt} />
                <h5 className="product-title">{product.title}</h5>
                <div className="price">${product.price}</div>
                <div className="price">Count: {productCount}</div>
                <button>delete</button>
            </div>
        </>
    )
}

export default CartProductListItemExtended
