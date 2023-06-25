import React from 'react'
import './Header.scss'
import HeaderLogo from './Logo/header-logo.svg'
import HeaderProfile from './image/header-profile.svg'
import HeaderLike from './image/header-like.svg'
import HeaderBag from './image/header-bag.svg'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="nav-menu">
                        <ul>
                            <li>
                                <a href="http://localhost:3000/">Home</a>
                            </li>
                            <li>
                                <a href="#">Products</a>
                            </li>
                            <li>
                                <a href="#">Inspirations</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <a href="http://localhost:3000/">
                            <img src={HeaderLogo} alt="logo" />
                        </a>
                    </div>
                    <div className="top-bar-right">
                        <div className="top-bar-right-nav">
                            <a href="#">
                                <div>
                                    <img src={HeaderProfile} alt="profile" />
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <img src={HeaderLike} alt="like" />
                                    <span className="quantity-of-liked">0</span>
                                </div>
                            </a>
                            <a href="#">
                                <div>
                                    <img src={HeaderBag} alt="basket" />
                                    <span className="quantity-in-basket">
                                        0
                                    </span>
                                </div>
                            </a>
                            <a href="#">
                                <div>$0.00</div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <div className="slider">slider</div>
        </>
    )
}

export default Header
