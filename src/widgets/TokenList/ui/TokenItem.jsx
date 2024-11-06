import React from 'react'
import { Box, Grid2 as Grid, Stack, Typography } from '@mui/material'

const TokenItem = ({
    currencyCode,
    currencyName,
    currencyPrice,
    amountInWallet,
    icon,
}) => {
    return (
        <Box
            sx={{
                borderRadius: '16px',
                px: 2,
                py: '14px',
                background: '#F4F4F6',
            }}>
            <Grid container spacing={2}>
                <Grid container size='auto' alignItems={'center'}>
                    <img height={40} src={icon} alt='' />
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
                        ${currencyPrice}
                    </Typography>
                </Grid>
                <Grid size='grow'>
                    <Typography
                        textTransform={'uppercase'}
                        fontWeight={500}
                        align={'right'}>
                        {amountInWallet} {currencyCode}
                    </Typography>
                    <Typography fontSize={15} align={'right'}>
                        ${amountInWallet * currencyPrice}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default TokenItem
