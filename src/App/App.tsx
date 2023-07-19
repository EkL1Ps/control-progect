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
import { createContext } from 'react'
import { omit } from 'lodash'

type ProductsInCart = {
    [id: number]: number
}

type Context = {
    removeProductFromCart: (id: number) => void
}

export const AppContext = createContext<Context | null>(null)

const App = () => {
    const [productsInCart, setProductInCart] = useState<ProductsInCart>({})

    const addProductToCart = (id: number, count: number) => {
        setProductInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (id: number) => {
        setProductInCart((prevState) => omit(prevState, id))
    }

    return (
        <>
            <AppContext.Provider
                value={{ removeProductFromCart: removeProductFromCart }}
            >
                <Header productsInCart={productsInCart} />
                <Routes>
                    <Route
                        path="/"
                        element={<Main addProductToCart={addProductToCart} />}
                    />
                    <Route
                        path="/products"
                        element={
                            <Products addProductToCart={addProductToCart} />
                        }
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
                            <ProductListPage
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                </Routes>
                <Footer />
            </AppContext.Provider>
        </>
    )
}

export default App
