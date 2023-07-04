import './Inspirations.scss'
import InspirationsFirstImage from './images/inspirations-first.webp'
import InspirationsSecondImage from './images/inspirations-second.webp'
import InspirationsThirdImage from './images/inspirations-third.webp'
import InspirationsFourthImage from './images/inspirations-fourt.webp'
import Email from '../Email/Email'

type Props = {}

const Inspirations = (props: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">INSPIRATIONS</div>
            </div>
            <div className="inspirations-content">
                <div className="inspirations-first-block">
                    <div className="row">
                        <p>
                            Enim in scelerisque interdum scelerisque. Nibh diam,
                            sagittis, ut congue sit proin augue non. Tellus urna
                            morbi rhoncus enim velit, semper et, arcu. Orci enim
                            vitae euismod lorem in. Posuere amet, magna pulvinar
                            massa.
                        </p>
                        <div className="col-3">
                            <img
                                src={InspirationsFirstImage}
                                alt="image"
                                className="insp-first-image"
                            />
                        </div>
                    </div>
                </div>
                <div className="inspirations-second-third-fourth-block">
                    <div className="row">
                        <div className="insp-second-fourth-image-block">
                            <img src={InspirationsSecondImage} alt="image" />
                        </div>
                        <div className="insp-second-third-fourth-downblock">
                            <h2>Rhoncus ipsum odio massa tristique.</h2>
                            <p>
                                Amet ipsum, enim massa enim mattis pulvinar.
                                Pretium sem a, sed lacus ac. Mattis sapien nunc
                                malesuada tincidunt. Libero integer velit, lorem
                                est. Velit adipiscing scelerisque eget nunc.
                                Nunc, scelerisque vel netus pulvinar quam
                                phasellus. Aenean at id nam neque fermentum.
                                Sagittis eget bibendum commodo lectus nunc donec
                                tincidunt sociis. Purus magna in diam neque,
                                commodo egestas aliquam blandit.
                            </p>
                            <button className="scarlet-button">
                                See at the store
                            </button>
                        </div>
                    </div>
                </div>
                <div className="inspirations-second-third-fourth-block">
                    <div className="row">
                        <div className="insp-second-third-fourth-downblock isnp-third-downblock">
                            <h2>Cursus convallis placerat sene victus orne</h2>
                            <p>
                                Laoreet fermentum dui cras class ipsum morbi
                                habitant ante senectus dictum venenatis aliquet
                                potenti phasellus augue posuere ultrices aenean
                                at metus sem velit inceptos nullam molestie
                                molestie velit nibh ullamcorper morbi lobortis
                                nisl magna volutpat posuere suspendisse
                                curabitur leo sociosqu ullamcorper faucibus
                                molestie tortor rhoncus ligula congue quam
                                ornare tincidunt amet hendrerit elementum ad
                                habitant.
                            </p>
                            <button className="scarlet-button">
                                See at the store
                            </button>
                        </div>
                        <div className="insp-second-fourth-image-block">
                            <img src={InspirationsThirdImage} alt="image" />
                        </div>
                    </div>
                </div>
                <div className="inspirations-second-third-fourth-block">
                    <div className="row">
                        <div className="insp-second-fourth-image-block">
                            <img src={InspirationsFourthImage} alt="image" />
                        </div>
                        <div className="insp-second-third-fourth-downblock">
                            <h2>
                                Facilisi volutpat dapibus nostra etiam metus
                            </h2>
                            <p>
                                Malesuada efficitur ipsum taciti egestas. Lectus
                                nisl fermentum est consequat vestibulum. In at
                                cubilia pretium magnis hac phasellus. Enim
                                faucibus erat justo orci litora volutpat
                                pellentesque habitant letius. Neque pede pretium
                                egestas bibendum integer libero proin netus
                                turpis quam conubia. Ridiculus vestibulum velit
                                porttitor sapien blandit euismod id et.
                            </p>
                            <button className="scarlet-button">
                                See at the store
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Email />
        </>
    )
}

export default Inspirations
