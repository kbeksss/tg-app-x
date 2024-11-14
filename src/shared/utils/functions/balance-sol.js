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
        'https://api.mainnet-beta.solana.com',
        'confirmed'
    )
    const walletAddress = 'FnWXaVqEcivuXDTwU3XbKowYfWYKCEFoU2z92YqQcsF3'
    const portfolio = [
        {
            id: '1',
            address: '4X7jzVqsWGKvkophSu61ghHMgyuTs82S6VpNg9uFpump',
            symbol: 'TEST',
            decimals: '9',
            name: 'TEST',
            network: 'SOLANA',
            image: 'image',
            price: '10',
        },
        {
            id: '2',
            address: 'So11111111111111111111111111111111111111112',
            symbol: 'SOL',
            name: 'Solana',
            decimals: '9',
            network: 'SOLANA',
            image: 'image',
            price: '200',
        },
    ]

    const balances = await getSolanaBalance(
        walletAddress,
        portfolio,
        connection
    )
    console.log(balances)
}

test().then()
