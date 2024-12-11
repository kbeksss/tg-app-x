import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TokenItem from '@widgets/TokenList/ui/TokenItem.jsx'
import { useTg } from '@shared/hooks/useTg.js'

const TokenList = ({ tokens, openDialog, tokensLoading }) => {
    const { isDark } = useTg()
    return (
        <Box
            sx={{
                px: 2,
                py: '20px',
                backgroundColor: isDark
                    ? 'darkVersion.grey'
                    : 'background.white',
                boxShadow: '0px -1px 10px -1px rgba(34, 60, 80, 0.2)',
                borderRadius: '20px',
            }}>
            <Stack
                sx={{ mb: 2 }}
                direction={'row'}
                justifyContent={'space-between'}>
                <Typography fontWeight={500} color={isDark ? 'darkVersion.white' : 'unset'}>
                    Assets
                </Typography>
                <Typography
                    fontWeight={500}
                    color={isDark ? 'darkVersion.green' : 'primary.main'}>
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
