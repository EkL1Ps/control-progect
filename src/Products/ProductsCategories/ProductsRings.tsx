import productsArray from '../../utils/productsArray'
import ProductListItem from '../../components/Product/ProductListItem'
import ProductPageFilter from '../../components/ProductPageFilter/ProductPageFilter'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const ProductsRings = ({ addProductToCart }: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">RINGS</div>
            </div>
            <div className="products-container">
                <div className="product-list-container">
                    <ProductPageFilter />
                    <div className="row main-card">
                        {productsArray
                            .filter((item) => item.categories === 'ring')
                            .map(({ id, title, price, image, alt }) => (
                                <div className="col-3 product-card" key={id}>
                                    <ProductListItem
                                        addProductToCart={addProductToCart}
                                        title={title}
                                        price={price}
                                        image={image}
                                        alt={alt}
                                    />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsRings
