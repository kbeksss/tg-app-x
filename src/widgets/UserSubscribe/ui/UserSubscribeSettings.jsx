import React, { useMemo } from 'react'
import {
    Avatar,
    Button,
    Dialog,
    DialogContent,
    Box,
    DialogTitle,
    Grid2,
    Stack,
    Typography,
    InputAdornment,
    TextField,
} from '@mui/material'
import { ItemBox, Switch } from '@shared/ui'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'
import { useSelector } from 'react-redux'
import { convertToLargestUnit } from '@shared/utils/functions'

const UserSubscribeSettings = ({ open, onClose, onSave, avatar, username }) => {
    const account = useSelector((state) => state.account)
    const SOLDefaultValue = useMemo(() => {
        if (!account) {
            return ''
        }
        return convertToLargestUnit(account.solConfig, 'SOL')
    }, [account])
    const ETHDefaultValue = useMemo(() => {
        if (!account) {
            return ''
        }
        return convertToLargestUnit(account.ethConfig, 'ETH')
    }, [account])
    const { isDarkMode } = useThemeContext()
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
                <Stack spacing={3}>
                    <ItemBox>
                        <Grid2 spacing={1.5} container alignItems={'center'}>
                            <Grid2 size={'auto'}>
                                <Avatar
                                    src={avatar}
                                    sx={{ width: 50, height: 50 }}
                                />
                            </Grid2>
                            <Grid2 size={8}>
                                <Typography
                                    color={'text.primary'}
                                    fontWeight={500}>
                                    Custom settings
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </ItemBox>
                    <ItemBox>
                        <Grid2 spacing={1.5} container alignItems={'center'}>
                            <Grid2 size={'grow'}>
                                <Typography
                                    color={'text.primary'}
                                    fontWeight={500}>
                                    trade by {username}
                                </Typography>
                            </Grid2>
                            <Grid2 size={2}>
                                <Switch defaultChecked />
                            </Grid2>
                        </Grid2>
                    </ItemBox>
                    <Box>
                        <Stack spacing={2}>
                            <Box>
                                <Typography
                                    variant={'h6'}
                                    color={'text.primary'}>
                                    Trading settings:
                                </Typography>
                                <Typography color={'text.secondary'}>
                                    Each purchase will be in accordance with:
                                </Typography>
                            </Box>
                            <TextField
                                defaultValue={ETHDefaultValue}
                                label={'ETH setting'}
                                fullWidth
                                type={'number'}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: 'text.primary',
                                        '& fieldset': {
                                            borderColor: isDarkMode
                                                ? 'rgba(255,255,255,0.5) !important'
                                                : 'unset',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: isDarkMode
                                                ? 'rgba(255,255,255,0.5) !important'
                                                : 'unset',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <Typography
                                                    color={'text.secondary'}>
                                                    ETH
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                            <TextField
                                defaultValue={SOLDefaultValue}
                                label={'SOL setting'}
                                fullWidth
                                type={'number'}
                                sx={{
                                    '& .MuiOutlinedInput-root': {
                                        color: 'text.primary',
                                        '& fieldset': {
                                            borderColor: isDarkMode
                                                ? 'rgba(255,255,255,0.5) !important'
                                                : 'unset',
                                        },
                                        '&:hover fieldset': {
                                            borderColor: isDarkMode
                                                ? 'rgba(255,255,255,0.5) !important'
                                                : 'unset',
                                        },
                                    },
                                }}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <Typography
                                                    color={'text.secondary'}>
                                                    SOL
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </Stack>
                    </Box>
                </Stack>
                <Box sx={{ pt: 5 }}>
                    <Button
                        fullWidth
                        color={'primary'}
                        variant={'contained'}
                        onClick={onSave}>
                        Save
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default UserSubscribeSettings
