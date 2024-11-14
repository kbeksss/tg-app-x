import React, { useMemo, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { NetworkSelect } from '@widgets'

import { QRCode } from '@shared/ui/index.js'
import BottomActions from './ui/BottomActions'
import { networks } from '@_mock/networks.js'
import { useSelector } from 'react-redux'
import { useFetchAccountPortfolioQuery } from '@shared/api/services'

const Receive = () => {
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

    return (
        <Box>
            <Stack alignItems={'center'}>
                <Box sx={{ minWidth: 250 }}>
                    <NetworkSelect
                        network={network}
                        setNetwork={setNetwork}
                        displayEmpty={false}
                    />
                </Box>
            </Stack>
            {account && (
                <Stack alignItems={'center'}>
                    <Box
                        sx={{
                            p: '10px',
                            maxWidth: 250,
                            borderRadius: '16px',
                            border: '1px solid rgba(0, 0, 0, 0.05)',
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
