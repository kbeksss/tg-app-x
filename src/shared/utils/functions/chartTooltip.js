export const customChartTooltip = (price, fixed) => {
    return `<div class="chart-tooltip">$${amountToFixed(price, fixed)}</div>`
}

export const amountToFixed = (price, fixed) => {
    return Math.fround(price).toFixed(fixed)
}
