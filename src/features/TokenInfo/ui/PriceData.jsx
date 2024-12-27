import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { amountToFixed } from '@shared/utils/functions/index.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const PriceData = ({ selectedInfo, data }) => {
    const { isDarkMode } = useThemeContext()
    return (
        <>
            <Stack direction={'row'} spacing={1.5}>
                <Typography sx={{ mb: 1 }} color='text.primary' variant={'h4'}>
                    $ {amountToFixed(data?.market_data.current_price.usd, 4)}
                </Typography>
                {selectedInfo && (
                    <Box
                        sx={{
                            borderRadius: '10px',
                            p: 1,
                            backgroundColor: 'primary.main',
                            color: isDarkMode ? '#000' : '#fff',
                        }}>
                        $ {amountToFixed(selectedInfo[1], 4)}
                    </Box>
                )}
            </Stack>
            <Typography
                color={
                    data?.market_data.price_change_24h > 0 ? 'primary' : 'error'
                }>
                {amountToFixed(data?.market_data.price_change_24h, 5)} (
                {amountToFixed(
                    data?.market_data.price_change_percentage_24h,
                    3
                )}
                %)
            </Typography>
        </>
    )
}

export default PriceData
