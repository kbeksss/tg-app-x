import React from 'react'
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogTitle,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { floatAmountToString } from '@shared/utils/functions/index.js'

const SellTokens = ({ open, onClose, sellingToken }) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Sell your tokens</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    1 {sellingToken?.symbol} = $
                    {floatAmountToString(sellingToken?.balance)}
                </DialogContentText>
                <Box sx={{ mt: 3, mb: 4 }}>
                    <TextField
                        disabled
                        value={floatAmountToString(sellingToken?.holdings)}
                        type={'number'}
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position='start'>
                                        Total
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position='end'>
                                        <Typography color={'#000'}>
                                            {sellingToken?.symbol}
                                        </Typography>
                                    </InputAdornment>
                                ),
                            },
                            htmlInput: {
                                sx: { textAlign: 'right' },
                            },
                        }}
                    />
                </Box>
                <Stack spacing={1}>
                    <Button variant={'contained'}>Sell everything</Button>
                    <Button variant={'contained'} color={'secondary'}>
                        Cancel
                    </Button>
                </Stack>
            </DialogContent>
        </Dialog>
    )
}

export default SellTokens
