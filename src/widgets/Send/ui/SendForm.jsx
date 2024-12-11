import React, { useState } from 'react'
import {
    Box,
    Button,
    Input,
    InputAdornment,
    styled,
    TextField,
    IconButton,
    Typography,
} from '@mui/material'
import { Iconify, InfoPlate, useSwipeableDialog } from '@shared/ui'
import { NetworkSelect } from '@widgets'
import { networks } from '@_mock/networks.js'

const SendForm = ({
    sumValue,
    networkObj,
    network,
    setNetwork,
    scan,
    receiverAddress,
    setReceiverAddress,
}) => {
    const { isDrawerOpen, toggleDrawer, setDrawerHeight } = useSwipeableDialog()
    return (
        <Box
            sx={{
                borderRadius: '20px',
                backgroundColor: 'background.grey',
                py: 2,
                px: '6px',
            }}>
            <FieldRow
                label={'Your address'}
                value={receiverAddress}
                onChange={(e) => setReceiverAddress(e.target.value)}
                adornment={{
                    input: {
                        endAdornment: (
                            <InputAdornment position='end'>
                                <IconButton
                                    onClick={scan}
                                    sx={{
                                        backgroundColor: 'primary.main',
                                        borderRadius: '13px',
                                    }}>
                                    <Iconify
                                        sx={{ color: 'text.light' }}
                                        icon={'tabler:line-scan'}
                                    />
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
            <NetworkSelect
                toggleDrawer={toggleDrawer}
                setDrawerHeight={setDrawerHeight}
                isDrawerOpen={isDrawerOpen}
                network={network}
                setNetwork={setNetwork}>
                <FieldRow
                    onClick={toggleDrawer(true)}
                    value={`${networkObj?.label.toUpperCase()} (${networkObj.symbol})`}
                    label={'Network'}
                    adornment={{
                        input: {
                            endAdornment: (
                                <InputAdornment position='end'>
                                    <Box
                                        sx={{
                                            width: 36,
                                            height: 36,
                                            borderRadius: '13px',
                                            backgroundImage: `url(${networkObj.icon})`, //todo: I have to change for ETH
                                            backgroundSize: `cover`,
                                        }}
                                    />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </NetworkSelect>

            <FieldRow value={sumValue} label={'Sum'} />
            <InfoPlate />
        </Box>
    )
}

const SInputLabel = styled(Typography)`
    padding-left: 6px;
    padding-right: 6px;
    padding-bottom: 8px;
`

const FieldRow = ({ label, value, adornment, onClick, onChange }) => {
    return (
        <Box sx={{ mb: 2 }} onClick={onClick}>
            <SInputLabel color={'text.secondary'} variant={'subtitle2'}>
                {label}
            </SInputLabel>
            <TextField
                onChange={onChange}
                value={value}
                size={'small'}
                sx={{
                    '& .MuiInputBase-root': {
                        backgroundColor: 'background.white',
                        borderRadius: '15px',
                        fontSize: 12,
                        pr: '3px',
                    },
                }}
                fullWidth
                slotProps={adornment}
            />
        </Box>
    )
}

export default SendForm
