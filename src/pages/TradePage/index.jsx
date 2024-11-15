import React, { useMemo } from 'react'
import { Box } from '@mui/material'
import { Trade } from '@widgets'
import { useParams } from 'react-router'
import { tradeItems } from '@_mock/trade.js'
import { useTg } from '@shared/hooks/useTg.js'
import { useFetchTransactionQuery } from '@shared/api/services/index.js'
import { networks } from '@_mock/networks.js'

const TradePage = () => {
    useTg({ backButtonVisible: true })
    const { id: tradeHash } = useParams()
    const { data } = useFetchTransactionQuery({ hash: tradeHash })
    const network = useMemo(
        () => networks.find((n) => n.value === data?.network),
        [data]
    )
    return (
        <Box sx={{ pt: 3 }}>
            {data && <Trade trade={data} networkIcon={network?.icon} />}
        </Box>
    )
}

export default TradePage
