import React from 'react'
import { Box, IconButton, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import { useTg } from '@shared/hooks/useTg.js'

const SectionLabel = ({ label }) => {
    const { isDark } = useTg()
    return (
        <Box sx={{ mb: 1.5, px: 2 }}>
            <Stack direction={'row'} spacing={'6px'} alignItems={'center'}>
                <Typography fontWeight={500} color={isDark ? 'white' : 'black'}>
                    {label}
                </Typography>
                <IconButton
                    sx={{
                        width: 24,
                        height: 24,
                        backgroundColor: isDark
                            ? 'darkVersion.lightGrey'
                            : 'background.grey',
                    }}>
                    <Iconify
                        color={isDark ? 'white' : 'black'}
                        width={15}
                        icon={'icon-park-outline:right'}
                    />
                </IconButton>
            </Stack>
        </Box>
    )
}

export default SectionLabel
