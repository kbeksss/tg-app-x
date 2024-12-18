import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from '@mui/material'
import { InfoRows } from '@shared/ui'

const SendConfirmDialog = ({ open, onClose, total, address, onConfirm }) => {
    return (
        <Dialog
            PaperProps={{
                elevation: 0,
                sx: {
                    color: 'text.primary',
                },
            }}
            open={open}
            onClose={onClose}>
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
                    <Button
                        color={'secondary'}
                        onClick={onClose}
                        variant={'contained'}>
                        No
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default SendConfirmDialog
