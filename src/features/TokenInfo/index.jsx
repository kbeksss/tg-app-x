import React, { useState } from 'react'
import CryptoChart from '@shared/ui/CryptoChart/index.jsx'
import { useMarketChart } from '@features/TokenInfo/service.js'

const TokenInfo = () => {
    const [days, setDays] = useState(365)
    const [coinId] = useState('ethereum')
    const {
        data: chartData,
        isLoading: isChartDataLoading,
        isError: isChartDataError,
    } = useMarketChart({
        id: coinId,
        days: days,
    })
    return (
        <>
            <CryptoChart series={chartData?.prices} />
        </>
    )
}

export default TokenInfo
