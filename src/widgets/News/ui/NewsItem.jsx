import React from 'react'
import { Avatar, Box, Button, Stack, Typography } from '@mui/material'

const NewsItem = ({ author, date, text, avatarUrl, img }) => {
    return (
        <Box
            sx={{
                borderRadius: '16px',
                p: 2,
                mb: 2,
                backgroundColor: 'background.grey',
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
                            <Typography fontWeight={500} >
                                {author}
                            </Typography>
                            <Typography
                                fontSize={12}
                                sx={{ opacity: 0.5 }}>
                                {date}
                            </Typography>
                        </Box>
                    </Stack>
                    <Button
                        color={'primary'}
                        size={'small'}
                        variant={'contained'}>
                        Subscribe
                    </Button>
                </Stack>
                <Box>
                    <Typography variant={'body2'} >
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
