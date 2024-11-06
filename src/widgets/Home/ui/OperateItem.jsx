import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const OperateItem = ({ icon, label }) => {
    return (
        <Stack alignItems={'center'}>
            <Avatar sx={{ backgroundColor: 'primary.main' }}>
                <Iconify icon={icon} />
            </Avatar>
            <Typography>{label}</Typography>
        </Stack>
    )
}

export default OperateItem
