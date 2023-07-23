import ProductsPageListItem from './ProductsPageListItem'
import productsArray from '../utils/productsArray'
import './ProductsPageList.scss'

type Props = {
    addProductToCart: (id: number, count: number) => void
}
const ProductsPageList = ({ addProductToCart }: Props) => {
    return (
        <>
            <div className="row main-card">
                {productsArray.map(({ id, title, price, image, alt }) => (
                    <div className="col-3 product-card" key={id}>
                        <ProductsPageListItem
                            addProductToCart={addProductToCart}
                            id={id}
                            title={title}
                            price={price}
                            image={image}
                            alt={alt}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}
export default ProductsPageList
