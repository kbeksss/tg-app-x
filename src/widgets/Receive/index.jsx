import React, { useMemo, useState } from 'react'
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material'
import { NetworkSelect } from '@widgets'

import { Iconify, QRCode, useSwipeableDialog } from '@shared/ui/index.js'
import BottomActions from './ui/BottomActions'
import { networks } from '@_mock/networks.js'
import { useSelector } from 'react-redux'
import { useFetchAccountPortfolioQuery } from '@shared/api/services'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const Receive = () => {
    const { isDrawerOpen, toggleDrawer, setDrawerHeight } = useSwipeableDialog()
    const { data } = useFetchAccountPortfolioQuery()
    const account = useSelector((state) => state.account)
    const [network, setNetwork] = useState(networks[0].value)
    const address = useMemo(() => {
        return account
            ? account.Wallets.find((wallet) => wallet.network === network)
                  .address
            : ''
    }, [network, account])
    const networkImage = useMemo(() => {
        if (!data) {
            return ''
        }
        const net = data.portfolio.find((p) => p.name.toUpperCase() === network)
        return net.image
    }, [data, network])

    const networkObj = useMemo(() => {
        return networks.find((n) => n.value === network)
    }, [network])
    const { isDarkMode } = useThemeContext()

    return (
        <Box>
            <Stack alignItems={'center'}>
                <Box sx={{ py: 2 }}>
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
                                backgroundColor: 'background.grey',
                                borderRadius: 24,
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
                                        <Typography >
                                            {networkObj.symbol}
                                        </Typography>
                                        <Chip
                                            sx={{
                                                backgroundColor: isDarkMode
                                                    ? 'background.dark'
                                                    : 'background.white',
                                            }}
                                            size={'small'}
                                            label={networkObj.label}
                                        />
                                    </>
                                ) : (
                                    <>
                                        <Typography variant={'body2'}>
                                            Select a network
                                        </Typography>
                                    </>
                                )}
                                <Iconify
                                    width={11}
                                    color={'text.primary'}
                                    icon={'simple-line-icons:arrow-down'}
                                />
                            </Stack>
                        </Box>
                    </NetworkSelect>
                </Box>
            </Stack>
            {account && (
                <Stack alignItems={'center'}>
                    <Box
                        sx={{
                            p: '10px',
                            maxWidth: 250,
                            borderRadius: '16px',
                            border: `1px solid ${isDarkMode ? '#707579' : 'rgba(0, 0, 0, 0.05)'}`,
                        }}>
                        <QRCode
                            value={address}
                            qrImage={
                                <img
                                    src={networkImage}
                                    width={'100%'}
                                    alt='logo for qr'
                                />
                            }
                        />
                        <Typography
                            sx={{ wordWrap: 'break-word', mt: 2 }}
                            variant={'body2'}
                            align={'center'}>
                            {address}
                        </Typography>
                    </Box>
                </Stack>
            )}

            <BottomActions copyValue={address} />
        </Box>
    )
}

export default Receive
