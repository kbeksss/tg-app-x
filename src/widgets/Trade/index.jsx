import React, { useMemo, useState } from 'react'
import {
    Avatar,
    Box,
    Button,
    Grid2,
    Link,
    Stack,
    Typography,
} from '@mui/material'
import { BottomButton, Iconify, NestedAvatars } from '@shared/ui'
import dayjs from 'dayjs'
import {
    useFetchAccountPortfolioQuery,
    useFetchTransactionQuery,
} from '@shared/api/services/index.js'
import { useSelector } from 'react-redux'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { networks } from '@_mock/networks.js'
import { SellTokens } from '@widgets'
import { useParams } from 'react-router'
import { paths } from '@pages/paths.js'

const Trade = () => {
    const { id: tradeHash } = useParams()
    const [sellingToken, setSellingToken] = useState(null)
    const { data: trade } = useFetchTransactionQuery({ hash: tradeHash })
    const { data: portfolioData } = useFetchAccountPortfolioQuery()
    const account = useSelector((state) => state.account)
    const { token } = useGetTokens({
        portfolio: portfolioData?.portfolio,
        wallets: account?.Wallets,
        tokenSymbol: trade?.Token?.symbol,
    })
    const network = useMemo(
        () => networks.find((n) => n.value === trade?.network),
        [trade]
    )
    const openDialog = () => {
        setSellingToken(token)
    }
    return (
        <Box>
            {trade ? (
                <Box sx={{ px: 2 }}>
                    <Box
                        sx={{
                            backgroundColor: 'background.grey',
                            p: 2,
                            borderRadius: '16px',
                        }}>
                        <Grid2 alignItems={'center'} container spacing={2}>
                            <Grid2 size={'auto'}>
                                <NestedAvatars
                                    avatar={trade.Token.image}
                                    secondaryAvatar={network?.icon}
                                />
                            </Grid2>
                            {trade.type === 'BUY' && (
                                <Grid2 size={'grow'}>
                                    <Typography fontSize={17}>
                                        Recommendation from
                                    </Typography>
                                    <Typography fontSize={17} color={'primary'}>
                                        <Link
                                            sx={{ textDecoration: 'none' }}
                                            href={`${paths.userProfile}/${trade?.kolId}`}>
                                            {trade?.Kol?.username}
                                        </Link>
                                    </Typography>
                                </Grid2>
                            )}
                        </Grid2>
                    </Box>

                    <Typography
                        sx={{
                            mt: 2,
                            color:
                                trade.type === 'BUY'
                                    ? 'primary.main'
                                    : 'error.main',
                        }}
                        variant={'h2'}>
                        {trade.type === 'BUY' ? '+' : '-'}
                        {trade.amount} $
                        <span style={{ textTransform: 'uppercase' }}>
                            {trade.Token.symbol}
                        </span>
                    </Typography>
                    <Typography fontSize={17} color={'text.secondary'}>
                        {dayjs(trade.createdAt).format(
                            'DD.MM.YYYY [at] h:mm A'
                        )}
                    </Typography>
                    <Box
                        sx={{
                            mt: 3,
                            borderRadius: '16px',
                            px: 2,
                            py: 1.5,
                            backgroundColor: 'background.grey',
                        }}>
                        <Typography sx={{mb: '4px'}} fontSize={15} color={'text.secondary'}>
                            Status
                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                            <Avatar
                                sx={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: 'primary.main',
                                }}>
                                <Iconify width={13} icon={'mdi:tick'} />
                            </Avatar>
                            <Typography>Successful</Typography>
                        </Stack>
                    </Box>
                    <Button
                        sx={{ mt: 3, border: '1px dashed #707579' }}
                        fullWidth
                        variant={'outlined'}
                        component='a'
                        href={
                            trade?.network === 'SOLANA'
                                ? `https://solscan.io/tx/${trade?.hash}`
                                : `https://etherscan.io/tx/${trade?.hash}`
                        }
                        target='_blank'
                        rel='noopener noreferrer'>
                        Check explorer
                    </Button>
                </Box>
            ) : null}

            {trade?.type === 'BUY' && token && (
                <BottomButton onClick={openDialog} label={'Sell'} withToolbar />
            )}
            <SellTokens
                sellingToken={sellingToken}
                open={!!sellingToken}
                onClose={() => setSellingToken(null)}
            />
        </Box>
    )
}

export default Trade
