import React from 'react'
import { Box } from '@mui/material'
import Recommendations from './ui/Recommendations.jsx'
import { _newsRecommendations } from '@_mock/news.js'

const News = () => {
    return (
        <Box sx={{ py: 3 }}>
            <Recommendations recommendations={_newsRecommendations} />
        </Box>
    )
}

export default News
