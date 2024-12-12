import React from 'react'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import { useTg } from '@shared/hooks/useTg.js'

const SettingsItem = ({ icon, label, onClick }) => {
    const { isDark } = useTg()
    return (
        <Box
            onClick={onClick}
            sx={{
                borderRadius: '16px',
                py: '14px',
                px: 2,
                backgroundColor: isDark
                    ? 'darkVersion.lightGrey'
                    : 'background.grey',
            }}>
            <Grid2 alignItems={'center'} spacing={2} container>
                <Grid2 size={'auto'} container alignItems={'center'}>
                    {typeof icon === 'string' ? (
                        <Avatar sx={{ width: 40 }} src={icon} />
                    ) : (
                        icon
                    )}
                </Grid2>
                <Grid2 size={'grow'}>
                    <Typography color={isDark ? 'white' : 'black'}>
                        {label}
                    </Typography>
                </Grid2>
                <Grid2 size={2} container justifyContent={'end'}>
                    <Iconify
                        sx={{ color: 'text.secondary' }}
                        icon={'icon-park-outline:right'}
                    />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default SettingsItem
