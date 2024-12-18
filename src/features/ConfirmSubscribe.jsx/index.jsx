import React from 'react'
import {
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
} from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const ConfirmSubscribe = ({ open, onClose, onConfirm, username }) => {
    const { isDark } = useTg()
    return (
        <Dialog
            PaperProps={{
                elevation: 0,
                sx: {
                    backgroundColor: 'background.paper',
                },
            }}
            open={open}
            onClose={onClose}>
            <DialogTitle color={'text.primary'}>
                Are you sure you want to subscribe {username}?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    After subscribing, automatic purchases will be made based on
                    this user's recommendations.
                </DialogContentText>
                <Stack sx={{ mt: 4 }} spacing={1}>
                    <Button
                        color={'primary'}
                        variant={'contained'}
                        onClick={onConfirm}>
                        Confirm
                    </Button>
                    <Button
                        sx={{
                            mb: 1,
                        }}
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

export default ConfirmSubscribe
