import React, { useMemo, useState } from 'react'
import CryptoChart from '@shared/ui/CryptoChart/index.jsx'
import { useMarketChart } from '@features/TokenInfo/service.js'
import tempData from './temp.json'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import { Iconify, useSwipeableDialog } from '@shared/ui/index.js'
import { NetworkSelect } from '@widgets'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'
import { useSelector } from 'react-redux'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { networks } from '@_mock/networks.js'
import { amountToFixed } from '@shared/utils/functions/index.js'

const TokenInfo = () => {
    const { isDarkMode } = useThemeContext()
    const { isDrawerOpen, toggleDrawer, setDrawerHeight } = useSwipeableDialog()
    const [network, setNetwork] = useState('SOLANA')
    const networkObj = useMemo(() => {
        return networks.find((n) => n.value === network)
    }, [network])
    const [currentInfo, setCurrentInfo] = useState(null)

    const [days, setDays] = useState(365)
    const [coinId] = useState('ethereum')
    // const {
    //     data: chartData,
    //     isLoading: isChartDataLoading,
    //     isError: isChartDataError,
    // } = useMarketChart({
    //     id: coinId,
    //     days: days,
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
                <Stack direction={'row'} spacing={1.5}>
                    <Typography
                        sx={{ mb: 1 }}
                        color='text.primary'
                        variant={'h4'}>
                        $98,600.20
                    </Typography>
                    {currentInfo && (
                        <Box
                            sx={{
                                borderRadius: '10px',
                                p: 1,
                                backgroundColor: 'primary.main',
                                color: isDarkMode ? '#000' : '#fff',
                            }}>
                            $ {amountToFixed(currentInfo[1], 4)}
                        </Box>
                    )}
                </Stack>
                <Typography color={'error'}>-$600.7 (-0.61%)</Typography>
            </Box>
            <CryptoChart
                setCurrentInfo={setCurrentInfo}
                series={tempData?.prices}
            />
        </Box>
    )
}

export default TokenInfo
