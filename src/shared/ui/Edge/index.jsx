import React from 'react'
import { Box } from '@mui/material'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const Edge = () => {
    const { isDarkMode } = useThemeContext()
    return (
        <Box
            sx={{
                height: 4,
                width: 40,
                borderRadius: 12,
                backgroundColor: isDarkMode ? 'rgba(255,255,255, 15)' : '#000',
                mx: 1,
                opacity: 0.15,
            }}
        />
    )
}

export default Edge
