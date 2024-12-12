import React from 'react'
import { Box, Button } from '@mui/material'
import { copyToClipboard, notify } from '@shared/utils/functions'
import { shareURL } from '@telegram-apps/sdk'
import { useTg } from '@shared/hooks/useTg.js'

const BottomActions = ({ copyValue }) => {
    const { isDark } = useTg()
    const handleShare = () => {
        shareURL('My address:', copyValue)
        notify({ type: 'success', msg: t('REFERRAL_SEND_SUCCESS') })
    }
    return (
        <Box sx={{ position: 'fixed', bottom: 85, left: 0, right: 0, px: 2 }}>
            <Button
                fullWidth
                sx={{
                    backgroundColor: isDark ? 'darkVersion.green' : 'primary',
                    mb: 1,
                    color: isDark ? 'black' : 'white',
                }}
                onClick={() => copyToClipboard(copyValue)}
                variant={'contained'}>
                Copy
            </Button>
            <Button
                sx={{
                    backgroundColor: isDark ? 'darkVersion.lightGrey' : 'unset',
                    mb: 1,
                    color: isDark ? 'white' : 'primary',
                }}
                onClick={handleShare}
                fullWidth
                variant={isDark ? 'contained' : 'outlined'}>
                Share
            </Button>
        </Box>
    )
}

export default BottomActions
