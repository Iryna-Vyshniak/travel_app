export const getItemHeight = (md: boolean) => md ? 280 : 480;
export const padding = 12;
export const size = 150;

export const getHeight = (items: string | any[], md: boolean) => {
    const totalHeight = items.length * getItemHeight(md);
    const totalPadding = (items.length - 1) * padding;
    const totalScroll = totalHeight + totalPadding;
    return totalScroll;
}