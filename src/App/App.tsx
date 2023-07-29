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
import { createContext } from 'react'
import ProductsRings from '../Products/ProductsCategories/ProductsRings'
import ProductsEarrings from '../Products/ProductsCategories/ProductsEarrings'
import ProductsNecklace from '../Products/ProductsCategories/ProductsNecklace'
import ProductsTiaras from '../Products/ProductsCategories/ProductsTiaras'
import ProductsBracelets from '../Products/ProductsCategories/ProductsBracelets'
import ProductsWatches from '../Products/ProductsCategories/ProductsWatches'
import ProductsPage from '../ProductsPage/ProductsPage'
import MainSlider from '../components/MainSlider/MainSlider'

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

                <Route path="/productRings" element={<ProductsRings />} />
                <Route path="/productEarrings" element={<ProductsEarrings />} />
                <Route
                    path="/productsNecklace"
                    element={<ProductsNecklace />}
                />
                <Route path="/productsTiaras" element={<ProductsTiaras />} />
                <Route
                    path="/productsBracelets"
                    element={<ProductsBracelets />}
                />
                <Route path="/productsWatches" element={<ProductsWatches />} />
                <Route path="productsPage/:id" element={<ProductsPage />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
