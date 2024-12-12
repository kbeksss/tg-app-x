import React from 'react'
import { Avatar, Box, Grid2, Stack, Typography } from '@mui/material'
import { useTg } from '@shared/hooks/useTg.js'

const NetworkItems = ({
    networks,
    selectedNetwork,
    setNetwork,
    selectedCb,
}) => {
    const handleClick = (value) => {
        setNetwork(value)
        selectedCb()
    }
    return (
        <Box sx={{ py: 3 }}>
            <Stack>
                {networks.map((item) => (
                    <NetworkItem
                        key={item.value}
                        onClick={() => handleClick(item.value)}
                        selected={item.value === selectedNetwork}
                        symbol={item.symbol}
                        label={item?.label}
                        icon={item.icon}
                    />
                ))}
            </Stack>
        </Box>
    )
}

const NetworkItem = ({ symbol, label, icon, selected, onClick }) => {
    const { isDark } = useTg()
    return (
        <Box
            onClick={onClick}
            sx={{
                mx: -2,
                px: 2,
                py: 1,
                backgroundColor: !selected
                    ? 'transparent'
                    : isDark
                      ? 'black'
                      : 'background.grey',
                borderRadius: 2,
            }}>
            <Grid2 container spacing={1} alignItems={'center'}>
                <Grid2>
                    <Avatar src={icon} />
                </Grid2>
                <Grid2>
                    <Box>
                        <Typography
                            color={isDark ? 'darkVersion.white' : 'black'}>
                            {symbol}
                        </Typography>
                        <Typography
                            color={'text.secondary'}
                            sx={{ textTransform: 'capitalize' }}>
                            {label}
                        </Typography>
                    </Box>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default NetworkItems
