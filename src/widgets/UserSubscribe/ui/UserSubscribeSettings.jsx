import React from 'react'
import {
    Avatar,
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid2,
    Stack,
    Typography,
} from '@mui/material'
import { Iconify } from '@shared/ui/index.js'

const UserSubscribeSettings = ({ open, onClose, onSave, avatar }) => {
    return (
        <Dialog
            PaperProps={{
                elevation: 0,
            }}
            fullWidth
            open={open}
            onClose={onClose}>
            <DialogTitle color={'text.primary'}>Subscribe settings</DialogTitle>
            <DialogContent>
                <Box
                    sx={{
                        borderRadius: '16px',
                        p: 2,
                        backgroundColor: 'background.grey',
                    }}>
                    <Grid2 spacing={1.5} container alignItems={'center'}>
                        <Grid2 size={'auto'}>
                            <Avatar
                                src={avatar}
                                sx={{ width: 50, height: 50 }}
                            />
                        </Grid2>
                        <Grid2 size={8}>
                            <Typography color={'text.primary'} fontWeight={500}>
                                Custom settings
                            </Typography>
                        </Grid2>
                    </Grid2>
                </Box>
                <DialogContentText>User settings</DialogContentText>
                <Button
                    color={'primary'}
                    variant={'contained'}
                    onClick={onSave}>
                    Save
                </Button>
            </DialogContent>
        </Dialog>
    )
}

export default UserSubscribeSettings
