import React from 'react'
import { Box, Typography } from '@mui/material'

const InfoPlate = () => {
    return (
        <Box
            sx={(theme) => ({
                borderRadius: '20px',
                color: 'text.light',
                padding: '16px 16px 16px 80px',
                border: `1px solid ${theme.palette.error.main}`,
                position: 'relative',
                overflow: 'hidden',
                background:
                    'linear-gradient(90deg, rgba(55,27,26,1) 0%, rgba(4,4,4,1) 100%)',
            })}>

            <Typography
                variant={'subtitle2'}
                textTransform={'uppercase'}
                color={'error.main'}>
                Warning!
            </Typography>
            <Typography fontSize={12}>Use only TRON network</Typography>
            <Box
                sx={{
                    position: 'absolute',
                    left: 0,
                    top: -5,
                    width: 100,
                    height: 80,
                    backgroundImage:
                        "url('/assets/icons/utilities/stop-sign.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />
        </Box>
    )
}

export default InfoPlate
