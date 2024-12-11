import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const OperateItem = ({ icon, label, onClick }) => {
    return (
        <Stack onClick={onClick} alignItems={'center'}>
            <Avatar sx={{ backgroundColor: 'primary.main' }}>
                <Iconify icon={icon} />
            </Avatar>
            <Typography color={'primary.main'}>{label}</Typography>
        </Stack>
    )
}

export default OperateItem
