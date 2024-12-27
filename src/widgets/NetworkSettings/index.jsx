import React, { useMemo, useState } from 'react'
import {
    Avatar,
    Box,
    Button,
    Grid2,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { ProfileImage } from '@widgets'
import { BottomButton, Switch } from '@shared/ui'
import { notify } from '@shared/utils/functions/index.js'
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const NetworkSettings = ({
    network,
    networkCheckedInitial,
    configValueInitial,
    toggleSumbit,
    configUpdateSubmit,
}) => {
    const { isDarkMode } = useThemeContext()
    const [checked, setChecked] = useState(networkCheckedInitial)
    const [configValue, setConfigValue] = useState(configValueInitial)

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
    const handleConfigValueChange = (event) => {
        setConfigValue(event.target.value)
    }
    const canBeSaved = useMemo(() => {
        return (
            networkCheckedInitial !== checked ||
            configValueInitial !== configValue
        )
    }, [networkCheckedInitial, checked, configValueInitial, configValue])
    const sumbitChanges = async () => {
        if (!canBeSaved) {
            return
        }
        if (networkCheckedInitial !== checked) {
            await toggleSumbit()
        }
        if (configValueInitial !== configValue) {
            await configUpdateSubmit(configValue)
        }
        notify({ type: 'success', msg: 'Changes successfully updated' })
    }
    return (
        <Box sx={{ px: 2 }}>
            <Box
                sx={{
                    borderRadius: '16px',
                    p: 2,
                    backgroundColor: 'background.grey',
                }}>
                <Grid2 alignItems={'center'} container spacing={1.5}>
                    <Grid2 size={'auto'}>
                        <Avatar src={network.image} />
                    </Grid2>
                    <Grid2 size={'grow'}>
                        <Typography fontWeight={500}>
                            Setting up {network.symbol} for trading
                        </Typography>
                    </Grid2>
                </Grid2>
            </Box>
            <Box sx={{ py: 3 }}>
                <Stack spacing={2}>
                    <Box
                        sx={{
                            py: '14px',
                            px: 2,
                            borderRadius: '16px',
                            backgroundColor: 'background.grey',
                        }}>
                        <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'space-between'}>
                            <Typography >
                                Trade ERC20 tokens
                            </Typography>
                            <Switch checked={checked} onChange={handleChange} />
                        </Stack>
                    </Box>
                    {checked && (
                        <>
                            <Box sx={{}}>
                                <Typography
                                    fontWeight={600}>
                                    Trading bot settings:
                                </Typography>
                                <Typography
                                    color={'text.secondary'}
                                    variant={'body2'}>
                                    Each purchase will be in the account of
                                </Typography>
                            </Box>
                            <TextField
                                type={'number'}
                                value={configValue}
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
                                onChange={handleConfigValueChange}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <Typography
                                                    color={'text.secondary'}>
                                                    {network.symbol}
                                                </Typography>
                                            </InputAdornment>
                                        ),
                                    },
                                }}
                            />
                        </>
                    )}
                </Stack>
            </Box>
            {canBeSaved && (
                <BottomButton
                    label={'Save'}
                    onClick={sumbitChanges}
                    withToolbar
                />
            )}
        </Box>
    )
}

export default NetworkSettings
