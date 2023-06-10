type Props = {
    title: string
    price: number
    image: string
    alt: string
}

const ProductListItem = ({ title, price, image, alt }: Props) => {
    return (
        <>
            <a href="#" className="card-content">
                <img src={image} alt={alt} />
                <h5 className="product-title">{title}</h5>
                <div className="price">${price}</div>
            </a>
        </>
    )
}

export default ProductListItem
