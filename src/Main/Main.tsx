import React from 'react'
import './Main.scss'
import ProductList from '../components/Product/ProductList'
import HerbLogo from './main-image/herb-logo.svg'
import Bracelets from './main-image/Bracelets.svg'
import Earrlings from './main-image/Earrlings.svg'
import Necklaces from './main-image/Necklaces.svg'
import Rings from './main-image/Rings.svg'
import Tiaras from './main-image/Tiaras.svg'
import Watches from './main-image/Watches.svg'
import MainSinceImage from './main-image/since-block-image.webp'
import SaloImage from './main-image/salo-image.webp'
import SutterSpeed from './main-image/sutter-speed.svg'
import NaturalCompany from './main-image/naturalbllablabla.svg'
import UrbanCompany from './main-image/urbancompany.svg'
import SemmerCompany from './main-image/semmercompany.svg'
import IconicCompany from './main-image/iconiccompany.svg'
import AliseBoutiqus from './main-image/alisaboutiqus.svg'
import PlantRegister from './main-image/plantregister.webp'
import Footer from '../Footer/Footer'

type Props = {}

const Main = (props: Props) => {
    return (
        <>
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
                        <div className="categories-block-hover">
                            <p className="categories-image">
                                <img src={Earrlings} alt="Earrlings" />
                            </p>
                            <p>Earrings</p>
                        </div>
                    </div>
                    <div className="col-6 categories-block">
                        <div className="categories-block-hover">
                            <p className="categories-image">
                                <img src={Tiaras} alt="Tiaras" />
                            </p>
                            <p>Tiaras</p>
                        </div>
                    </div>

                    <div className="col-6 categories-block">
                        <div className="categories-block-hover">
                            <p className="categories-image">
                                <img src={Rings} alt="Rings" />
                            </p>
                            <p>Rings</p>
                        </div>
                    </div>

                    <div className="col-6 categories-block">
                        <div className="categories-block-hover">
                            <p className="categories-image">
                                <img src={Watches} alt="Watches" />
                            </p>
                            <p>Watches</p>
                        </div>
                    </div>

                    <div className="col-6 categories-block">
                        <div className="categories-block-hover">
                            <p className="categories-image">
                                <img src={Necklaces} alt="Necklaces" />
                            </p>
                            <p>Necklaces</p>
                        </div>
                    </div>

                    <div className="col-6 categories-block">
                        <div className="categories-block-hover">
                            <p className="categories-image">
                                <img src={Bracelets} alt="Bracelets" />
                            </p>
                            <p>Bracelets</p>
                        </div>
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
                        <a href="#" className="scarlet-button">
                            Products
                        </a>
                    </div>
                </div>
            </div>
            <ProductList />
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
                                alt="image"
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
                <a href="#" className="scarlet-button">
                    See offer
                </a>
            </div>
            <div className="partners-title">
                <div className="partners">
                    <div className="row">
                        <div className="col-6 ">
                            <img src={SutterSpeed} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={NaturalCompany} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={UrbanCompany} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={SemmerCompany} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={IconicCompany} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={AliseBoutiqus} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-register">
                <img src={PlantRegister} alt="image" />
                <h6 className="vestibulum">VESTIBULUM</h6>
                <p>
                    Subscribe to our newsletter
                    <br />
                    and grab <span>30% OFF!</span>
                </p>
                <div>
                    <input type="email" placeholder="Your e-mail" />
                    <a href="#" className="scarlet-button">
                        Sigh Up
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Main
