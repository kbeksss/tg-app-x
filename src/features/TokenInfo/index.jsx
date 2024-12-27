import React, { useMemo, useState } from 'react'
import CryptoChart from '@shared/ui/CryptoChart/index.jsx'
import { useCoinDetails, useMarketChart } from '@features/TokenInfo/service.js'
import tempData from './temp.json'
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { Iconify, useSwipeableDialog } from '@shared/ui/index.js'
import { NetworkSelect } from '@widgets'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'
import { useSelector } from 'react-redux'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { networks } from '@_mock/networks.js'
import { amountToFixed } from '@shared/utils/functions/index.js'
import TimeSettings from './ui/TimeSettings.jsx'
import PriceData from './ui/PriceData.jsx'

const TokenInfo = ({ coinId = 'bitcoin' }) => {
    const { isDarkMode } = useThemeContext()
    const { isDrawerOpen, toggleDrawer, setDrawerHeight } = useSwipeableDialog()
    const [network, setNetwork] = useState('SOLANA')
    const networkObj = useMemo(() => {
        return networks.find((n) => n.value === network)
    }, [network])
    const [currentInfo, setCurrentInfo] = useState(null)
    const [selectedInfo, setSelectedInfo] = useState(null)
    const [days, setDays] = useState(365)
    // const {
    //     data: chartData,
    //     isLoading: isChartDataLoading,
    //     isError: isChartDataError,
    // } = useMarketChart({
    //     id: coinId,
    //     days: days,
    // })
    // const { data: details, isLoading: isDetailsLoading } = useCoinDetails({
    //     id: coinId,
    // })
    return (
        <Box sx={{ position: 'relative' }}>
            <Box
                sx={{
                    position: 'absolute',
                    backgroundColor: 'background.paper',
                    left: 30,
                    zIndex: 99,
                    top: 10,
                }}>
                <NetworkSelect
                    network={network}
                    setNetwork={setNetwork}
                    isDrawerOpen={isDrawerOpen}
                    toggleDrawer={toggleDrawer}
                    setDrawerHeight={setDrawerHeight}>
                    <Box
                        onClick={toggleDrawer(true)}
                        sx={{
                            px: '14px',
                            py: '9px',
                            mb: 1,
                            backgroundColor: 'background.grey',
                            borderRadius: 24,
                            color: 'text.primary',
                        }}>
                        <Stack
                            spacing={1}
                            direction={'row'}
                            alignItems={'center'}>
                            {networkObj ? (
                                <>
                                    <Avatar
                                        sx={{ width: 20, height: 20 }}
                                        src={networkObj.icon}
                                    />
                                    <Typography>{networkObj.label}</Typography>
                                </>
                            ) : (
                                <Typography variant={'body2'}>
                                    Select a network
                                </Typography>
                            )}
                            <Iconify
                                width={11}
                                icon={'simple-line-icons:arrow-down'}
                            />
                        </Stack>
                    </Box>
                </NetworkSelect>
                <PriceData isLoading={false} data={tempData.market_data} />
            </Box>
            <CryptoChart
                isLoading={false}
                setSelectedInfo={setSelectedInfo}
                series={tempData?.prices}
            />
            <TimeSettings activeDay={days} setActiveDay={setDays} />
            <Divider sx={{ my: 2 }} />
            <Box sx={{ px: 2 }}>
                <Typography sx={{ mb: 1.5 }} variant={'subtitle1'}>
                    About {coinId}
                </Typography>
                <Typography>{tempData.market_data.description.en}</Typography>
            </Box>
        </Box>
    )
}

export default TokenInfo
