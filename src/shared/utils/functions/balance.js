import { Contract, Interface, JsonRpcProvider } from 'ethers'
import Big from 'big.js'

export const METHODS = {
    BALANCE: 'balanceOf',
}

const multicallABI = [
    {
        constant: true,
        inputs: [
            {
                components: [
                    { name: 'target', type: 'address' },
                    { name: 'callData', type: 'bytes' },
                ],
                name: 'calls',
                type: 'tuple[]',
            },
        ],
        name: 'aggregate',
        outputs: [
            { name: 'blockNumber', type: 'uint256' },
            { name: 'returnData', type: 'bytes[]' },
        ],
        stateMutability: 'view',
        type: 'function',
    },
]

const balanceABI = [
    {
        constant: true,
        inputs: [{ name: 'owner', type: 'address' }],
        name: 'balanceOf',
        outputs: [{ name: 'balance', type: 'uint256' }],
        type: 'function',
    },
]

const MULTICALL = '0xca11bde05977b3631167028862be2a173976ca11'
const WETH = '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'

const tokenInterface = new Interface(balanceABI)

export async function getEthereumBalance(address, portfolio, provider) {
    try {
        const multicall = new Contract(MULTICALL, multicallABI, provider)

        const processedPortfolio = portfolio.filter(
            (token) => token.address !== WETH
        )

        const networkToken = portfolio.filter((token) => token.address === WETH)

        const calls = processedPortfolio.map((token) => {
            const callData = tokenInterface.encodeFunctionData(
                METHODS.BALANCE,
                [address]
            )

            return {
                target: token.address,
                callData: callData,
            }
        })

        const [{ returnData }, networkBalance] = await Promise.all([
            multicall.aggregate(calls),
            provider.getBalance(address),
        ])

        const portfolioWithBalances = portfolioMapper(
            processedPortfolio,
            returnData
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
            holdings: Big(networkBalance.toString())
                .mul(1)
                .div(Big(10).pow(Number(networkToken[0].decimals)))
                .toString(),
            balance: Big(networkBalance.toString())
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
    return portfolio.map((token, index) => {
        const amountBN =
            balanceData[index] === null || balanceData[index] === undefined
                ? '0'
                : tokenInterface
                      .decodeFunctionResult(
                          METHODS.BALANCE,
                          balanceData[index]
                      )[0]
                      .toString()
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
    const provider = new JsonRpcProvider('https://rpc.ankr.com/eth')
    const walletAddress = '0x0Bc08Ed0b5dFaDd38F8D375AA1FC87A8f5A1b958'
    const portfolio = [
        {
            id: 'ethereum',
            address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
            symbol: 'ETH',
            decimals: '18',
            name: 'Ethereum',
            network: 'ETHEREUM',
            image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/1027.png',
            price: '3134.18909043403',
            createdAt: '2024-11-12T23:59:07.000Z',
        },
        {
            id: '141c51e0-c11d-4802-adfd-1a1480aa367d',
            address: '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',
            symbol: 'GRT',
            decimals: '18',
            name: 'Graph Token',
            network: 'ETHEREUM',
            image: 'https://s2.coinmarketcap.com/static/img/coins/128x128/6719.png',
            price: '0.176866473396456',
            createdAt: '2024-11-14T21:26:48.000Z',
        },
    ]

    const balances = await getEthereumBalance(
        walletAddress,
        portfolio,
        provider
    )
    console.log(balances)
}

test().then()
