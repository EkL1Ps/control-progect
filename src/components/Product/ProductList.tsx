import ProductListItem from './ProductListItem'
import './ProductList.scss'
import './ProductListItem.scss'
import productsArray from '../../utils/productsArray'

type Props = {}

const ProductList = (props: Props) => {
    return (
        <>
            <div className="row main-card">
                {productsArray.map(({ id, title, price, image, alt }) => (
                    <div className="col-3 product-card" key={id}>
                        <ProductListItem
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

export default ProductList
