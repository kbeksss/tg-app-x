import React from 'react'
import { Avatar, Box, Grid2, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'

const ProfileInfo = ({ name, username, avatar, editable }) => {
    return (
        <Box
            sx={{
                borderRadius: '16px',
                p: 2,
                backgroundColor: 'background.grey',
            }}>
            <Grid2 spacing={1.5} container alignItems={'center'}>
                <Grid2 size={'auto'}>
                    <Avatar src={avatar} sx={{ width: 50, height: 50 }} />
                </Grid2>
                <Grid2 size={8}>
                    <Typography fontWeight={500}>
                        {name}
                    </Typography>
                    <Typography >
                        {editable && '@'}
                        {username}
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
