export type Product = {
    id: number
    title: string
    price: number
    image: string
    alt: string
    description: string
    categories: string
}

const productsArray: Product[] = [
    {
        id: 1,
        title: 'Dark earrings',
        price: 10,
        image: '/images/dark-earrings.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'earrings',
    },
    {
        id: 2,
        title: 'Fancy earrings',
        price: 12,
        image: '/images/fancy-earrings.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'earrings',
    },
    {
        id: 3,
        title: 'Gold necklace',
        price: 100,
        image: '/images/gold-necklace.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'necklace',
    },
    {
        id: 4,
        title: 'Gold ring',
        price: 35,
        image: '/images/gold-ring.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'ring',
    },
    {
        id: 5,
        title: 'Head crown',
        price: 1480,
        image: '/images/head-crown.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'crown',
    },
    {
        id: 6,
        title: 'Light earrings',
        price: 12,
        image: '/images/light-earrings.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'earrings',
    },
    {
        id: 7,
        title: 'Queen bracelet',
        price: 1120,
        image: '/images/Queen-bracelet.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'bracelet',
    },
    {
        id: 8,
        title: 'Silver ring',
        price: 35,
        image: '/images/Silver-ring.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'ring',
    },
    {
        id: 9,
        title: 'Wedding ring',
        price: 320,
        image: '/images/Wedding-ring.webp',
        alt: 'image',
        description:
            'Amet ipsum, enim massa enim mattis pulvinar. Pretium sem a, sed lacus ac. Mattis sapien nunc malesuada tincidunt. Libero integer velit, lorem est. Velit adipiscing scelerisque eget nunc.',
        categories: 'ring',
    },
]

export const getProductObject = (array: Product[]) =>
    array.reduce(
        (object, product) => ({
            ...object,
            [product.id]: product,
        }),
        {}
    )

export default productsArray
