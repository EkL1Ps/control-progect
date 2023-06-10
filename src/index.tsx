import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Header from './Header/Header'
import Main from './Main/Main'

const App = () => {
    return (
        <>
            <Header />
            <Main />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
