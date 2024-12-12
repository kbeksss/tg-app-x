import React from 'react'
import { Box } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const Edge = () => {
    const { isDark } = useTg()
    return (
        <Box
            sx={{
                height: 4,
                width: 40,
                borderRadius: 12,
                backgroundColor: isDark ? 'rgba(255,255,255, 15)' : '#000',
                mx: 1,
                opacity: 0.15,
            }}
        />
    )
}

export default Edge
