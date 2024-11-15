import React from 'react'
import { Avatar, Box, Grid2 as Grid, Stack, Typography } from '@mui/material'
import { floatAmountToString } from '@shared/utils/functions'
import { networks } from '@_mock/networks.js'

const TokenItem = ({
    currencyCode,
    currencyName,
    currencyPrice,
    amountInWallet,
    balanceInDollars,
    openDialog,
    icon,
}) => {
    return (
        <Box
            onClick={openDialog}
            sx={{
                borderRadius: '16px',
                px: 2,
                py: '14px',
                backgroundColor: 'background.grey',
            }}>
            <Grid container spacing={2}>
                <Grid container size='auto' alignItems={'center'}>
                    <Avatar sx={{ width: 40, height: 40 }} src={icon} />
                </Grid>
                <Grid size={5}>
                    <Box>
                        <Typography
                            sx={{ pr: 0.5 }}
                            fontSize={17}
                            textTransform={'uppercase'}
                            fontWeight={500}
                            component={'span'}>
                            {currencyCode}
                        </Typography>
                        <Typography
                            color={'text.secondary'}
                            variant={'body2'}
                            component={'span'}>
                            {currencyName}
                        </Typography>
                    </Box>
                    <Typography fontSize={15} color={'primary.main'}>
                        ${floatAmountToString(currencyPrice)}
                    </Typography>
                </Grid>
                <Grid size='grow'>
                    <Typography
                        textTransform={'uppercase'}
                        fontWeight={500}
                        align={'right'}>
                        {floatAmountToString(amountInWallet)} {currencyCode}
                    </Typography>
                    <Typography fontSize={15} align={'right'}>
                        ${floatAmountToString(balanceInDollars)}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TokenItem
