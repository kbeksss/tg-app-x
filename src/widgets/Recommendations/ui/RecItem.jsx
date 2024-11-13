import React from 'react'
import { Avatar, Box, Grid2, Typography } from '@mui/material'

const RecItem = () => {
    return (
        <Box
            sx={{
                borderRadius: '10px',
                p: '10px',
                border: '1px solid rgba(0,0,0,0.3)',
            }}>
            <Grid2 spacing={'14px'} container>
                <Grid2>
                    <Avatar src={'/assets/images/ana_de.jpeg'}></Avatar>
                </Grid2>
                <Grid2>
                    <Typography fontWeight={500}>Watcher Guru</Typography>
                    <Typography variant={'body2'} color={'text.secondary'}>
                        8 h. ago
                    </Typography>
                </Grid2>
            </Grid2>
            <Typography sx={{ mt: 2 }}>
                i think WILL DO GREAT 0x6982508145454ce325ddbe47a25d4ec3d2311933
                $BEBEPEPE
            </Typography>
        </Box>
    )
}

export default RecItem
