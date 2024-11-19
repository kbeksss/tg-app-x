import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import TradeItem from './ui/TradeItem.jsx'
import { tradeItems } from '@_mock/trade.js'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'
import { useLazyFetchTransactionsQuery } from '@shared/api/services'
import InfiniteScroll from 'react-infinite-scroll-component'
import { networks } from '@_mock/networks.js'

const TradeList = () => {
    const [transactions, setTransactions] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const limit = 10

    const [fetchTransactions] = useLazyFetchTransactionsQuery()

    const loadMore = async () => {
        const response = await fetchTransactions({ limit, offset }).unwrap()
        const newTransactions = response.transactions.map((transaction) => {
            const network = networks.find(
                (n) => n.value === transaction.network
            )
            return {
                ...transaction,
                networkIcon: network.icon,
            }
        })

        setTransactions((prev) => {
            return [
                ...prev,
                ...newTransactions.filter(
                    (item) => !prev.some((t) => t.hash === item.hash)
                ),
            ]
        })

        if (newTransactions.length < limit) {
            setHasMore(false)
        }

        setOffset((prev) => prev + limit)
    }

    useEffect(() => {
        loadMore()
    }, [])
    const navigate = useNavigate()
    return (
        <Box sx={{ px: 2 }}>
            <InfiniteScroll
                dataLength={transactions.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<h4>Loading...</h4>}>
                {transactions.map((transaction, index) => (
                    <Box
                        key={index}
                        sx={{ mb: 3 }}
                        onClick={() =>
                            navigate(`${paths.trade}/${transaction.hash}`)
                        }>
                        <TradeItem
                            tokenIcon={transaction.Token.image}
                            networkIcon={transaction.networkIcon}
                            tokenCode={transaction.Token.symbol}
                            date={transaction.createdAt}
                            type={transaction.type}
                            amount={transaction.amount}
                        />
                    </Box>
                ))}
            </InfiniteScroll>
        </Box>
    )
}

export default TradeList
