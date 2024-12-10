import React, { useEffect, useMemo, useState } from 'react'
import { Box, Button, InputAdornment, Stack, TextField } from '@mui/material'
import { NetworkSelect } from '@widgets'
import { networks } from '@_mock/networks'
import { BottomButton, Iconify, useSwipeableDialog } from '@shared/ui'
import { floatAmountToString, notify } from '@shared/utils/functions'
import SendConfirmDialog from '@widgets/Send/ui/SendConfirmDialog.jsx'
import { paths } from '@pages/paths.js'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'
import dayjs from 'dayjs'
import { useTg } from '@shared/hooks/useTg.js'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { useSelector } from 'react-redux'
import {
    useFetchAccountPortfolioQuery,
    useSendEthereumMutation,
    useSendSolanaMutation,
} from '@shared/api/services/index.js'
import SendForm from './ui/SendForm.jsx'

const Send = () => {
    const { isDrawerOpen, toggleDrawer, setDrawerHeight } = useSwipeableDialog()
    const [sendEthereum] = useSendEthereumMutation()
    const [sendSolana] = useSendSolanaMutation()
    const { tg } = useTg()
    const { navigateWithParams } = useQueryParams()
    const [dialogOpen, setDialogOpen] = useState(false)
    const [network, setNetwork] = useState(networks[0].value)
    const [receiverAddress, setReceiverAddress] = useState('')
    const [sum, setSum] = useState('')
    const networkSymbol = useMemo(
        () => networks.find((net) => net.value === network).symbol,
        [network]
    )
    const sendConfirmOpen = () => {
        if (receiverAddress && sum) {
            if (receiverAddress.length < 25) {
                return notify({
                    type: 'error',
                    msg: 'Address must have at least 25 symbols',
                })
            }
            setDialogOpen(true)
        } else {
            notify({ type: 'error', msg: 'Please enter data' })
        }
    }
    const sendSuccess = async () => {
        let res
        if (networkSymbol === 'ETH') {
            res = await sendEthereum({ address: receiverAddress })
        } else {
            res = await sendSolana({ address: receiverAddress })
        }
        if (res?.error) {
            notify({ type: 'error', msg: res?.error?.data?.message })
            return
        }
        navigateWithParams(paths.sendSuccess, {
            date: dayjs().format('MMM D, YYYY [at] h:mmA'),
            total: `${sum} ${networkSymbol}`,
            address: `${receiverAddress.slice(0, 10)}***${receiverAddress.slice(-15)}`,
        })
    }
    const showQr = () => {
        try {
            tg?.showScanQrPopup({ text: 'Scan the address QR' })
        } catch (e) {
            notify({
                type: 'error',
                msg: "Your device doesn't support QR scan",
            })
        }
    }
    useEffect(() => {
        const handleQrTextReceived = (result) => {
            setReceiverAddress(result.data)
            notify({ type: 'success', msg: 'Successfully got address' })
            tg.closeScanQrPopup()
        }
        tg.onEvent('qrTextReceived', handleQrTextReceived)
        return () => {
            tg.offEvent('qrTextReceived', handleQrTextReceived)
        }
    }, [tg])

    const account = useSelector((state) => state.account)
    const { data } = useFetchAccountPortfolioQuery()

    const { networkPortfolio } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
        networkSymbol: networkSymbol,
    })
    useEffect(() => {
        if (networkPortfolio) {
            setSum(floatAmountToString(networkPortfolio.holdings))
        }
    }, [networkPortfolio])
    return (
        <Box sx={{ px: 2, pt: 3 }}>
            <Stack alignItems='center'>
                <Box sx={{ minWidth: 250, pb: 2 }}>
                    <NetworkSelect
                        toggleDrawer={toggleDrawer}
                        setDrawerHeight={setDrawerHeight}
                        isDrawerOpen={isDrawerOpen}
                        network={network}
                        setNetwork={setNetwork}>
                        <div>Network</div>
                    </NetworkSelect>
                </Box>
            </Stack>
            {/*<SendForm />*/}
            <Stack spacing={3}>
                <TextField
                    fullWidth
                    value={receiverAddress}
                    onChange={(e) => setReceiverAddress(e.target.value)}
                    label={'Address'}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment
                                    onClick={showQr}
                                    position='start'>
                                    <Button
                                        sx={{ fontSize: 14 }}
                                        endIcon={
                                            <Iconify icon={'uil:qrcode-scan'} />
                                        }>
                                        Scan
                                    </Button>
                                </InputAdornment>
                            ),
                        },
                    }}
                />
                <TextField
                    label={'Sum'}
                    value={sum}
                    disabled
                    type={'number'}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position='start'>
                                    {networkSymbol}
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </Stack>
            <SendConfirmDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                address={`${receiverAddress.slice(0, 10)}***${receiverAddress.slice(-15)}`}
                total={`${sum} ${networkSymbol}`}
                onConfirm={sendSuccess}
            />
            <BottomButton
                label={'Send'}
                onClick={sendConfirmOpen}
                withToolbar
            />
        </Box>
    )
}

export default Send
