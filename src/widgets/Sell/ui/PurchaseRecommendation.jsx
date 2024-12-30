import React from 'react'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { ItemBox } from '@shared/ui'

const PurchaseRecommendation = () => {
    return (
        <Box sx={{ px: 2 }}>
            <Typography sx={{ mb: 1.5 }}>
                Purchased based on a recommendation
            </Typography>
            <ItemBox>
                <Grid2 spacing={1.5} alignItems={'center'} container>
                    <Grid2>
                        <Avatar sx={{ width: 50, height: 50 }} />
                    </Grid2>
                    <Grid2>
                        <Typography lineHeight={1} variant={'subtitle1'}>
                            Watcher Guru
                        </Typography>
                        <Typography fontSize={14}>@watcherguru</Typography>
                    </Grid2>
                </Grid2>
            </ItemBox>
        </Box>
    )
}

export default PurchaseRecommendation
