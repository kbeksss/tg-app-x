import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const times = [
    { label: '24H', days: 1 },
    { label: '1W', days: 7 },
    { label: '1M', days: 30 },
    { label: '1Y', days: 365 },
]

const TimeSettings = ({ activeDay, setActiveDay }) => {
    return (
        <Box sx={{ px: 2 }}>
            <Stack direction={'row'} spacing={3}>
                {times.map((t, index) => (
                    <Box
                        onClick={() => setActiveDay(t.days)}
                        key={index}
                        sx={{
                            cursor: 'pointer',
                            borderRadius: '16px',
                            opacity: activeDay === t.days ? '1' : '0.5',
                            py: '10px',
                            px: 2,
                            backgroundColor:
                                activeDay === t.days
                                    ? 'background.grey'
                                    : 'transparent',
                        }}>
                        <Typography fontWeight={500} color={'text.primary'}>
                            {t.label}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </Box>
    )
}

export default TimeSettings
