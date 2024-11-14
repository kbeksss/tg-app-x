import React, { useMemo, useState } from 'react'
import {
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { ProfileImage } from '@widgets'
import { BottomButton, Switch } from '@shared/ui'
import { notify } from '@shared/utils/functions/index.js'

const NetworkSettings = ({
    network,
    networkCheckedInitial,
    configValueInitial,
    toggleSumbit,
    configUpdateSubmit,
}) => {
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
        <Box>
            <ProfileImage
                label={`Setting up ${network.symbol} trading`}
                icon={network.image}
            />
            <Box sx={{ px: 2, py: 3 }}>
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
                            justifyContent={'space-between'}>
                            <Typography>Trade ERC20 tokens</Typography>
                            <Switch checked={checked} onChange={handleChange} />
                        </Stack>
                    </Box>
                    {checked && (
                        <>
                            <Box sx={{}}>
                                <Typography fontWeight={600}>
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
                                onChange={handleConfigValueChange}
                                slotProps={{
                                    input: {
                                        endAdornment: (
                                            <InputAdornment position='start'>
                                                <Typography>
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
