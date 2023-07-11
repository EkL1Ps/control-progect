import './Quantity.scss'

type Props = {}
const Quantity = (props: Props) => {
    return (
        <>
            <div className="row">
                <div className="quantity">
                    <button className="decrement-button">-</button>
                    <input type="text" value={1} />
                    <button className="increment-button">+</button>
                </div>
                <div className="add-to-cart-btn">
                    <button>Add to cart</button>
                </div>
            </div>
        </>
    )
}
export default Quantity
