import { getEthereumBalance } from './balance.js'
import { JsonRpcProvider } from 'ethers'
import { getSolanaBalance } from '@shared/utils/functions/balance-sol.js'
import { Connection } from '@solana/web3.js'

export const getBalance = async (portfolio, wallets) => {
    const solanaAddress = wallets.find((w) => w.network === 'SOLANA')
    const ethereumAddress = wallets.find((w) => w.network === 'ETHEREUM')

    const solanaNetworks = portfolio.filter(
        (token) => token.network === 'SOLANA'
    )
    const ethereumNetworks = portfolio.filter(
        (token) => token.network === 'ETHEREUM'
    )

    const ethereumProvider = new JsonRpcProvider('https://rpc.ankr.com/eth')
    const solanaConnection = new Connection(
        'https://rpc.ankr.com/solana/f923874ebdf1b551a5b0b76555394b72a876ab93c7906468b604937d1726dd96',
        'confirmed'
    )

    const ethereumBalances = await getEthereumBalance(
        ethereumAddress?.address,
        ethereumNetworks,
        ethereumProvider
    )
    const solanaBalances = await getSolanaBalance(
        solanaAddress?.address,
        solanaNetworks,
        solanaConnection
    )
    return { ethereumBalances, solanaBalances }
}
