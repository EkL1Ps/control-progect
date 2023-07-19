import productsArray from '../../utils/productsArray'
import ProductListItem from '../../components/Product/ProductListItem'
import FilterIcon from '../images/Filter-icon.svg'

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
                    <div className="filter-tools">
                        <a href="#">
                            <img src={FilterIcon} alt="filter-icon" />
                            Filters
                        </a>
                    </div>
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
