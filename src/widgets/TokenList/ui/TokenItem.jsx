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
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const TokenItem = ({
    currencyCode,
    currencyName,
    currencyPrice,
    amountInWallet,
    balanceInDollars,
    onTokenClick,
    icon,
    isLoading,
}) => {
    return (
        <Box
            onClick={onTokenClick}
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
                                textTransform={'uppercase'}
                                color={'text.primary'}
                                fontWeight={500}>
                                {currencyCode}
                            </Typography>
                        </LoadingElement>
                    </Box>
                    <LoadingElement isLoading={isLoading} width={70}>
                        <Typography color={'text.secondary'} fontSize={15}>
                            {currencyName}
                        </Typography>
                    </LoadingElement>
                </Grid>
                <Grid size='grow'>
                    <LoadingElement
                        isLoading={isLoading}
                        width={50}
                        sx={{ marginLeft: 'auto' }}>
                        <Typography
                            textTransform={'uppercase'}
                            fontWeight={500}
                            color={'text.primary'}
                            align={'right'}>
                            {floatAmountToString(amountInWallet)}
                        </Typography>
                    </LoadingElement>
                    <LoadingElement
                        isLoading={isLoading}
                        width={50}
                        sx={{ marginLeft: 'auto' }}>
                        <Typography
                            variant={'body2'}
                            color={'text.secondary'}
                            align={'right'}>
                            &#8776; ${floatAmountToString(balanceInDollars)}
                        </Typography>
                    </LoadingElement>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TokenItem
