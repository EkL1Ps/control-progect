export interface IReview {
    slideID: number,
    slideDescription: string,
    slidePrice: number,
    slideImg: string,
}

export interface SliderProps {
    reviews: IReview[];
}