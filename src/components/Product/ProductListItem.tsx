import { NavLink } from 'react-router-dom'

type Props = {
    title: string
    price: number
    image: string
    alt: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    title,
    price,
    image,
    alt,
    addProductToCart,
}: Props) => {
    return (
        <>
            <NavLink to={'/productListPage'} className="card-content">
                <img src={image} alt={alt} />
                <h5 className="product-title">{title}</h5>
                <div className="price">${price}</div>
            </NavLink>
        </>
    )
}

export default ProductListItem
