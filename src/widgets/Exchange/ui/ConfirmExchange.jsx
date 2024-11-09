import React from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    Typography,
} from '@mui/material'

const ConfirmExchange = ({
    open,
    onClose,
    sellAmount,
    buyAmount,
    onConfirm,
}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Do you confirm?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ mb: 4 }}>
                    You are going to exchange the currency, check the amount and
                    confirm the action
                </DialogContentText>
                <Stack spacing={2}>
                    <Stack spacing={0.5}>
                        <Typography color={'text.dark'}>Sell</Typography>
                        <Typography
                            color={'error.main'}
                            textTransform={'uppercase'}>
                            {sellAmount}
                        </Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                        <Typography color={'text.dark'}>Buy</Typography>
                        <Typography
                            color={'success.main'}
                            textTransform={'uppercase'}>
                            {buyAmount}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ mt: 2 }} spacing={1}>
                    <Button onClick={onConfirm} variant={'contained'}>
                        Confirm
                    </Button>
                    <Button onClick={onClose} variant={'outlined'}>
                        No
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmExchange
