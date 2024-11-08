import React from 'react'
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const SuccessStatus = ({ successItems, label, description }) => {
    return (
        <Box sx={{ px: 2 }}>
            <Stack spacing={2} alignItems={'center'}>
                <img
                    style={{ maxWidth: 80 }}
                    src='/assets/icons/utilities/tick.png'
                    alt=''
                />
                <Stack spacing={0.5} alignItems={'center'}>
                    <Typography variant={'h5'}>{label}</Typography>
                    <Typography align={'center'} color={'text.secondary'}>
                        {description}
                    </Typography>
                </Stack>
            </Stack>
            <Divider sx={{ my: 3 }} />
            <InfoItem
                label={'Status'}
                value={
                    <Stack direction={'row'} spacing={1} alignItems={'center'}>
                        <Avatar
                            sx={{
                                width: 24,
                                height: 24,
                                backgroundColor: '#09AB75',
                            }}>
                            <Iconify icon={'mdi:tick'} />
                        </Avatar>
                        <Typography>Success</Typography>
                    </Stack>
                }
            />
            {successItems.map((item, index) => (
                <InfoItem key={index} label={item.label} value={item.value} />
            ))}
        </Box>
    )
}

const InfoItem = ({ label, value }) => {
    return (
        <Stack sx={{ mb: 2 }}>
            <Typography color={'text.secondary'}>{label}</Typography>
            {typeof value === 'string' ? (
                <Typography>{value}</Typography>
            ) : (
                value
            )}
        </Stack>
    )
}

export default SuccessStatus
