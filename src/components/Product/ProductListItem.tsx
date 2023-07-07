import { NavLink } from 'react-router-dom'

type Props = {
    title: string
    price: number
    image: string
    alt: string
}

const ProductListItem = ({ title, price, image, alt }: Props) => {
    return (
        <>
            <NavLink to={'/productListItemPage'} className="card-content">
                <img src={image} alt={alt} />
                <h5 className="product-title">{title}</h5>
                <div className="price">${price}</div>
            </NavLink>
        </>
    )
}

export default ProductListItem
