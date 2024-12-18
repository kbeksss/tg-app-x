import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const OperateItem = ({ icon, label, onClick }) => {
    const { isDarkMode } = useThemeContext()
    return (
        <Stack onClick={onClick} alignItems={'center'}>
            <Avatar
                sx={{
                    backgroundColor: isDarkMode ? '#000' : 'primary.main',
                }}>
                <Iconify sx={{ color: '#fff' }} icon={icon} />
            </Avatar>
            <Typography color={isDarkMode ? '#000' : 'primary.main'}>
                {label}
            </Typography>
        </Stack>
    )
}

export default OperateItem
