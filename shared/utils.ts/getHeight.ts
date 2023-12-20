export const height = 240;
export const padding = 10;
export const size = 620;

export const getHeight = (items: string | any[]) => {
    const totalHeight = items.length * height;
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalHeight + totalPadding;
    return totalScroll;
}