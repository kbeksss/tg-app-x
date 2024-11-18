import Big from 'big.js';

// Function to convert ETH to Wei (For Ethereum)
export function toWei(etherValue) {
    const etherBig = new Big(etherValue);
    const weiBig = etherBig.times('1e18');
    return weiBig.toFixed();
}

// Function to convert SOL to Lamports (For Solana)
export function toLamports(solValue) {
    const solBig = new Big(solValue);
    const lamportBig = solBig.times('1e9');
    return lamportBig.toFixed();
}

export function convertToSmallestUnit(value, type) {
    const bigValue = new Big(value);

    const conversionFactors = {
        ETH: '1e18',      // ETH to Wei
        SOL: '1e9',  // SOL to Lamports
    };

    if (!conversionFactors[type]) {
        throw new Error(`Unsupported conversion type: ${type}`);
    }

    // Perform the conversion
    const smallestUnitValue = bigValue.times(conversionFactors[type]);
    return smallestUnitValue.toFixed();
}

export function convertToLargestUnit(value, type) {
    const bigValue = new Big(value);

    // Define conversion factors
    const conversionFactors = {
        ETH: '1e18',      // Wei to ETH
        SOL: '1e9',  // Lamports to SOL
    };

    if (!conversionFactors[type]) {
        throw new Error(`Unsupported conversion type: ${type}`);
    }

    // Perform the reverse conversion
    const largestUnitValue = bigValue.div(conversionFactors[type]);
    return largestUnitValue.toFixed();
}

async function main() {
    console.log(toWei('0.0005'));
    console.log(toLamports('1'));
}

main().then();
