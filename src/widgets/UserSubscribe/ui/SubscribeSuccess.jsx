import React from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { Iconify } from '@shared/ui'

const SubscribeSuccess = ({ open, onClose, title, text, actionLabel, action }) => {
    return (
        <Dialog
            PaperProps={{
                elevation: 0,
                sx: (theme) => ({
                    position: 'relative',
                    overflow: 'visible',
                }),
            }}
            open={open}
            onClose={onClose}>
            <Box
                sx={(theme) => ({
                    borderRadius: '50%',
                    boxSizing: 'border-box',
                    width: 80,
                    height: 80,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `2px solid ${theme.palette.primary.main}`,
                    backgroundColor: 'background.paper',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translate(-50%)',
                    top: '-40px',
                })}>
                <Iconify width={50} sx={{ color: 'primary.main' }} icon={'mdi:check'} />
            </Box>
            <DialogTitle sx={{ textAlign: 'center', fontWeight: '500', pt: '50px' }}>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ pb: 2, textAlign: 'center' }}>
                    {text}
                </DialogContentText>
                {actionLabel && (
                    <Button fullWidth variant={'contained'} onClick={action}>
                        {actionLabel}
                    </Button>
                )}
            </DialogContent>
        </Dialog>
    )
}

export default SubscribeSuccess
