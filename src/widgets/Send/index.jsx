import React, { useEffect, useMemo, useState } from 'react'
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
} from '@mui/material'
import { networks, NetworkSelect } from '@widgets'
import { BottomButton, Iconify } from '@shared/ui'
import { copyToClipboard, notify } from '@shared/utils/functions'
import SendConfirmDialog from '@widgets/Send/ui/SendConfirmDialog.jsx'
import { useNavigate } from 'react-router'
import { paths } from '@pages/paths.js'
import { useQueryParams } from '@shared/hooks/useQueryParams.js'
import dayjs from 'dayjs'
import { useTg } from '@shared/hooks/useTg.js'

const Send = () => {
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
    const sendSuccess = () => {
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
    return (
        <Box sx={{ px: 2, pt: 3 }}>
            <Stack alignItems='center'>
                <Box sx={{ minWidth: 250, pb: 2 }}>
                    <NetworkSelect
                        network={network}
                        setNetwork={setNetwork}
                        displayEmpty={false}
                    />
                </Box>
            </Stack>
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
                    onChange={(e) => setSum(e.target.value)}
                />
            </Stack>
            <SendConfirmDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                address={receiverAddress}
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
