import { Link } from 'react-router-dom'

type Props = {
    id: number
    title: string
    price: number
    image: string
    alt: string
    addProductToCart: (id: number, count: number) => void
}

const ProductListItem = ({
    id,
    title,
    price,
    image,
    alt,
    addProductToCart,
}: Props) => {
    return (
        <>
            <Link to={`/productsPage/${id}`} className="card-content">
                <img src={image} alt={alt} />
                <h5 className="product-title">{title}</h5>
                <div className="price">${price}</div>
            </Link>
        </>
    )
}

export default ProductListItem
