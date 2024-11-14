import Big from 'big.js';

// Function to convert ETH to Wei (For Ethereum)
function toWei(etherValue) {
    const etherBig = new Big(etherValue);
    const weiBig = etherBig.times('1e18');
    return weiBig.toFixed();
}

// Function to convert SOL to Lamports (For Solana)
function toLamports(solValue) {
    const solBig = new Big(solValue);
    const lamportBig = solBig.times('1e9');
    return lamportBig.toFixed();
}

async function main() {
    console.log(toWei('0.0005'));
    console.log(toLamports('1'));
}

main().then();
