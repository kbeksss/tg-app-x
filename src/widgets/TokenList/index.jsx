import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import TokenItem from '@widgets/TokenList/ui/TokenItem.jsx'
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const TokenList = ({ tokens, onTokenClick, tokensLoading }) => {
    const { isDarkMode } = useThemeContext()
    return (
        <Box
            sx={{
                px: 2,
                py: '20px',
                backgroundColor: isDarkMode
                    ? 'background.dark'
                    : 'background.white',
                boxShadow: '0px -1px 10px -1px rgba(34, 60, 80, 0.2)',
                borderRadius: '20px',
            }}>
            <Stack
                sx={{ mb: 2 }}
                direction={'row'}
                justifyContent={'space-between'}>
                <Typography fontWeight={500} color={'text.primary'}>
                    Assets
                </Typography>
                <Typography
                    fontWeight={500}
                    color={'primary.main'}>
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
                        onTokenClick={() => onTokenClick(token)}
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
