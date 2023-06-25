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
                            <img src={FooterImage1} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage2} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage3} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage4} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage5} alt="image" />
                        </div>
                        <div className="col-6">
                            <img src={FooterImage6} alt="image" />
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
                                <a href="#" className="scarlet-button">
                                    Contact us
                                </a>
                                <div className="credit-cards">
                                    <img src={FooterCreditCards} alt="visa" />
                                </div>
                            </div>
                            <div className="col-4 footer-widget-second">
                                <h3>Useful links</h3>
                                <ul>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Help & About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping & Returns</a>
                                    </li>
                                    <li>
                                        <a href="#">Refond Policy</a>
                                    </li>
                                </ul>
                                <h3>Delivery</h3>
                                <ul>
                                    <li>
                                        <a href="#">How it Works</a>
                                    </li>
                                    <li>
                                        <a href="#">Free Delivery</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 footer-widget-thirt">
                                <h3>Customer Service</h3>
                                <ul>
                                    <li>
                                        <a href="#">Orders</a>
                                    </li>
                                    <li>
                                        <a href="#">Downloads</a>
                                    </li>
                                    <li>
                                        <a href="#">Addresses</a>
                                    </li>
                                    <li>
                                        <a href="#">Accout details</a>
                                    </li>
                                    <li>
                                        <a href="#">Lost password</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-4 footer-widget-fourth">
                                <h3>Need help?</h3>
                                <a href="#">
                                    <h2>+61 (0) 383 766 284</h2>
                                </a>
                                <a href="#">
                                    <h2>+61 (0) 383 766 284</h2>
                                </a>
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
                        © 2023 Betheme by <a href="#">Muffin group</a> | All
                        Rights Reserved | Powered by <a href="#">WordPress</a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
