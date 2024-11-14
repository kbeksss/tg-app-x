import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from '@mui/material'

const ConfirmSubscribe = ({ open, onClose, onConfirm }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Are you sure you want to subscribe?</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    If you don't subscribe you are gay
                </DialogContentText>
                <Stack sx={{ mt: 4 }} spacing={1}>
                    <Button variant={'contained'} onClick={onConfirm}>
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

export default ConfirmSubscribe