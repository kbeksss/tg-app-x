import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const Recommendations = ({ recommendations }) => {
    return (
        <Box sx={{ px: 2, overflowX: 'auto' }}>
            <Stack direction={'row'} spacing={2}>
                {recommendations.map((item) => (
                    <RecommendationItem
                        author={item.author}
                        text={item.text}
                        date={item.date}
                        avatar={item.avatarUrl}
                    />
                ))}
            </Stack>
        </Box>
    )
}

const RecommendationItem = ({ author, text, avatar, date }) => {
    const { isDark } = useTg()
    return (
        <Box
            sx={{
                p: 2,
                minWidth: 320,
                borderRadius: '16px',
                backgroundColor: isDark
                    ? 'darkVersion.lightGrey'
                    : 'background.grey',
                color: isDark ? 'white' : 'black',
            }}>
            <Stack direction={'row'} spacing={1.5}>
                <Avatar src={avatar} sx={{ width: 24, height: 24 }} />
                <Stack direction={'row'} spacing={'6px'}>
                    <Typography sx={{ opacity: 0.5 }}>{author} </Typography>
                    <Typography sx={{ opacity: 0.5 }}>&#x22C5;</Typography>
                    <Typography sx={{ opacity: 0.5 }}>{date}</Typography>
                </Stack>
            </Stack>
            <Typography sx={{ mt: 2 }} variant={'body2'}>
                {text}
            </Typography>
        </Box>
    )
}

export default Recommendations
