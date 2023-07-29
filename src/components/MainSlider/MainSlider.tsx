import { SliderProps } from './MainSliderProps'
import './MainSlider.scss'
import cn from 'classnames'
import { useState } from 'react'
import { ReactComponent as Arrow } from './slider-arrowr.svg'
import { NavLink } from 'react-router-dom'

const FADE_DURATION = 300

export const MainSlider = ({ reviews }: SliderProps) => {
    const [slide, setSlide] = useState<number>(0)
    const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>(
        'fade-in'
    )
    const [currentTimer, setCurrentTimer] = useState<NodeJS.Timeout>()

    const handlerClick = (move: number) => {
        const timer = setTimeout(() => {
            setSlide((s) => s + move)
            setFadeState('fade-in')
        }, FADE_DURATION)
        clearTimeout(currentTimer)
        setFadeState('fade-out')
        setCurrentTimer(timer)
    }

    return (
        <>
            <div className="main-slider-wrapper">
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-3 slider-title-block">
                        <div className="slider-title-wrapper">
                            <p className="bejewelry-slider">BEJEWELRY</p>
                            <p className="slider-title">
                                EXSCLUSIVE <br /> JEWELRY
                            </p>
                            <NavLink to="/products">
                                <button className="scarlet-button">
                                    Go to shop
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="col-slider main-slider row">
                        <div
                            className={cn('main-slide row', [fadeState])}
                            style={{ transitionDuration: `${FADE_DURATION}ms` }}
                        >
                            <div
                                className="col-2 left-slide"
                                style={{
                                    backgroundImage: `url(${reviews[slide].slideImg})`,
                                }}
                            ></div>
                            <div className="col-2 right-slide">
                                <div className="slide-description">
                                    {reviews[slide].slideDescription}
                                </div>
                                <div className="slide-price">
                                    $ {reviews[slide].slidePrice}.99
                                </div>
                                <NavLink to="/products">
                                    <span className="slide-buyNow">
                                        Buy now
                                    </span>
                                </NavLink>
                            </div>
                        </div>
                        {slide > 0 && (
                            <button
                                className={cn('arrow', 'arrowLeft')}
                                onClick={() => handlerClick(-1)}
                            >
                                <Arrow />
                            </button>
                        )}
                        {slide < reviews.length - 1 && (
                            <button
                                className={cn('arrow', 'arrowRight')}
                                onClick={() => handlerClick(1)}
                            >
                                <Arrow />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainSlider
