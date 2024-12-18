import React from 'react'
import { Box, Button } from '@mui/material'
import { copyToClipboard, notify } from '@shared/utils/functions'
import { shareURL } from '@telegram-apps/sdk'

const BottomActions = ({ copyValue }) => {
    const handleShare = () => {
        shareURL('My address:', copyValue)
        notify({ type: 'success', msg: t('REFERRAL_SEND_SUCCESS') })
    }
    return (
        <Box sx={{ position: 'fixed', bottom: 85, left: 0, right: 0, px: 2 }}>
            <Button
                fullWidth
                sx={{
                    mb: 1,
                }}
                onClick={() => copyToClipboard(copyValue)}
                variant={'contained'}>
                Copy
            </Button>
            <Button
                sx={{
                    mb: 1,
                }}
                onClick={handleShare}
                fullWidth
                color={'secondary'}
                variant={'contained'}>
                Share
            </Button>
        </Box>
    )
}

export default BottomActions
