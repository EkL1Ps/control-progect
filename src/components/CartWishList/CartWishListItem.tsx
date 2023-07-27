import React from 'react'
import { Product } from '../../utils/productsArray'

type Props = { product: Product; productCount: number }

const CartWishListItem = ({ product, productCount }: Props) => {
    return (
        <>
            {product.title}: {productCount}
        </>
    )
}

export default CartWishListItem
