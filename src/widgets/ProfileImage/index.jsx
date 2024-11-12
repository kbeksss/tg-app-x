import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ProfileImage = ({
    label,
    icon = '/assets/icons/utilities/user-icon.png',
    width = 80,
}) => {
    return (
        <Box>
            <Stack spacing={2} alignItems={'center'}>
                <Box
                    sx={{
                        borderRadius: '50%',
                        width,
                        height: width,
                        backgroundImage: `url(${icon})`,
                        backgroundSize: 'contain',
                    }}></Box>
                {label && <Typography>{label}</Typography>}
            </Stack>
        </Box>
    )
}

export default ProfileImage
