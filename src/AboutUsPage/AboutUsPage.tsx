import Since from '../Since/Since'
import './AboutUsPage.scss'
import HerbLogo from '../Main/main-image/herb-logo.svg'
import AboutUsImage from './image/aboutUsImage.webp'

type Props = {}
const AboutUsPage = (props: Props) => {
    return (
        <>
            <div className="products-title">
                <div className="vestibulum">BEJEWELERY</div>
                <div className="title-h1">ABOUT US</div>
            </div>
            <Since />
            <img className="logo-image" src={HerbLogo} alt="logo" />
            <div className="cart-about-us-wrapper">
                <div className="row">
                    <div className="col-2">
                        <div className="c-a-u-w-first-section">
                            <h2>
                                CURABITUR CRAS NIBH VEL, LECUS. MAURIS AUCTOR
                                ADIPISC SED AC ETIAM VIVERRA.
                            </h2>
                            <p>
                                Amet ipsum, enim massa enim mattis pulvinar.
                                Pretium sem a, sed lacus ac. Mattis sapien nunc
                                malesuada tincidunt. Libero integer velit, lorem
                                est. Velit adipiscing scelerisque eget nunc.
                                Nunc, scelerisque vel netus pulvinar quam
                                phasellus. Aenean at id nam neque fermentum.
                            </p>
                            <span>view collection</span>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="about-us-image">
                            <img src={AboutUsImage} alt="aboutUs" />
                        </div>
                    </div>
                </div>
                <div className="about-us-additional-information">
                    <div className="row">
                        <div className="col-2 border-right">
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
                            <p>
                                Amet ipsum, enim massa enim mattis pulvinar.
                                Pretium sem a, sed lacus ac. Mattis sapien nunc
                                malesuada tincidunt. Libero integer velit, lorem
                                est. Velit adipiscing scelerisque eget nunc.
                                Nunc, scelerisque vel netus pulvinar quam
                                phasellus.
                            </p>
                        </div>
                        <div className="col-2">
                            <p className="about-us-first-p-in-second-block-add-inf">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutUsPage
