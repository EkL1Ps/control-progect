import React from 'react'
import './Header.scss'
import HeaderLogo from './Logo/header-logo.svg'
import HeaderProfile from './image/header-profile.svg'
import HeaderLike from './image/header-like.svg'
import HeaderBag from './image/header-bag.svg'
import MenuItem from './MenuItem'

type Props = {}

const Header = (props: Props) => {
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="nav-menu">
                        <ul>
                            <li>
                                <MenuItem to="/">Home</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/products">Products</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/inspirations">
                                    Inspirations
                                </MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/aboutUsPage">About</MenuItem>
                            </li>
                            <li>
                                <MenuItem to="/contacts">Contacts</MenuItem>
                            </li>
                        </ul>
                    </div>
                    <div className="logo">
                        <div>
                            <img src={HeaderLogo} alt="logo" />
                        </div>
                    </div>
                    <div className="top-bar-right">
                        <div className="top-bar-right-nav">
                            <p>
                                <div>
                                    <img src={HeaderProfile} alt="profile" />
                                </div>
                            </p>
                            <p>
                                <div>
                                    <img src={HeaderLike} alt="like" />
                                    <span className="quantity-of-liked">0</span>
                                </div>
                            </p>
                            <p>
                                <div>
                                    <img src={HeaderBag} alt="basket" />
                                    <span className="quantity-in-basket">
                                        0
                                    </span>
                                </div>
                            </p>
                            <p>
                                <div>$0.00</div>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
