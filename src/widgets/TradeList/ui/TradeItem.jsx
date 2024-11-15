import React from 'react'
import { Box, Grid2, Typography } from '@mui/material'
import { Iconify, NestedAvatars } from '@shared/ui'
import dayjs from 'dayjs'

const TradeItem = ({
    tokenIcon,
    networkIcon,
    tokenCode,
    date,
    amount,
    type,
}) => {
    return (
        <Grid2 container spacing={2} alignItems={'center'}>
            <Grid2 size={'auto'}>
                <NestedAvatars
                    avatar={tokenIcon}
                    secondaryAvatar={networkIcon}
                />
            </Grid2>
            <Grid2 size={'grow'}>
                <Box>
                    <Typography component={'span'} textTransform={'uppercase'}>
                        {tokenCode} /{' '}
                    </Typography>
                    <Typography
                        component={'span'}
                        variant={'body2'}
                        color={'text.secondary'}>
                        {dayjs(date).format('DD.MM.YY')}
                    </Typography>
                </Box>
                <Typography
                    textTransform={'uppercase'}
                    color={type === 'BUY' ? 'success' : 'error'}>
                    {type === 'BUY' ? '+' : '-'}
                    {amount} ${tokenCode}
                </Typography>
            </Grid2>
            <Grid2 container justifyContent={'end'} size={2}>
                <Iconify
                    sx={{ color: 'text.secondary' }}
                    icon={'material-symbols:arrow-forward-ios-rounded'}
                />
            </Grid2>
        </Grid2>
    )
}

export default TradeItem
