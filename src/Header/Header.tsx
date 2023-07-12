import './Header.scss'
import HeaderLogo from './Logo/header-logo.svg'
import HeaderProfile from './image/header-profile.svg'
import HeaderLike from './image/header-like.svg'
import HeaderBag from './image/header-bag.svg'
import MenuItem from './MenuItem'
import { NavLink } from 'react-router-dom'

type Props = {
    cartData: {
        totalPrice: number
        totalCount: number
    }
}

const Header = ({ cartData }: Props) => {
    return (
        <>
            <header className="header">
                <div className="header-wrapper">
                    <div className="nav-menu">
                        <ul>
                            <li>
                                <MenuItem to="/">
                                    <span>Home</span>
                                </MenuItem>
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
                                <MenuItem to="/contactsPage">Contacts</MenuItem>
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
                                    <NavLink to={'/wishList'}>
                                        <img src={HeaderLike} alt="like" />
                                        <span className="quantity-of-liked">
                                            0
                                        </span>
                                    </NavLink>
                                </div>
                            </p>
                            <p>
                                <div>
                                    <NavLink to={'/basketPage'}>
                                        <img src={HeaderBag} alt="basket" />
                                        <span className="quantity-in-basket">
                                            {cartData.totalCount}
                                        </span>
                                    </NavLink>
                                </div>
                            </p>
                            <p>
                                <div>${cartData.totalPrice}.00</div>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
