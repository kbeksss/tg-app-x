import React from 'react'
import { Box, Button } from '@mui/material'

const BottomButton = ({ label, onClick }) => {
    return (
        <Box
            sx={{
                position: 'fixed',
                p: 2,
                bottom: '10px',
                left: 0,
                right: 0,
                zIndex: 99,
            }}>
            <Button fullWidth variant={'contained'} onClick={onClick}>
                {label}
            </Button>
        </Box>
    )
}

export default BottomButton
