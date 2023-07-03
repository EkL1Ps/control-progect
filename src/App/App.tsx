import Header from '../Header/Header'
import Main from '../Main/Main'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
