import React, { useState } from 'react'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import TradeItem from './ui/TradeItem.jsx'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'
import { useIntersectionObserver, useQuery } from '@siberiacancode/reactuse'
import { axiosRequest } from '@shared/api/xhr'
import { networks } from '@_mock/networks.js'

const TradeList = () => {
    const [transactions, setTransactions] = useState([])
    const [offset, setOffset] = useState(0)
    const [hasMore, setHasMore] = useState(true)
    const limit = 10

    const { ref } = useIntersectionObserver({
        threshold: 1,
        onChange: (entry) => {
            if (entry.isIntersecting) setOffset((prev) => prev + limit)
        },
    })

    const navigate = useNavigate()
    const { isSuccess } = useQuery(
        () =>
            axiosRequest
                .get('/api/v1/account/transaction', {
                    params: { limit, offset },
                })
                .then((res) => res.data),
        {
            keys: [offset],
            onSuccess: (data) => {
                if (data?.transactions.length < limit) {
                    setHasMore(false)
                }
                const newTransactions = data?.transactions.map(
                    (transaction) => {
                        const network = networks.find(
                            (n) => n.value === transaction.network
                        )
                        return {
                            ...transaction,
                            networkIcon: network.icon,
                        }
                    }
                )
                setTransactions((prev) => [
                    ...prev,
                    ...newTransactions.filter(
                        (item) => !prev.some((t) => t.hash === item.hash)
                    ),
                ])
            },
        }
    )
    return (
        <Box
            sx={{
                px: 2,
            }}>
            {isSuccess && !transactions.length ? (
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    sx={{ height: '100%' }}>
                    <Typography variant={'h5'}>No Transactions :(</Typography>
                    <Typography color={'text.secondary'} align={'center'}>
                        You haven't made any transactions yet
                    </Typography>
                </Stack>
            ) : (
                <Box>
                    {transactions?.map((transaction, index) => (
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
                    {hasMore && (
                        <Box ref={ref}>
                            <Stack alignItems={'center'}>
                                <CircularProgress />
                            </Stack>
                        </Box>
                    )}
                </Box>
            )}
        </Box>
    )
}

export default TradeList
