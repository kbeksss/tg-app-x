import React, { useState } from 'react'
import { Box } from '@mui/material'
import Recommendations from './ui/Recommendations.jsx'
import { _newsRecommendations } from '@_mock/news.js'
import SectionLabel from './ui/SectionLabel.jsx'
import NewsSection from './ui/NewsSection.jsx'
import { Chart } from '@shared/ui'
import { TokenInfo } from '@features'

const News = () => {
    const [network] = useState('ethereum')
    return (
        <Box sx={{ py: 3 }}>
            {/*<Box sx={{ pb: 3 }}>*/}
            {/*    <Chart token={network} />*/}
            {/*</Box>*/}
            <Box sx={{ pb: 3 }}>
                <TokenInfo />
            </Box>
            <Box sx={{ pb: 3 }}>
                <SectionLabel label={'Recommendations'} />
                <Recommendations recommendations={_newsRecommendations} />
            </Box>
            <Box sx={{ pb: 3 }}>
                <SectionLabel label={'News'} />
                <NewsSection />
            </Box>
        </Box>
    )
}

export default News
