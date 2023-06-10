type Props = {
    title: string
    price: number
}

const ProductListItem = ({ title, price }: Props) => {
    return (
        <>
            <a href="#" className="card-content">
                <h5 className="product-title">{title}</h5>
                <div className="price">${price}</div>
            </a>
        </>
    )
}

export default ProductListItem
