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
        </>
    )
}

export default Main
