import React from 'react'
import { Box } from '@mui/material'
import TradeItem from './ui/TradeItem.jsx'
import { tradeItems } from '@_mock/trade.js'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'

const TradeList = () => {
    const navigate = useNavigate()
    return (
        <Box sx={{ px: 2 }}>
            {tradeItems.map((trade, index) => (
                <Box
                    key={index}
                    sx={{ mb: 3 }}
                    onClick={() => navigate(`${paths.trade}/${trade.id}`)}>
                    <TradeItem
                        tokenIcon={trade.tokenIcon}
                        networkIcon={trade.networkIcon}
                        tokenCode={trade.currencyCode}
                        date={trade.date}
                        direction={trade.direction}
                        amount={trade.amount}
                    />
                </Box>
            ))}
        </Box>
    )
}

export default TradeList
