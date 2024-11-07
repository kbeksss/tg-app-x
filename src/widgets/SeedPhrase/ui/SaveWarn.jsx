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
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Did you save the phrase?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{ color: '#000' }}>
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
