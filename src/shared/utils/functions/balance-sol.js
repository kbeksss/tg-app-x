import { Connection, PublicKey } from '@solana/web3.js'
import Big from 'big.js'

const WSOL = 'So11111111111111111111111111111111111111112'

export async function getSolanaBalance(address, portfolio, connection) {
    try {
        const processedPortfolio = portfolio.filter(
            (token) => token.address !== WSOL
        )

        const networkToken = portfolio.filter((token) => token.address === WSOL)

        const walletPublicKey = new PublicKey(address)

        const solBalance = await connection.getBalance(walletPublicKey)
        const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
            walletPublicKey,
            {
                programId: new PublicKey(
                    'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA'
                ),
            }
        )

        const balanceData = tokenAccounts.value.map((tokenAccount) => {
            const accountInfo = tokenAccount.account.data.parsed.info
            const mintAddress = accountInfo.mint
            const balance = accountInfo.tokenAmount.amount
            return { mintAddress, balance }
        })

        const portfolioWithBalances = portfolioMapper(
            processedPortfolio,
            balanceData
        )

        portfolioWithBalances.push({
            id: networkToken[0].id,
            address: networkToken[0].address,
            symbol: networkToken[0].symbol,
            decimals: networkToken[0].decimals,
            name: networkToken[0].name,
            network: networkToken[0].network,
            image: networkToken[0].image,
            price: networkToken[0].price,
            holdings: Big(solBalance.toString())
                .mul(1)
                .div(Big(10).pow(Number(networkToken[0].decimals)))
                .toString(),
            balance: Big(solBalance.toString())
                .mul(1)
                .div(Big(10).pow(Number(networkToken[0].decimals)))
                .mul(networkToken[0].price ?? '0')
                .toString(),
        })

        return portfolioWithBalances
    } catch (error) {
        console.log(error)
        return portfolioMapper(portfolio, [])
    }
}

function portfolioMapper(portfolio, balanceData) {
    return portfolio.map((token) => {
        const amountBN =
            balanceData.find((mint) => mint.mintAddress === token.address)
                ?.balance ?? '0'
        return {
            id: token.id,
            address: token.address,
            symbol: token.symbol,
            decimals: token.decimals,
            name: token.name,
            network: token.network,
            image: token.image,
            price: token.price,
            holdings: Big(amountBN)
                .mul(1)
                .div(Big(10).pow(Number(token.decimals)))
                .toString(),
            balance: Big(amountBN)
                .mul(1)
                .div(Big(10).pow(Number(token.decimals)))
                .mul(token.price ?? '0')
                .toString(),
        }
    })
}

async function test() {
    console.log('a')
    const connection = new Connection(
        'https://rpc.ankr.com/solana/f923874ebdf1b551a5b0b76555394b72a876ab93c7906468b604937d1726dd96',
        'confirmed'
    )
    const walletAddress = '6ZUeThQ9FovzaS8HejAfGW2VqCXwRYPKKyUNsozpfrSx'
    const portfolio = [
        {
            "id": "solana",
            "address": "So11111111111111111111111111111111111111112",
            "symbol": "SOL",
            "decimals": "9",
            "name": "Solana",
            "network": "SOLANA",
            "image": "https://s2.coinmarketcap.com/static/img/coins/128x128/5426.png",
            "price": "215.432115621288656950756291431785410423968422626254553158",
            "createdAt": "2024-11-12T23:57:54.000Z"
        },
        {
            "id": "61605454-f983-4173-b2a6-d546335526ca",
            "address": "JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",
            "symbol": "JUP",
            "decimals": "6",
            "name": "Jupiter",
            "network": "SOLANA",
            "image": "https://s2.coinmarketcap.com/static/img/coins/128x128/29210.png",
            "price": "1.118946709641720225151980744571717268112079139712340118954951970380371632",
            "createdAt": "2024-11-14T21:26:54.000Z"
        },
    ]

    const balances = await getSolanaBalance(
        walletAddress,
        portfolio,
        connection
    )
    console.log(balances)
}
