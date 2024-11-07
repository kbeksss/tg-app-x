import React from 'react'
import {
    Avatar,
    FormControl,
    MenuItem,
    Select,
    Stack,
    Typography,
} from '@mui/material'

const NetworkSelect = ({ network, setNetwork, displayEmpty = true }) => {
    return (
        <FormControl
            fullWidth
            sx={{
                backgroundColor: '#F4F4F6',
                borderRadius: '16px',
                my: 2,
                height: 54,
            }}>
            <Select
                fullWidth
                sx={{
                    borderRadius: '16px',
                    height: '100%',
                    color: '#707579',
                    fieldset: { border: 'none' },
                }}
                id='network-select'
                value={network}
                displayEmpty={displayEmpty}
                onChange={(e) => setNetwork(e.target.value)}>
                {displayEmpty && <MenuItem value={''}>Select network</MenuItem>}
                {networks.map((network) => (
                    <MenuItem value={network.value} key={network.value}>
                        <Stack
                            spacing={1}
                            direction={'row'}
                            alignItems={'center'}>
                            <Avatar src={network.icon} />
                            <Typography>{network.label}</Typography>
                        </Stack>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}

export const networks = [
    {
        label: 'SOL Solana',
        symbol: 'SOL',
        value: 'solana',
        icon: '/assets/icons/network/solana.png',
    },
    {
        label: 'ETH Etherium',
        symbol: 'ETH',
        value: 'etherium',
        icon: '/assets/icons/network/eth-icon.png',
    },
]

export default NetworkSelect
