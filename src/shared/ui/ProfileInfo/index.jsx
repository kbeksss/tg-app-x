import React from 'react'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import { useTg } from '@shared/hooks/useTg.js'

const ProfileInfo = ({ name, username, avatar, editable }) => {
    const { isDark } = useTg()
    return (
        <Box
            sx={{
                borderRadius: '16px',
                p: 2,
                backgroundColor: isDark
                    ? 'darkVersion.lightGrey'
                    : 'background.grey',
            }}>
            <Grid2 spacing={1.5} container alignItems={'center'}>
                <Grid2 size={'auto'}>
                    <Avatar src={avatar} sx={{ width: 50, height: 50 }} />
                </Grid2>
                <Grid2 size={8}>
                    <Typography
                        color={isDark ? 'white' : 'black'}
                        fontWeight={500}>
                        {name}
                    </Typography>
                    <Typography color={isDark ? 'white' : 'black'}>
                        @{username}
                    </Typography>
                </Grid2>
                {editable && (
                    <Grid2 size={'grow'} container justifyContent={'end'}>
                        <Iconify
                            sx={{ color: 'text.secondary' }}
                            icon={'iconamoon:edit-bold'}
                        />
                    </Grid2>
                )}
            </Grid2>
        </Box>
    )
}

export default ProfileInfo
