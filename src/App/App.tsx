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

type ProductsInCart = {
    [id: number]: number
}

const App = () => {
    const [productsInCart, setProductInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }
    // const addProductToCart = (count: number, price: number) => {
    //     setCartData((prevState) => ({
    //         totalCount: prevState.totalCount + count,
    //         totalPrice: prevState.totalPrice + count * price,
    //     }))
    // }

    return (
        <>
            <Header productsInCart={productsInCart} />
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
                <Route
                    path="/basketPage"
                    element={<BasketPage productsInCart={productsInCart} />}
                />
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
