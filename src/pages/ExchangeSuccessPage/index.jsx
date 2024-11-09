import React from 'react'
import { Box, Typography } from '@mui/material'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'
import { SuccessStatus } from '@widgets'

const ExchangeSuccessPage = () => {
    const { getParam } = useQueryParams()
    return (
        <Box sx={{ pt: 3 }}>
            <SuccessStatus
                label={'Exchange completed'}
                description={'The funds will be exchanged within 5 minutes'}
                successItems={[
                    { label: 'Date', value: getParam('date') },
                    {
                        label: 'Sell',
                        value: (
                            <Typography color={'error.main'}>
                                -{getParam('sell')}
                            </Typography>
                        ),
                    },
                    {
                        label: 'Buy',
                        value: (
                            <Typography color={'success.main'}>
                                +{getParam('buy')}
                            </Typography>
                        ),
                    },
                ]}
            />
        </Box>
    )
}

export default ExchangeSuccessPage
