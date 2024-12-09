import React from 'react'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const SettingsItem = ({ icon, label, onClick }) => {
    return (
        <Box
            onClick={onClick}
            sx={{
                borderRadius: '16px',
                py: '14px',
                px: 2,
                backgroundColor: 'background.grey',
            }}>
            <Grid2 alignItems={'center'} spacing={2} container>
                <Grid2 size={'auto'}>
                    <Avatar sx={{ width: 40 }} src={icon} />
                </Grid2>
                <Grid2 size={'grow'}>
                    <Typography>{label}</Typography>
                </Grid2>
                <Grid2 size={2} container justifyContent={'end'}>
                    <Iconify
                        sx={{ color: 'text.secondary' }}
                        icon={'material-symbols:arrow-forward-ios-rounded'}
                    />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default SettingsItem
