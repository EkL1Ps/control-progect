import React from 'react'
import './Header.scss'
import HeaderLogo from './Logo/header-logo.svg'

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
                                <span>profile</span>
                            </a>
                            <a href="#">
                                <span>liked</span>
                            </a>
                            <a href="#">
                                <span>basket</span>
                            </a>
                            <a href="#">
                                <span>money</span>
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
