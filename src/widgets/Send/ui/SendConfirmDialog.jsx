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
import { InfoRows } from '@shared/ui'

const SendConfirmDialog = ({ open, onClose, total, address, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Do you confirm?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ pb: 4 }}>
                    You are transferring funds to another wallet, check the
                    transfer amount and address
                </DialogContentText>
                <InfoRows
                    rows={[
                        { label: 'Total', value: total },
                        { label: 'Address', value: address },
                    ]}
                />
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
