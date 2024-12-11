import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import { useTg } from '@shared/hooks/useTg.js'

const OperateItem = ({ icon, label, onClick }) => {
    const { isDark } = useTg()
    return (
        <Stack onClick={onClick} alignItems={'center'}>
            <Avatar
                sx={{
                    backgroundColor: isDark
                        ? 'background.black'
                        : 'primary.main',
                }}>
                <Iconify icon={icon} />
            </Avatar>
            <Typography color={'primary.main'}>{label}</Typography>
        </Stack>
    )
}

export default OperateItem
