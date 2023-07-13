import './Quantity.scss'

type Props = {
    count: number
    onDecrementClick: () => void
    onIncrementClick: () => void
    minCount: number
}
const Quantity = ({
    count,
    onDecrementClick,
    onIncrementClick,
    minCount,
}: Props) => {
    return (
        <>
            <div className="row">
                <div className="quantity">
                    <button
                        className="decrement-button"
                        onClick={() => onDecrementClick()}
                        disabled={count <= minCount}
                    >
                        -
                    </button>
                    <input type="text" value={count} readOnly />
                    <button
                        className="increment-button"
                        onClick={() => onIncrementClick()}
                        disabled={count >= 10}
                    >
                        +
                    </button>
                </div>
            </div>
        </>
    )
}
export default Quantity
