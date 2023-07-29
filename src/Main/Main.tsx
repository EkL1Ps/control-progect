import './Main.scss'
import ProductListItem from '../components/Product/ProductListItem'
import HerbLogo from './main-image/herb-logo.svg'
import Bracelets from './main-image/Bracelets.svg'
import Earrlings from './main-image/Earrlings.svg'
import Necklaces from './main-image/Necklaces.svg'
import Rings from './main-image/Rings.svg'
import Tiaras from './main-image/Tiaras.svg'
import Watches from './main-image/Watches.svg'
import SaloImage from './main-image/salo-image.webp'
import SutterSpeed from './main-image/sutter-speed.svg'
import NaturalCompany from './main-image/naturalbllablabla.svg'
import UrbanCompany from './main-image/urbancompany.svg'
import SemmerCompany from './main-image/semmercompany.svg'
import IconicCompany from './main-image/iconiccompany.svg'
import AliseBoutiqus from './main-image/alisaboutiqus.svg'
import Email from '../Email/Email'
import { NavLink } from 'react-router-dom'
import Since from '../Since/Since'
import productsArray from '../utils/productsArray'
import MainSlider from '../components/MainSlider/MainSlider'
import slideImgFirst from './main-image/imgForSlider/dark-earrings.webp'
import slideImgSecond from './main-image/imgForSlider/gold-ring.webp'
import slideImgThird from './main-image/imgForSlider/Silver-ring.webp'
type Props = {}

const Main = (props: Props) => {
    return (
        <>
            <MainSlider
                reviews={[
                    {
                        slideID: 1,
                        slideDescription: 'Golder earrings with pearls',
                        slidePrice: 10,
                        sliderImg: `${slideImgFirst}`,
                    },
                    {
                        slideID: 2,
                        slideDescription: 'Wedding Ring with 12 diamonds',
                        slidePrice: 35,
                        sliderImg: `${slideImgSecond}`,
                    },
                    {
                        slideID: 3,
                        slideDescription: 'Silver ring with diamond heart',
                        slidePrice: 35,
                        sliderImg: `${slideImgThird}`,
                    },
                ]}
            />

            <div className="data-under-slider">
                <div className="data-under-slider-container">
                    <div className="row">
                        <div className="col-3 d-u-s-content">
                            <p>35</p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit.
                            </p>
                        </div>
                        <div className="col-3 d-u-s-content">
                            <p>97%</p>
                            <p>
                                Quam aspernatur commodi illum quo eius veniam
                                magni id
                            </p>
                        </div>
                        <div className="col-3 d-u-s-content">
                            <p>58</p>
                            <p>Totam pariatur eveniet autem perspiciatis?</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-categories-container">
                <img src={HerbLogo} alt="" />
                <div className="exclusive-products">
                    <p>3000</p>
                    <p>Exclusive products</p>
                </div>

                <div className="categories">
                    <div className="col-6 categories-block">
                        <NavLink to="/productEarrings">
                            <div className="categories-block-hover">
                                <p className="categories-image">
                                    <img src={Earrlings} alt="Earrlings" />
                                </p>
                                <p>Earrings</p>
                            </div>
                        </NavLink>
                    </div>

                    <div className="col-6 categories-block">
                        <NavLink to="/productsTiaras">
                            <div className="categories-block-hover">
                                <p className="categories-image">
                                    <img src={Tiaras} alt="Tiaras" />
                                </p>
                                <p>Tiaras</p>
                            </div>
                        </NavLink>
                    </div>

                    <div className="col-6 categories-block">
                        <NavLink to="/productRings">
                            <div className="categories-block-hover">
                                <p className="categories-image">
                                    <img src={Rings} alt="Rings" />
                                </p>

                                <p>Rings</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 categories-block">
                        <NavLink to="/productsWatches">
                            <div className="categories-block-hover">
                                <p className="categories-image">
                                    <img src={Watches} alt="Watches" />
                                </p>
                                <p>Watches</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 categories-block">
                        <NavLink to="/productsNecklace">
                            <div className="categories-block-hover">
                                <p className="categories-image">
                                    <img src={Necklaces} alt="Necklaces" />
                                </p>
                                <p>Necklaces</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className="col-6 categories-block">
                        <NavLink to="/productsBracelets">
                            <div className="categories-block-hover">
                                <p className="categories-image">
                                    <img src={Bracelets} alt="Bracelets" />
                                </p>
                                <p>Bracelets</p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="main-under-products-img">
                <div className="row">
                    <div className="new-spring-collection col-2">
                        <h2 className="n-s-c-title">
                            NEW
                            <br />
                            SPRING
                            <br />
                            COLLECTIONS
                        </h2>
                    </div>
                    <div className="discount-20-percent-off col-2">
                        <h2 className="d-20-p-o-title">
                            20%
                            <br />
                            OFF
                        </h2>
                        <p>
                            Dolorum at sunt explicabo illum odio architecto
                            consequuntur vel qui quod ipsum.
                        </p>
                        <NavLink to="/products">
                            <div className="scarlet-button">Products</div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="product-list-container">
                <div className="main-product-title">
                    <h6 className="vestibulum">VESTIBULUM</h6>
                    <h2 className="products-typography">PRODUCTS</h2>
                </div>
                <div className="row main-card">
                    {productsArray
                        .filter((item) => item.location === 'main')
                        .map(({ id, title, price, image, alt }) => (
                            <div className="col-3 product-card" key={id}>
                                <ProductListItem
                                    id={id}
                                    title={title}
                                    price={price}
                                    image={image}
                                    alt={alt}
                                />
                            </div>
                        ))}
                </div>
                <NavLink to="/products">
                    <div className="scarlet-button product-button">
                        Go to shop
                    </div>
                </NavLink>
            </div>
            <Since />
            <div className="surprise-a-loved-one">
                <img src={HerbLogo} alt="logo" />
                <div className="s-a-l-o-title">
                    <p>VESTIBULUM</p>
                    <h2>
                        SURPRICE
                        <br />A LOVED ONE
                    </h2>
                </div>
                <div className="s-a-l-o-content">
                    <div className="row">
                        <div className="s-a-l-o-content-container">
                            <h2>01</h2>
                            <h3>Viverra venenatis donec</h3>
                            <p>
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus
                            </p>
                            <h2>02</h2>
                            <h3>Id augue fermentum</h3>
                            <p>
                                Aliquam nisi blandit aliquet etiam dolor
                                pellentesque
                            </p>
                        </div>
                        <div className="s-a-l-o-image-container">
                            <img
                                className="s-a-l-o-image"
                                src={SaloImage}
                                alt="gift"
                            />
                        </div>
                        <div className="s-a-l-o-content-container t-a-left">
                            <h2>03</h2>
                            <h3>Semper commodo dollud</h3>
                            <p>
                                Dui curabitur elit orci feugiat elementum sapien
                            </p>
                            <h2>04</h2>
                            <h3>Vitae nunc integer vitae</h3>
                            <p>
                                Dictumst dolor sed fringilla curabitur hendrerit
                                vestibulum
                            </p>
                        </div>
                    </div>
                </div>
                <button className="scarlet-button">See offer</button>
            </div>
            <div className="partners-title">
                <div className="partners">
                    <div className="row">
                        <div className="col-6 ">
                            <img src={SutterSpeed} alt="SutterSpeed" />
                        </div>
                        <div className="col-6">
                            <img src={NaturalCompany} alt="NaturalCompany" />
                        </div>
                        <div className="col-6">
                            <img src={UrbanCompany} alt="UrbanCompany" />
                        </div>
                        <div className="col-6">
                            <img src={SemmerCompany} alt="SemmerCompany" />
                        </div>
                        <div className="col-6">
                            <img src={IconicCompany} alt="IconicCompany" />
                        </div>
                        <div className="col-6">
                            <img src={AliseBoutiqus} alt="AliseBoutiqus" />
                        </div>
                    </div>
                </div>
            </div>
            <Email />
        </>
    )
}

export default Main
