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
import { useTg } from '@shared/hooks/useTg.js'

const Trade = () => {
    const { isDark } = useTg()
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
                            backgroundColor: isDark
                                ? 'darkVersion.lightGrey'
                                : 'background.grey',
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
                            {trade.type === 'BUY' ? (
                                <Grid2 size={'grow'}>
                                    <Typography
                                        color={isDark ? 'white' : 'black'}
                                        fontSize={17}>
                                        Recommendation from
                                    </Typography>
                                    <Typography fontSize={17}>
                                        <Link
                                            sx={{
                                                textDecoration: 'none',
                                                color: isDark
                                                    ? 'darkVersion.green'
                                                    : 'primary',
                                            }}
                                            href={`${paths.userProfile}/${trade?.kolId}`}>
                                            {trade?.Kol?.username}
                                        </Link>
                                    </Typography>
                                </Grid2>
                            ) : (
                                <Typography
                                    textTransform={'uppercase'}
                                    color={'error.main'}
                                    variant={'h3'}>
                                    Sell
                                </Typography>
                            )}
                        </Grid2>
                    </Box>

                    <Typography
                        sx={{
                            mt: 2,
                            color:
                                trade.type !== 'BUY'
                                    ? 'error.main'
                                    : isDark
                                      ? 'darkVersion.green'
                                      : 'primary.main',
                        }}
                        variant={'h2'}>
                        <Box
                            component={'span'}
                            sx={{ fontSize: 56, wordWrap: 'break-word' }}>
                            {trade.type === 'BUY' ? '+' : '-'}
                            {trade.amount}{' '}
                        </Box>
                        <Box component={'span'} sx={{ fontSize: 46 }}>
                            $
                        </Box>
                        <Box
                            component={'span'}
                            sx={{ textTransform: 'uppercase', fontSize: 36 }}>
                            {trade.Token.symbol}
                        </Box>
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
                            backgroundColor: isDark
                                ? 'darkVersion.lightGrey'
                                : 'background.grey',
                        }}>
                        <Typography
                            sx={{ mb: '4px' }}
                            fontSize={15}
                            color={'text.secondary'}>
                            Status
                        </Typography>
                        <Stack direction={'row'} spacing={1}>
                            <Avatar
                                sx={{
                                    width: 24,
                                    height: 24,
                                    backgroundColor: isDark
                                        ? 'darkVersion.green'
                                        : 'primary.main',
                                    color: isDark ? 'black' : 'white',
                                }}>
                                <Iconify width={13} icon={'mdi:tick'} />
                            </Avatar>
                            <Typography color={isDark ? 'white' : 'black'}>
                                Successful
                            </Typography>
                        </Stack>
                    </Box>
                    <Button
                        sx={{
                            mt: 3,
                            border: '1px dashed #707579',
                            color: isDark ? 'darkVersion.green' : 'primary',
                        }}
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
