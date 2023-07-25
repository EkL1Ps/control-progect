import productsArray from '../../utils/productsArray'
import ProductsPageListItem from '../ProductsPageListItem'
import ProductPageFilter from '../../components/ProductPageFilter/ProductPageFilter'

type Props = {}
const ProductsEarrings = (props: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">EARRINGS</div>
            </div>
            <div className="products-container">
                <div className="product-list-container">
                    <ProductPageFilter />
                    <div className="row main-card">
                        {productsArray
                            .filter((item) => item.categories === 'earrings')
                            .map(({ id, title, price, image, alt }) => (
                                <div className="col-3 product-card" key={id}>
                                    <ProductsPageListItem
                                        id={id}
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
export default ProductsEarrings
