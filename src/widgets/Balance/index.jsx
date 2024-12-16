import React, { useState } from 'react'
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import Operate from '@widgets/Home/ui/Operate.jsx'
import { useTg } from '@shared/hooks/useTg.js'

const Balance = ({ balance }) => {
    const { isDark } = useTg()
    const [balanceShown, setBalanceShown] = useState(false)
    return (
        <Box sx={{ px: 2, py: 3 }}>
            <Box
                sx={{
                    borderRadius: '20px',
                    backgroundColor: isDark
                        ? 'darkVersion.green'
                        : 'background.grey',
                    p: 2,
                }}>
                <Stack spacing={1} alignItems={'center'} direction={'row'}>
                    <Typography variant={'h6'} textTransform={'uppercase'}>
                        Balance
                    </Typography>
                    <Iconify
                        onClick={() => setBalanceShown((prev) => !prev)}
                        icon={
                            balanceShown
                                ? 'mdi:hide-outline'
                                : 'mdi:show-outline'
                        }
                    />
                </Stack>
                <Typography variant={'h2'}>
                    <span style={{ color: isDark ? '#000' : '#707579' }}>
                        ${' '}
                    </span>
                    <span style={{ verticalAlign: 'middle' }}>
                        {balanceShown ? balance : '******'}
                    </span>
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Box>
                    <Operate />
                </Box>
            </Box>
        </Box>
    )
}

export default Balance
