import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TokenItem from '@widgets/TokenList/ui/TokenItem.jsx'

const TokenList = ({ tokens, openDialog, tokensLoading }) => {
    return (
        <Box
            sx={{
                px: 2,
                py: '20px',
                backgroundColor: 'background.grey',
                borderRadius: '20px',
            }}>
            <Stack
                sx={{ mb: 2 }}
                direction={'row'}
                justifyContent={'space-between'}>
                <Typography fontWeight={500}>Assets</Typography>
                <Typography fontWeight={500} color={'primary.main'}>
                    View all
                </Typography>
            </Stack>
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
        </Box>
    )
}

export default TokenList
