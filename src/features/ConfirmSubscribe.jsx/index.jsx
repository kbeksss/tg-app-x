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
                sx: (theme) => ({
                    backgroundColor: isDark
                        ? theme.palette?.darkVersion?.lightBlack
                        : 'background.paper',
                }),
            }}
            open={open}
            onClose={onClose}>
            <DialogTitle color={isDark ? 'white' : 'dark'}>
                Are you sure you want to subscribe {username}?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    After subscribing, automatic purchases will be made based on
                    this user's recommendations.
                </DialogContentText>
                <Stack sx={{ mt: 4 }} spacing={1}>
                    <Button
                        sx={{
                            backgroundColor: isDark
                                ? 'darkVersion.green'
                                : 'primary',
                            color: isDark ? 'black' : 'white',
                        }}
                        variant={'contained'}
                        onClick={onConfirm}>
                        Confirm
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: isDark
                                ? 'darkVersion.lightGrey'
                                : 'unset',
                            mb: 1,
                            color: isDark ? 'white' : 'primary',
                        }}
                        onClick={onClose}
                        variant={isDark ? 'contained' : 'outlined'}>
                        No
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default ConfirmSubscribe
