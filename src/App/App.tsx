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
import ProductsRings from '../Products/ProductsCategories/ProductsRings'
import ProductsEarrings from '../Products/ProductsCategories/ProductsEarrings'
import ProductsNecklace from '../Products/ProductsCategories/ProductsNecklace'
import ProductsTiaras from '../Products/ProductsCategories/ProductsTiaras'
import ProductsBracelets from '../Products/ProductsCategories/ProductsBracelets'
import ProductsWatches from '../Products/ProductsCategories/ProductsWatches'
import ProductsPage from '../ProductsPage/ProductsPage'

type ProductsInCart = {
    [id: number]: number
}

type Context = {
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
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

    const changeProductQuantity = (id: number, count: number) => {
        setProductInCart((prevState) => ({
            ...prevState,
            [id]: count,
        }))
    }

    return (
        <>
            <AppContext.Provider
                value={{
                    removeProductFromCart: removeProductFromCart,
                    changeProductQuantity: changeProductQuantity,
                }}
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
                    <Route
                        path="/productRings"
                        element={
                            <ProductsRings
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route
                        path="/productEarrings"
                        element={
                            <ProductsEarrings
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route
                        path="/productsNecklace"
                        element={
                            <ProductsNecklace
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route
                        path="/productsTiaras"
                        element={
                            <ProductsTiaras
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route
                        path="/productsBracelets"
                        element={
                            <ProductsBracelets
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route
                        path="/productsWatches"
                        element={
                            <ProductsWatches
                                addProductToCart={addProductToCart}
                            />
                        }
                    />
                    <Route path="productsPage/:id" element={<ProductsPage />} />
                </Routes>
                <Footer />
            </AppContext.Provider>
        </>
    )
}

export default App
