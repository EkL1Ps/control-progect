import './ContactsPage.scss'
import ContactPageImage from './image/contactPage-image.webp'
import HerbLogo from '../Main/main-image/herb-logo.svg'

type Props = {}
const ContactsPage = (props: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">CONTACT</div>
            </div>
            <div className="contact-content-wrapper">
                <div className="row">
                    <div className="col-4">
                        <h2>Address</h2>
                        <p>
                            Level 13, 2 Elizabeth St, Melbourne, Victoria 3000,
                            Australia
                        </p>
                        <button className="scarlet-button">
                            See on the map
                        </button>
                    </div>
                    <div className="col-2 product-content-second-block">
                        <h2>Have a questions? Contact us!</h2>
                        <p>61 (0) 3 8376 6284</p>
                        <p>noreply@envato.com</p>
                    </div>
                    <div className="col-4  product-content-third-block">
                        <h2>Opening hours</h2>
                        <p>
                            Monday – Friday: <br />
                            06:00 AM – 10:00 PM
                        </p>
                        <p>
                            Saturday – Sunday: <br />
                            08:00 AM – 08:00 PM
                        </p>
                    </div>
                </div>
                <img className="logo-image" src={HerbLogo} alt="herblogo" />
                <div className="question-card">
                    <div className="row">
                        <div className="question-card-content">
                            <div className="col-2">
                                <div className="contactPage-image">
                                    <img
                                        src={ContactPageImage}
                                        alt="contactPageImg"
                                    />
                                </div>
                            </div>
                            <div className="col-2 question-card-inputs">
                                <h2>Do you have any questions?</h2>
                                <input type="text" placeholder="Name" />
                                <input type="email" placeholder="Your email*" />
                                <input type="text" placeholder="Subject" />
                                <textarea
                                    name="your-massage"
                                    placeholder="Message"
                                ></textarea>
                                <div className="scarlet-button submit-scarlet-button">
                                    Send a message
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ContactsPage
