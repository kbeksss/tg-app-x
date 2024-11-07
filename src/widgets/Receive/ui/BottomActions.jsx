import React from 'react'
import { Box, Button } from '@mui/material'
import { copyToClipboard } from '@shared/utils/functions'

const BottomActions = ({ copyValue }) => {
    return (
        <Box sx={{ position: 'fixed', bottom: 85, left: 0, right: 0, px: 2 }}>
            <Button
                fullWidth
                onClick={() => copyToClipboard(copyValue)}
                sx={{ mb: 1 }}
                variant={'contained'}>
                Copy
            </Button>
            <Button fullWidth variant={'outlined'}>
                Share
            </Button>
        </Box>
    )
}

export default BottomActions
