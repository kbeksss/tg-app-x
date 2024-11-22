import React from 'react'
import {
    Avatar,
    Box,
    Grid2 as Grid,
    Skeleton,
    Stack,
    Typography,
} from '@mui/material'
import { floatAmountToString } from '@shared/utils/functions'
import { networks } from '@_mock/networks.js'
import { LoadingElement } from '@shared/ui'

const TokenItem = ({
    currencyCode,
    currencyName,
    currencyPrice,
    amountInWallet,
    balanceInDollars,
    openDialog,
    icon,
    isLoading,
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
                        <LoadingElement isLoading={isLoading}>
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
                        </LoadingElement>
                    </Box>
                    <LoadingElement isLoading={isLoading} width={70}>
                        <Typography fontSize={15} color={'primary.main'}>
                            ${floatAmountToString(currencyPrice)}
                        </Typography>
                    </LoadingElement>
                </Grid>
                <Grid size='grow'>
                    <LoadingElement isLoading={isLoading} width={50} sx={{marginLeft: 'auto'}}>
                        <Typography
                            textTransform={'uppercase'}
                            fontWeight={500}
                            align={'right'}>
                            {floatAmountToString(amountInWallet)} {currencyCode}
                        </Typography>
                    </LoadingElement>
                    <LoadingElement isLoading={isLoading} width={50} sx={{marginLeft: 'auto'}}>
                        <Typography fontSize={15} align={'right'}>
                            ${floatAmountToString(balanceInDollars)}
                        </Typography>
                    </LoadingElement>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TokenItem
