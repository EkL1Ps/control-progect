import MainSinceImage from './image/since-block-image.webp'

type Props = {}
const Since = (props: Props) => {
    return (
        <>
            <div className="main-since">
                <div className="row">
                    <div className="since">
                        <h3>since</h3>
                        <p className="since-date n-s-c-title">1990</p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio tempore rem voluptatem asperiores
                            reprehenderit autem atque?
                        </p>
                    </div>
                    <div className="col-2">
                        <img
                            className="main-since-image"
                            src={MainSinceImage}
                            alt="image"
                        />
                    </div>
                    <div className="col-5 since-info">
                        <p>
                            <span className="since-numbers">35</span>
                            <br />
                            Shops all over the world
                        </p>
                        <p>
                            <span className="since-numbers">98%</span>
                            <br />
                            Of happy clients
                        </p>
                        <p>
                            <span className="since-numbers">58</span>
                            <br />
                            Top products used by
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Since
