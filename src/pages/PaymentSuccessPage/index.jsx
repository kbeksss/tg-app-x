import React from 'react'
import { Box } from '@mui/material'
import { SuccessStatus } from '@widgets'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'

const PaymentSuccessPage = () => {
    const { getParam } = useQueryParams()
    return (
        <Box sx={{ pt: 3 }}>
            <SuccessStatus
                label={'Payment Sent!'}
                description={
                    'The funds will be credited to your wallet within 5 minutes '
                }
                successItems={[
                    { label: 'Date', value: getParam('date') },
                    { label: 'Total', value: getParam('total') },
                    { label: 'Address', value: getParam('address') },
                ]}
            />
        </Box>
    )
}

export default PaymentSuccessPage
