export interface IReview {
    slideID: number,
    slideDescription: string,
    slidePrice: number,
    sliderImg: string
}


export interface SliderProps {
    reviews: IReview[];
}