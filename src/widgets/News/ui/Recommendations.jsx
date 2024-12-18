import React from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'

const Recommendations = ({ recommendations }) => {
    return (
        <Box sx={{ px: 2, overflowX: 'auto' }}>
            <Stack direction={'row'} spacing={2}>
                {recommendations.map((item, index) => (
                    <RecommendationItem
                        key={index}
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
    return (
        <Box
            sx={{
                p: 2,
                minWidth: 320,
                borderRadius: '16px',
                backgroundColor: 'background.grey',
                color: 'text.primary',
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
