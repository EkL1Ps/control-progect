import productsArray, {
    Product,
    getProductObject,
} from '../../utils/productsArray'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => {
    return (
        <>
            ${' '}
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}
            .00
        </>
    )
}

export default CartTotal
