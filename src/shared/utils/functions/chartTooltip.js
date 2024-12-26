export const customChartTooltip = (price, fixed) => {
    return `<div>$${amountToFixed(price, fixed)}</div>`
}

export const amountToFixed = (price, fixed) => {
    return Math.fround(price).toFixed(fixed)
}
