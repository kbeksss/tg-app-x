export const customChartTooltip = (price, fixed) => {
    return `<div>$${Math.fround(price).toFixed(fixed)}</div>`
}
