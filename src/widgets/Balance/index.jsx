import React from 'react'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import Operate from '@widgets/Home/ui/Operate.jsx'

const Balance = ({ balance }) => {
    return (
        <Box sx={{ px: 2, py: 3 }}>
            <Box
                sx={{
                    borderRadius: '20px',
                    backgroundColor: 'background.grey',
                    p: 2,
                }}>
                <Stack spacing={1} alignItems={'center'} direction={'row'}>
                    <Typography variant={'h6'} textTransform={'uppercase'}>
                        Balance
                    </Typography>
                    <Iconify icon={'mdi:hide-outline'} />
                </Stack>
                <Typography variant={'h2'}>
                    <span style={{ color: '#707579' }}>$ </span>
                    {balance}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box>
                    <Operate />
                </Box>
            </Box>
        </Box>
    )
}

export default Balance
