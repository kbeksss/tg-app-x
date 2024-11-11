import React from 'react'
import {
    Box,
    Button,
    InputAdornment,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { ProfileImage } from '@widgets'
import { Iconify, Switch } from '@shared/ui'

const NetworkSettings = ({ network }) => {
    const [checked, setChecked] = React.useState(true)

    const handleChange = (event) => {
        setChecked(event.target.checked)
    }
    return (
        <Box>
            <ProfileImage
                label={`Setting up ${network.symbol} trading`}
                icon={network.icon}
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
        </Box>
    )
}

export default NetworkSettings
