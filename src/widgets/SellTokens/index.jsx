import React from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { floatAmountToString, notify } from '@shared/utils/functions/index.js'
import {
    useSellEthereumMutation,
    useSellSolanaMutation,
} from '@shared/api/services/index.js'

const SellTokens = ({ open, onClose, sellingToken }) => {
    const [sellEthereum] = useSellEthereumMutation()
    const [sellSolana] = useSellSolanaMutation()
    const sellSumbit = async () => {
        let res
        if (sellingToken.network === 'ETHEREUM') {
            res = await sellEthereum({ tokenId: sellingToken.id })
        } else {
            res = await sellSolana({ tokenId: sellingToken.id })
        }
        if (res?.error) {
            notify({ type: 'error', msg: res.error.data.message })
        } else {
            notify({ type: 'success', msg: 'Successfuly sold' })
        }
        onClose()
    }
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sell confirmation:</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you ready to complete this sale
                </DialogContentText>
                <DialogContentText sx={{ fontWeight: 500 }}>
                    1 {sellingToken?.symbol} = $
                    {floatAmountToString(sellingToken?.balance)}
                </DialogContentText>
                <Box sx={{ mt: 3, mb: 4 }}>
                    <TextField
                        disabled
                        value={floatAmountToString(sellingToken?.holdings)}
                        type={'number'}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        Total
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Typography color={'#000'}>
                                            {sellingToken?.symbol}
                                        </Typography>
                                    </InputAdornment>
                                ),
                            },
                            htmlInput: {
                                sx: { textAlign: 'right' },
                            },
                        }}
                    />
                </Box>
                <Stack spacing={1}>
                    <Button onClick={sellSumbit} variant={'contained'}>
                        Sell everything
                    </Button>
                    <Button
                        onClick={onClose}
                        variant={'contained'}
                        color={'secondary'}>
                        Cancel
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default SellTokens
