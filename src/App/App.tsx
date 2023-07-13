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
import { useState } from 'react'

type CartData = {
    totalPrice: number
    totalCount: number
}

type ProductsInBasket = {
    [id: number]: number
}

const App = () => {
    const [productsInBasket, setProductsInBasket] = useState<ProductsInBasket>({
        1: 2,
        2: 3,
    })

    const [cartData, setCartData] = useState<CartData>({
        totalPrice: 0,
        totalCount: 0,
    })

    const addProductToCart = (count: number, price: number) => {
        setCartData((prevState) => ({
            totalCount: prevState.totalCount + count,
            totalPrice: prevState.totalPrice + count * price,
        }))
    }

    return (
        <>
            <Header cartData={cartData} />
            <Routes>
                <Route
                    path="/"
                    element={<Main addProductToCart={addProductToCart} />}
                />
                <Route
                    path="/products"
                    element={<Products addProductToCart={addProductToCart} />}
                />
                <Route path="/inspirations" element={<Inspirations />} />
                <Route path="/aboutUsPage" element={<AboutUsPage />} />
                <Route path="/contactsPage" element={<ContactsPage />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="/basketPage" element={<BasketPage />} />
                <Route
                    path="/productListPage"
                    element={
                        <ProductListPage addProductToCart={addProductToCart} />
                    }
                />
            </Routes>
            <Footer />
        </>
    )
}

export default App
