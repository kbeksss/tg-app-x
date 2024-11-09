import React from 'react'
import { Box, Typography } from '@mui/material'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'
import { SuccessStatus } from '@widgets'
import { BottomButton } from '@shared/ui'
import { useNavigate } from 'react-router-dom'
import {paths} from "@pages/paths.js";

const ExchangeSuccessPage = () => {
    const { getParam } = useQueryParams()
    const navigate = useNavigate()
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
            <BottomButton
                label={'Home'}
                withToolbar
                onClick={() => navigate(paths.home)}
            />
        </Box>
    )
}

export default ExchangeSuccessPage
