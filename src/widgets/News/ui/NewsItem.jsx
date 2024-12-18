import React from 'react'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const NewsItem = ({ author, date, text, avatarUrl, img }) => {
    const { isDark } = useTg()
    return (
        <Box
            sx={{
                borderRadius: '16px',
                p: 2,
                mb: 2,
                backgroundColor: isDark
                    ? 'darkVersion.lightGrey'
                    : 'background.grey',
            }}>
            <Stack spacing={3}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent={'space-between'}>
                    <Stack
                        spacing={1.5}
                        direction={'row'}
                        alignItems={'center'}>
                        <Avatar sx={{ width: 36, height: 36 }} />
                        <Box>
                            <Typography
                                fontWeight={500}
                                color={isDark ? 'white' : 'black'}>
                                {author}
                            </Typography>
                            <Typography
                                fontSize={12}
                                color={isDark ? 'white' : 'black'}
                                sx={{ opacity: 0.5 }}>
                                {date}
                            </Typography>
                        </Box>
                    </Stack>
                    <Button
                        sx={{
                            color: isDark ? 'black' : 'white',
                            backgroundColor: isDark
                                ? 'darkVersion.green'
                                : 'primary',
                        }}
                        size={'small'}
                        variant={'contained'}>
                        Subscribe
                    </Button>
                </Stack>
                <Box>
                    <Typography
                        variant={'body2'}
                        color={isDark ? 'white' : 'black'}>
                        {text}
                    </Typography>
                </Box>
                <Box>
                    {img && (
                        <img
                            style={{ borderRadius: '22px' }}
                            width={'100%'}
                            src='/assets/mocks/graph.jpg'
                        />
                    )}
                </Box>
            </Stack>
        </Box>
    )
}

export default NewsItem
