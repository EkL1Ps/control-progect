import './ProductListPage.scss'
import ProductListItemPage from './ProductListItemPage'
import productsArray from '../../utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const ProductListPage = ({ addProductToCart }: Props) => {
    return (
        <>
            <div className="selfPage-product-wrapper">
                {productsArray.map(
                    ({
                        id,
                        title,
                        price,
                        image,
                        alt,
                        description,
                        categories,
                    }) => (
                        <div className="productListItemPage" key={id}>
                            <ProductListItemPage
                                addProductToCart={addProductToCart}
                                id={id}
                                title={title}
                                price={price}
                                image={image}
                                alt={alt}
                                description={description}
                                categories={categories}
                            />
                        </div>
                    )
                )}
            </div>
        </>
    )
}

export default ProductListPage
