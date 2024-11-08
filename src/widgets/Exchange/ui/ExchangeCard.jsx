import React from 'react'
import {
    Avatar,
    Box,
    MenuItem,
    Select,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { Iconify } from '@shared/ui/index.js'
import { networks } from '@widgets'

const ExchangeCard = ({
    type,
    currency,
    onCurrencyChange,
    balance,
    amount,
    onChangeAmount,
    tokens,
}) => {
    return (
        <Box
            sx={{
                borderRadius: '16px',
                py: '10px',
                px: 2,
                backgroundColor: 'background.grey',
            }}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography color={'text.secondary'}>{type}</Typography>
                <Stack spacing={'6px'} alignItems={'center'} direction={'row'}>
                    <Iconify
                        color={'text.secondary'}
                        width={14}
                        icon={'tabler:wallet'}
                    />
                    <Typography color={'text.secondary'}>0</Typography>
                </Stack>
            </Stack>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Select
                    value={currency.currencyCode}
                    sx={{
                        fieldset: { border: 'none' },
                        '& .MuiSelect-select': {
                            padding: 0,
                        },
                        '& .MuiOutlinedInput-input': {
                            padding: 0,
                        },
                    }}
                    displayEmpty
                    onChange={(e) => onCurrencyChange(e.target.value)}>
                    <MenuItem value={''} disabled>
                        <Typography color={'text.secondary'} variant={'h5'}>
                            Select token
                        </Typography>
                    </MenuItem>
                    {tokens.map((token) => (
                        <MenuItem
                            value={token.currencyCode}
                            key={token.currencyCode}>
                            <Stack
                                spacing={1}
                                direction={'row'}
                                alignItems={'center'}>
                                <Avatar src={token.icon} />
                                <Typography variant={'h5'}>
                                    {token.currencyName}
                                </Typography>
                            </Stack>
                        </MenuItem>
                    ))}
                </Select>
                <TextField
                    type={'number'}
                    sx={{
                        fieldset: { border: 'none' },
                    }}
                    inputProps={{
                        sx: { textAlign: 'end', paddingRight: 0, fontSize: 20 },
                    }}
                    value={amount}
                    onChange={onChangeAmount}
                />
            </Stack>
        </Box>
    )
}

export default ExchangeCard
