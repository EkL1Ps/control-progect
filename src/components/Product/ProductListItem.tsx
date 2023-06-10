type Props = {
    // image: string
    // title: string
    // price: number
}

const ProductListItem = (props: Props) => {
    return (
        <>
            <div className="col-3 product-card ">
                <div className="card-content">
                    <h5 className="product-title">coin</h5>
                    <div className="price">$ 10</div>
                </div>
            </div>
        </>
    )
}

export default ProductListItem
