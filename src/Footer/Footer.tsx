import React from 'react'
import './Footer.scss'
import FooterImage1 from './image/footer-image1.webp'
import FooterImage2 from './image/footer-image2.webp'
import FooterImage3 from './image/footer-image3.webp'
import FooterImage4 from './image/footer-image4.webp'
import FooterImage5 from './image/footer-image5.webp'
import FooterImage6 from './image/footer-image6.webp'
import FooterLogo from './image/footer-logo.svg'
import FooterCreditCards from './image/footer-credit-cards.webp'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            <footer className="footer">
                <div className="footer-image">
                    <div className="row">
                        <div className="col-6">
                            <img src={FooterImage1} alt="pieceOfPhoto" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage2} alt="pieceOfPhoto" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage3} alt="pieceOfPhoto" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage4} alt="pieceOfPhoto" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage5} alt="pieceOfPhoto" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage6} alt="pieceOfPhoto" />
                        </div>
                    </div>
                </div>
                <div className="footer-widget-wrapper">
                    <div className="footer-widget">
                        <div className="row">
                            <div className="col-4 footer-widget-first">
                                <img src={FooterLogo} alt="logo" />
                                <p>
                                    Quam pulvinar leo euismod id eu ultricies.
                                    Placerat proin rhoncus sit.
                                </p>
                                <button className="scarlet-button">
                                    Contact us
                                </button>
                                <div className="credit-cards">
                                    <img src={FooterCreditCards} alt="visa" />
                                </div>
                            </div>
                            <div className="col-4 footer-widget-second">
                                <h3>Useful links</h3>
                                <ul>
                                    <li>
                                        <span>Contact Us</span>
                                    </li>
                                    <li>
                                        <span>Help & About us</span>
                                    </li>
                                    <li>
                                        <span>Shipping & Returns</span>
                                    </li>
                                    <li>
                                        <span>Refond Policy</span>
                                    </li>
                                </ul>
                                <h3>Delivery</h3>
                                <ul>
                                    <li>
                                        <span>How it Works</span>
                                    </li>
                                    <li>
                                        <span>Free Delivery</span>
                                    </li>
                                    <li>
                                        <span>FAQ</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 footer-widget-thirt">
                                <h3>Customer Service</h3>
                                <ul>
                                    <li>
                                        <span>Orders</span>
                                    </li>
                                    <li>
                                        <span>Downloads</span>
                                    </li>
                                    <li>
                                        <span>Addresses</span>
                                    </li>
                                    <li>
                                        <span>Accout details</span>
                                    </li>
                                    <li>
                                        <span>Lost password</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 footer-widget-fourth">
                                <h3>Need help?</h3>
                                <span>
                                    <h2>+61 (0) 383 766 284</h2>
                                </span>
                                <span>
                                    <h2>+61 (0) 383 766 284</h2>
                                </span>
                                <ul>
                                    <li> Monday - Friday:</li>
                                    <li> 8am - 5pm</li>
                                </ul>
                                <ul>
                                    <li> Saturday:</li>
                                    <li> 9am - 4pm</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="by-who">
                        © 2023 Betheme by <span>Muffin group</span> | All Rights
                        Reserved | Powered by <span>WordPress</span>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
