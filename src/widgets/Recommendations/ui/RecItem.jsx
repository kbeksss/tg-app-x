import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'
dayjs.extend(relativeTime)

const RecItem = ({ image, author, date, text }) => {
    const { isDarkMode } = useThemeContext()
    return (
        <Box
            sx={{
                borderRadius: '10px',
                p: '10px',
                border: isDarkMode
                    ? '1px solid rgba(255,255,255,0.3)'
                    : '1px solid rgba(0,0,0,0.3)',
            }}>
            <Grid2 spacing={'14px'} container>
                <Grid2>
                    <Avatar src={image} />
                </Grid2>
                <Grid2>
                    <Typography  fontWeight={500}>
                        {author}
                    </Typography>
                    <Typography variant={'body2'} color={'text.secondary'}>
                        {dayjs(date).fromNow()}
                    </Typography>
                </Grid2>
            </Grid2>
            <Typography
                sx={{ mt: 2, wordWrap: 'break-word' }}>
                {text}
            </Typography>
        </Box>
    )
}

export default RecItem
