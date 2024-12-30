import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'

const BottomAction = () => {
    return (
        <Box
            sx={{
                px: 2,
                py: '25px',
                backgroundColor: 'background.grey',
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
            }}>
            <Stack
                direction={'row'}
                alignItems={'center'}
                justifyContent={'space-between'}>
                <Box>
                    <Typography variant={'subtitle1'}>Total:</Typography>
                    <Typography variant={'subtitle1'}>100</Typography>
                </Box>
                <Box sx={{ minWidth: 240 }}>
                    <Button fullWidth minWidth={240} variant={'contained'}>
                        Sell
                    </Button>
                </Box>
            </Stack>
        </Box>
    )
}

export default BottomAction
