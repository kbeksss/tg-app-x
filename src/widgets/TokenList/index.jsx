import React from 'react'
import { Stack } from '@mui/material'
import TokenItem from '@widgets/TokenList/ui/TokenItem.jsx'

const TokenList = ({ tokens, openDialog, tokensLoading }) => {
    return (
        <Stack spacing={1}>
            {tokensLoading && (
                <>
                    <TokenItem isLoading />
                    <TokenItem isLoading />
                    <TokenItem isLoading />
                </>
            )}
            {tokens.map((token) => (
                <TokenItem
                    key={token.id}
                    icon={token.image}
                    openDialog={() => openDialog(token)}
                    currencyCode={token.symbol}
                    currencyName={token.name}
                    amountInWallet={token.holdings}
                    currencyPrice={token.price}
                    balanceInDollars={token.balance}
                />
            ))}
        </Stack>
    )
}

export default TokenList
