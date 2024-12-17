import React from 'react'
import { Box } from '@mui/material'
import Recommendations from './ui/Recommendations.jsx'
import { _newsRecommendations } from '@_mock/news.js'
import SectionLabel from './ui/SectionLabel.jsx'
import NewsSection from './ui/NewsSection.jsx'

const News = () => {
    return (
        <Box sx={{ py: 3 }}>
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
