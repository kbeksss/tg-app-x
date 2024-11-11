import React, { useMemo } from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import { NestedAvatars } from '@shared/ui'
import { tradeItems } from '@_mock/trade.js'

const Trade = ({ tradeId }) => {
    const trade = useMemo(
        () => tradeItems.find((t) => t.id === tradeId),
        [tradeId]
    )
    console.log('trade', trade)
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
            </Box>
        </Box>
    )
}

export default Trade
