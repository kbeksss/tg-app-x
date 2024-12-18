import React, { useState } from 'react'
import { Box, Divider, IconButton, Stack, Typography } from '@mui/material'
import { Iconify } from '@shared/ui'
import Operate from '@widgets/Home/ui/Operate.jsx'
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const Balance = ({ balance }) => {
    const { isDarkMode } = useThemeContext()
    const [balanceShown, setBalanceShown] = useState(false)
    return (
        <Box sx={{ px: 2, py: 3 }}>
            <Box
                sx={{
                    borderRadius: '20px',
                    backgroundColor: isDarkMode
                        ? 'primary.main'
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
                    $ {balanceShown ? balance : '******'}
                </Typography>
                <Divider
                    sx={{
                        my: 2,
                        borderColor: '#000',
                        opacity: 0.1,
                        borderWidth: '1px',
                    }}
                />
                <Box>
                    <Operate />
                </Box>
            </Box>
        </Box>
    )
}

export default Balance
