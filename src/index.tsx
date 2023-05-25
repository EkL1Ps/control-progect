import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

const Header = () => {
    return (
        <header className="header">
            <div className="header-wrapper">
                <div className="nav-menu">
                    <ul>
                        <li>
                            <a href="http://localhost:3000/">
                                <span className="home-icon">
                                    <img src="" alt="" />
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Products</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Inspirations</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>About</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>Contacts</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <a href="#">
                        <img
                            src="https://themes.muffingroup.com/be/jeweler2/wp-content/uploads/2022/04/jeweler2.svg"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className="top-bar-right">
                    <ul>
                        <li>
                            <a href="#">
                                <span>profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>likes</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>basket</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span>money</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

const App = () => {
    return (
        <>
            <Header />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
