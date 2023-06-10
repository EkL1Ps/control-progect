type Props = {
    // image: string
    // title: string
    // price: number
}

const ProductListItem = (props: Props) => {
    return (
        <>
            <div className="col-3 product-card ">
                <a href="#" className="card-content">
                    <h5 className="product-title">coin</h5>
                    <div className="price">$ 10</div>
                </a>
            </div>
        </>
    )
}

export default ProductListItem
