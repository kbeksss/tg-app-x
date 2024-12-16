import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const InfoPlate = ({ text }) => {
    const { isDark } = useTg()
    return (
        <Box
            sx={(theme) => ({
                borderRadius: '20px',
                color: 'text.light',
                padding: '16px 16px 16px 80px',
                border: `1px solid ${theme.palette.error.main}`,
                position: 'relative',
                overflow: 'hidden',
                background: isDark
                    ? 'linear-gradient(90deg, rgba(55,27,26,1) 0%, rgba(4,4,4,1) 100%)'
                    : 'white',
            })}>
            <Typography
                variant={'subtitle2'}
                textTransform={'uppercase'}
                color={'error.main'}>
                Warning!
            </Typography>
            <Typography
                fontWeight={500}
                fontSize={12}
                color={isDark ? 'white' : 'black'}>
                {text}
            </Typography>
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
