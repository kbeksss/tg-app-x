import React from 'react'
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'

const PaymentSuccess = () => {
    const { getParam } = useQueryParams()
    return (
        <Box sx={{ px: 2 }}>
            <Stack spacing={2} alignItems={'center'}>
                <img
                    style={{ maxWidth: 80 }}
                    src='/assets/icons/utilities/tick.png'
                    alt=''
                />
                <Stack spacing={0.5} alignItems={'center'}>
                    <Typography variant={'h5'}>Payment Sent!</Typography>
                    <Typography align={'center'} color={'text.secondary'}>
                        The funds will be credited to your wallet within 5
                        minutes
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
            <InfoItem label={'Date'} value={getParam('date')} />
            <InfoItem label={'Total'} value={getParam('total')} />
            <InfoItem label={'Address'} value={getParam('address')} />
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

export default PaymentSuccess
