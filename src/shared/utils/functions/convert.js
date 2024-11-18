import Big from 'big.js'

export function convertToSmallestUnit(value, type) {
    const bigValue = new Big(value)

    const conversionFactors = {
        ETH: '1e18', // ETH to Wei
        SOL: '1e9', // SOL to Lamports
    }

    if (!conversionFactors[type]) {
        throw new Error(`Unsupported conversion type: ${type}`)
    }

    // Perform the conversion
    const smallestUnitValue = bigValue.times(conversionFactors[type])
    return smallestUnitValue.toFixed()
}

export function convertToLargestUnit(value, type) {
    const bigValue = new Big(value)

    // Define conversion factors
    const conversionFactors = {
        ETH: '1e18', // Wei to ETH
        SOL: '1e9', // Lamports to SOL
    }

    if (!conversionFactors[type]) {
        throw new Error(`Unsupported conversion type: ${type}`)
    }

    // Perform the reverse conversion
    const largestUnitValue = bigValue.div(conversionFactors[type])
    return largestUnitValue.toFixed()
}
