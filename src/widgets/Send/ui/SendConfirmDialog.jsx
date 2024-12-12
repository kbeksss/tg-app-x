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
import { useTg } from '@shared/hooks/useTg.js'

const SendConfirmDialog = ({ open, onClose, total, address, onConfirm }) => {
    const { isDark } = useTg()
    return (
        <Dialog
            PaperProps={{
                sx: (theme) => ({
                    backgroundColor: isDark
                        ? theme.palette?.darkVersion?.lightBlack
                        : 'background.paper',
                    color: isDark ? 'white' : 'unset',
                }),
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
                    <Button
                        sx={{
                            backgroundColor: isDark
                                ? 'darkVersion.green'
                                : 'primary',
                            color: isDark ? 'black' : 'white',
                        }}
                        onClick={onConfirm}
                        variant={'contained'}>
                        Confirm
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: isDark
                                ? 'darkVersion.lightGrey'
                                : 'unset',
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

export default SendConfirmDialog
