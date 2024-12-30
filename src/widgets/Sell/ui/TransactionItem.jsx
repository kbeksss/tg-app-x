import React, { useMemo } from 'react'
import { Avatar, Box, Grid2, Stack, Typography } from '@mui/material'
import { ItemBox } from '@shared/ui'

const TransactionItem = ({
    symbol,
    token,
    value,
    valueInUSD,
    type,
    tokenImg,
}) => {
    return (
        <ItemBox>
            <Grid2 alignItems={'center'} container spacing={2}>
                <Grid2>
                    <Avatar src={tokenImg} />
                </Grid2>
                <Grid2>
                    <Stack direction={'row'} spacing={1}>
                        <Typography>{symbol}</Typography>
                        <Typography color={'text.secondary'}>
                            {token}
                        </Typography>
                    </Stack>
                    <Stack direction={'row'} spacing={1}>
                        <Typography
                            color={
                                type === 'SELL' ? 'primary.main' : 'error.main'
                            }>
                            {type === 'SELL' ? '+' : '-'}${valueInUSD}
                        </Typography>
                        <Typography color={'text.secondary'}>
                            ({value} {symbol})
                        </Typography>
                    </Stack>
                </Grid2>
            </Grid2>
        </ItemBox>
    )
}

export default TransactionItem
