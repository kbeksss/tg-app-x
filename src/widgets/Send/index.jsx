import React, { useMemo, useState } from 'react'
import { Box, InputAdornment, Stack, TextField } from '@mui/material'
import { networks, NetworkSelect } from '@widgets'
import { BottomButton } from '@shared/ui'
import { notify } from '@shared/utils/functions/index.js'
import SendConfirmDialog from '@widgets/Send/ui/SendConfirmDialog.jsx'

const Send = () => {
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
            setDialogOpen(true)
        } else {
            notify({ type: 'error', msg: 'Please enter data' })
        }
    }
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
