import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'

const SendConfirm = ({ open, onClose, sendingToken }) => {
    const navigate = useNavigate()
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{sendingToken?.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Unfortunately, this token cannot be sold, but you can
                    withdraw it by clicking "Send"
                </DialogContentText>
                <Stack sx={{ mt: 4 }} spacing={1}>
                    <Button
                        onClick={() => navigate(paths.send)}
                        variant={'contained'}>
                        Send
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

export default SendConfirm
