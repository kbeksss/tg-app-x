import React, { useMemo } from 'react'
import { Box, Button } from '@mui/material'
import { useCheckIphone } from '@shared/hooks/useCheckIphone.js'

const BottomButton = ({ label, onClick, withToolbar, disabled }) => {
    const isIphone = useCheckIphone()
    const bottomPosition = useMemo(() => {
        return withToolbar ? '70px' : '10px'
    }, [withToolbar, isIphone])
    return (
        <Box
            sx={{
                position: 'fixed',
                p: 2,
                bottom: bottomPosition,
                left: 0,
                right: 0,
                zIndex: 99,
            }}>
            <Button
                disabled={disabled}
                fullWidth
                variant={'contained'}
                onClick={onClick}>
                {label}
            </Button>
        </Box>
    )
}

export default BottomButton
