import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ProfileImage = ({ label, icon }) => {
    return (
        <Box>
            <Stack spacing={2} alignItems={'center'}>
                <Box
                    sx={{
                        borderRadius: '50%',
                        width: 80,
                        height: 80,
                        backgroundImage: `url(${icon})`,
                        backgroundSize: 'contain',
                    }}></Box>
                <Typography>{label}</Typography>
            </Stack>
        </Box>
    )
}

export default ProfileImage
