import React from 'react'
import { Avatar, Box, Button, Grid2, Stack, Typography } from '@mui/material'
import { BottomButton, Iconify, NestedAvatars } from '@shared/ui'
import dayjs from 'dayjs'

const Trade = ({ trade, networkIcon }) => {
    return (
        <Box>
            <Box sx={{ px: 3 }}>
                {trade && (
                    <Grid2 alignItems={'center'} container spacing={2}>
                        <Grid2 size={'auto'}>
                            <NestedAvatars
                                avatar={trade.Token.image}
                                secondaryAvatar={networkIcon}
                            />
                        </Grid2>
                        {trade.type === 'BUY' && (
                            <Grid2 size={'grow'}>
                                <Typography>Recommendation from</Typography>
                                <Typography color={'primary'}>
                                    {trade?.Kol?.username}
                                </Typography>
                            </Grid2>
                        )}
                    </Grid2>
                )}
                <Typography
                    sx={{
                        mt: 2,
                        color:
                            trade.type === 'BUY'
                                ? 'success.main'
                                : 'error.main',
                    }}
                    variant={'h1'}>
                    {trade.type === 'BUY' ? '+' : '-'}
                    {trade.amount} $
                    <span style={{ textTransform: 'uppercase' }}>
                        {trade.Token.symbol}
                    </span>
                </Typography>
                <Typography color={'text.secondary'}>
                    {dayjs(trade.createdAt).format('DD.MM.YYYY [at] h:mm A')}
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
                <Button
                    sx={{ mt: 3, border: '1px dashed #707579' }}
                    fullWidth
                    variant={'outlined'}
                    component='a'
                    href={
                        trade?.network === 'SOLANA'
                            ? `https://solscan.io/tx/${trade?.hash}`
                            : `https://etherscan.io/tx/${trade?.hash}`
                    }
                    target='_blank'
                    rel='noopener noreferrer'>
                    Check explorer
                </Button>
            </Box>
            {trade.type === 'BUY' && (
                <BottomButton label={'Sell'} withToolbar />
            )}
        </Box>
    )
}

export default Trade
