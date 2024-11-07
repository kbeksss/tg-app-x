import React from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { useNavigate } from 'react-router'
import { paths } from '@pages/paths.js'

const SaveWarn = ({ open, handleClose }) => {
    const navigate = useNavigate()
    const handleContinue = () => {
        window.tempCheck = true
        navigate(paths.home)
    }
    return (
        <Dialog
            onClose={handleClose}
            open={open}
            sx={{
                '& .MuiDialog-paper': {
                    borderRadius: '16px',
                },
            }}>
            <DialogTitle
                sx={{
                    textAlign: 'center',
                    pt: 4,
                    fontSize: 16,
                    fontWeight: 600,
                }}>
                Did you save the phrase?
            </DialogTitle>
            <DialogContent>
                <DialogContentText
                    sx={{ textAlign: 'center', color: '#000', fontSize: 14 }}>
                    The phrase must be saved in order to restore access to the
                    wallet later if necessary.
                </DialogContentText>
                <Box sx={{ mt: 4 }}>
                    <Button
                        sx={{ mb: 1 }}
                        onClick={handleContinue}
                        fullWidth
                        variant={'contained'}>
                        Continue
                    </Button>
                    <Button
                        onClick={handleClose}
                        fullWidth
                        variant={'outlined'}>
                        No
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default SaveWarn
