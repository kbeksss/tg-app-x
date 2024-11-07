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

const SendConfirmDialog = ({ open, onClose, total, address, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Do you confirm?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ pb: 4 }}>
                    You are transferring funds to another wallet, check the
                    transfer amount and address
                </DialogContentText>
                <Stack spacing={2}>
                    <Stack spacing={0.5}>
                        <Typography color={'text.dark'}>Total</Typography>
                        <Typography>{total}</Typography>
                    </Stack>
                    <Stack spacing={0.5}>
                        <Typography color={'text.dark'}>Address</Typography>
                        <Typography>{address}</Typography>
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

export default SendConfirmDialog
