import './Header.scss'
import HeaderLogo from './Logo/header-logo.svg'
import HeaderProfile from './image/header-profile.svg'
import HeaderLike from './image/header-like.svg'
import HeaderBag from './image/header-bag.svg'
import MenuItem from './MenuItem'
import { NavLink } from 'react-router-dom'
import productsArray, {
    Product,
    getProductObject,
} from '../utils/productsArray'
import CartTotal from '../components/CartTotal/CartTotal'

type Props = {
    productsInCart: {
        [id: number]: number
    }
    productsObject?: {
        [id: number]: Product
    }
}

const Header = ({
    productsInCart,
    productsObject = getProductObject(productsArray),
}: Props) => (
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
                            <MenuItem to="/inspirations">Inspirations</MenuItem>
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
                        <div>
                            <p>
                                <img src={HeaderProfile} alt="profile" />
                            </p>
                        </div>
                        <div>
                            <p>
                                <NavLink to={'/wishList'}>
                                    <img src={HeaderLike} alt="like" />
                                    <span className="quantity-of-liked">0</span>
                                </NavLink>
                            </p>
                        </div>
                        <div>
                            <p>
                                <NavLink to={'/basketPage'}>
                                    <img src={HeaderBag} alt="basket" />
                                    {/* {Object.keys(productsInCart).map(
                                        (productId) => (
                                            <span className="quantity-in-basket">
                                                {
                                                    productsInCart[
                                                        parseInt(productId)
                                                    ]
                                                }
                                            </span>
                                        )
                                    )} */}
                                    <span className="quantity-in-basket">
                                        {''}
                                        {Object.keys(productsInCart).reduce(
                                            (count, productId) =>
                                                count +
                                                productsInCart[
                                                    parseInt(productId)
                                                ],
                                            0
                                        )}
                                    </span>
                                </NavLink>
                            </p>
                        </div>
                        <div>
                            <p>
                                <CartTotal productsInCart={productsInCart} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
)

export default Header
