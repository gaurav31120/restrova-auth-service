export const calculateDiscount = (
    price: number,
    discountPercentage: number,
): number => {
    return (price * discountPercentage) / 100
}
