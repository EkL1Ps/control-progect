import Header from '../Header/Header'
import Main from '../Main/Main'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import Inspirations from '../Inspirations/Inspirations'
import AboutUsPage from '../AboutUsPage/AboutUsPage'
import ContactsPage from '../ContactsPage/ContactsPage'
import WishList from '../WishList/WishList'
import BasketPage from '../BasketPage/BasketPage'
import ProductListPage from '../components/Product/ProductListPage'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products" element={<Products />} />
                <Route path="/inspirations" element={<Inspirations />} />
                <Route path="/aboutUsPage" element={<AboutUsPage />} />
                <Route path="/contactsPage" element={<ContactsPage />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="/basketPage" element={<BasketPage />} />
                <Route path="/productListPage" element={<ProductListPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
