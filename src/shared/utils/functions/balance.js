import { Contract, Interface, JsonRpcProvider } from "ethers";
import Big from "big.js";

export const METHODS = {
    BALANCE: "balanceOf",
};

const multicallABI = [
    {
        constant: true,
        inputs: [
            {
                components: [
                    { name: "target", type: "address" },
                    { name: "callData", type: "bytes" },
                ],
                name: "calls",
                type: "tuple[]",
            },
        ],
        name: "aggregate",
        outputs: [
            { name: "blockNumber", type: "uint256" },
            { name: "returnData", type: "bytes[]" },
        ],
        stateMutability: "view",
        type: "function",
    },
];

const balanceABI = [
    {
        constant: true,
        inputs: [{ name: "owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
    },
];

const MULTICALL = "0xca11bde05977b3631167028862be2a173976ca11";
const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

const tokenInterface = new Interface(balanceABI);

export async function getEthereumBalance(address, portfolio, provider) {
    try {
        const multicall = new Contract(MULTICALL, multicallABI, provider);

        const processedPortfolio = portfolio.filter(
            (token) => token.address !== WETH
        );

        const networkToken = portfolio.filter((token) => token.address === WETH);

        const calls = processedPortfolio.map((token) => {
            const callData = tokenInterface.encodeFunctionData(
                METHODS.BALANCE,
                [address]
            );

            return {
                target: token.address,
                callData: callData,
            };
        });

        const [{ returnData }, networkBalance] = await Promise.all([
            multicall.aggregate(calls),
            provider.getBalance(address),
        ]);

        const portfolioWithBalances = portfolioMapper(
            processedPortfolio,
            returnData
        );

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
                .mul(networkToken[0].price ?? "0")
                .toString(),
        });

        return portfolioWithBalances;
    } catch (error) {
        console.log(error);
        return portfolioMapper(portfolio, []);
    }
}

function portfolioMapper(portfolio, balanceData) {
    return portfolio.map((token, index) => {
        const amountBN =
            balanceData[index] === null || balanceData[index] === undefined
                ? "0"
                : tokenInterface.decodeFunctionResult(
                    METHODS.BALANCE,
                    balanceData[index]
                )[0].toString();
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
                .mul(token.price ?? "0")
                .toString(),
        };
    });
}

async function test() {
    const provider = new JsonRpcProvider("https://rpc.ankr.com/eth");
    const walletAddress = "0x4f65d0D6F4FaaE7Af4AEFfCDfC17d7590A837Ab3";
    const portfolio = [
        {
            id: "1",
            address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
            symbol: "SUSHI",
            decimals: "18",
            name: "Sushi",
            network: "ETHEREUM",
            image: "image",
            price: "10",
        },
        {
            id: "2",
            address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
            symbol: "ETH",
            name: "Ethereum",
            decimals: "18",
            network: "ETHEREUM",
            image: "image",
            price: "3000",
        },
        {
            id: "2",
            address: "0xd1d2Eb1B1e90B638588728b4130137D262C87cae",
            symbol: "GALA",
            name: "Gala",
            decimals: "8",
            network: "ETHEREUM",
            image: "image",
            price: "10",
        },
    ];

    const balances = await getEthereumBalance(walletAddress, portfolio, provider);
    console.log(balances);
}

test().then();
