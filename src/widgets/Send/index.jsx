import React, { useEffect, useMemo, useState } from 'react'
import { Box } from '@mui/material'
import { networks } from '@_mock/networks'
import { BottomButton } from '@shared/ui'
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
    const networkObj = useMemo(
        () => networks.find((net) => net.value === network),
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
    const scan = () => {
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
            <SendForm
                sumValue={sum}
                scan={scan}
                networkObj={networkObj}
                network={network}
                setNetwork={setNetwork}
                receiverAddress={receiverAddress}
                setReceiverAddress={setReceiverAddress}
            />
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
