import React, { useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SettingsItem from './ui/SettingsItem.jsx'
import { BottomButton, Iconify, ProfileInfo, Switch } from '@shared/ui'
import { useNavigate } from 'react-router-dom'
import { paths } from '@pages/paths.js'
import { useSelector } from 'react-redux'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const Account = () => {
    const { isDarkMode, toggleTheme } = useThemeContext()
    const navigate = useNavigate()
    const account = useSelector((state) => state.account)
    const { data } = useFetchAccountPortfolioQuery()
    const { networkPortfolios } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
    })

    return (
        <Box sx={{ px: 2 }}>
            <ProfileInfo
                avatar={'/assets/icons/utilities/user-icon.png'}
                name={account?.name}
                username={account?.username}
                editable
            />
            <Box sx={{ pt: 3 }}>
                <Typography
                    color={'text.primary'}
                    sx={{ mb: 1 }}
                    fontWeight={500}>
                    Network details
                </Typography>
                <Stack spacing={1}>
                    {networkPortfolios?.map((network, index) => (
                        <SettingsItem
                            key={index}
                            onClick={() =>
                                navigate(
                                    `${paths.networkSettings}/${network.symbol}`
                                )
                            }
                            label={`Setting up ${network.symbol} trading`}
                            icon={network.image}
                        />
                    ))}
                </Stack>
            </Box>
            <Box sx={{ pt: 3 }}>
                <Typography
                    color={'text.primary'}
                    sx={{ mb: 1 }}
                    fontWeight={500}>
                    Decoration
                </Typography>
                <Stack spacing={1}>
                    <SettingsItem
                        label={'Dark theme'}
                        switchComponent={
                            <Switch
                                onChange={toggleTheme}
                                checked={isDarkMode}
                            />
                        }
                        icon={
                            <Stack
                                sx={{ height: 40 }}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <Iconify
                                    sx={{ color: 'text.secondary' }}
                                    icon={'bytesize:moon'}
                                />
                            </Stack>
                        }
                    />
                </Stack>
            </Box>
            <Box sx={{ pt: 3 }}>
                <Typography
                    color={'text.primary'}
                    sx={{ mb: 1 }}
                    fontWeight={500}>
                    Help and support
                </Typography>
                <Stack spacing={1}>
                    <SettingsItem
                        label={'Delete account'}
                        icon={
                            <Stack
                                sx={{ height: 40 }}
                                justifyContent={'center'}
                                alignItems={'center'}>
                                <Iconify
                                    sx={{ color: 'text.secondary' }}
                                    icon={'ph:trash-bold'}
                                />
                            </Stack>
                        }
                    />
                </Stack>
            </Box>
            <BottomButton
                label={'Delete account'}
                withToolbar
                color={'error'}
                onClick={() => console.log('deleted')}
            />
        </Box>
    )
}

export default Account
