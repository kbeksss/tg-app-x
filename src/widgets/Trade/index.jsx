import React, { useMemo } from 'react'
import { Avatar, Box, Grid2, Stack, Typography } from '@mui/material'
import { BottomButton, Iconify, NestedAvatars } from '@shared/ui'
import { tradeItems } from '@_mock/trade.js'

const Trade = ({ tradeId }) => {
    const trade = useMemo(
        () => tradeItems.find((t) => t.id === tradeId),
        [tradeId]
    )
    return (
        <Box>
            <Box sx={{ px: 3 }}>
                {trade && (
                    <Grid2 alignItems={'center'} container spacing={2}>
                        <Grid2 size={'auto'}>
                            <NestedAvatars
                                avatar={trade.tokenIcon}
                                secondaryAvatar={trade.networkIcon}
                            />
                        </Grid2>
                        {trade.direction === 'positive' && (
                            <Grid2 size={'grow'}>
                                <Typography>Recommendation from</Typography>
                                <Typography color={'primary'}>
                                    @WatcherGuru
                                </Typography>
                            </Grid2>
                        )}
                    </Grid2>
                )}
                <Typography
                    sx={{
                        mt: 2,
                        color:
                            trade.direction === 'positive'
                                ? 'success.main'
                                : 'error.main',
                    }}
                    variant={'h1'}>
                    {trade.direction === 'positive' ? '+' : '-'}
                    {trade.amount} $
                    <span style={{ textTransform: 'uppercase' }}>
                        {trade.currencyCode}
                    </span>
                </Typography>
                <Typography color={'text.secondary'}>
                    06.11.2024 at 8:40 AM
                </Typography>
                <Box
                    sx={{
                        mt: 3,
                        borderRadius: '16px',
                        px: 2,
                        py: 1.5,
                        backgroundColor: 'background.grey',
                    }}>
                    <Typography variant={'body2'} color={'text.secondary'}>
                        Status
                    </Typography>
                    <Stack direction={'row'} spacing={1}>
                        <Avatar
                            sx={{
                                width: 24,
                                height: 24,
                                backgroundColor: '#09AB75',
                            }}>
                            <Iconify icon={'mdi:tick'} />
                        </Avatar>
                        <Typography>Successful</Typography>
                    </Stack>
                </Box>
            </Box>
            {trade.direction === 'positive' && (
                <BottomButton label={'Sell'} withToolbar />
            )}
        </Box>
    )
}

export default Trade
