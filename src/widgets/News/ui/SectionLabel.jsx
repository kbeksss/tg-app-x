import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const SectionLabel = ({ label }) => {
    return (
        <Box sx={{ mb: 1.5, px: 2 }}>
            <Stack direction={'row'} spacing={'6px'} alignItems={'center'}>
                <Typography fontWeight={500} >
                    {label}
                </Typography>
                <IconButton
                    sx={{
                        width: 24,
                        height: 24,
                        backgroundColor: 'background.grey',
                    }}>
                    <Iconify
                        color={'text.primary'}
                        width={15}
                        icon={'icon-park-outline:right'}
                    />
                </IconButton>
            </Stack>
        </Box>
    )
}

export default SectionLabel
