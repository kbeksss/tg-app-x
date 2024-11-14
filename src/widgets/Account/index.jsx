import React from 'react'
import { Box, Stack } from '@mui/material'
import { ProfileImage } from '@widgets'
import SettingsItem from './ui/SettingsItem.jsx'
import { BottomButton } from '@shared/ui'
import { useNavigate } from 'react-router-dom'
import { networks } from '@_mock/networks.js'
import { paths } from '@pages/paths.js'
import { useSelector } from 'react-redux'

const Account = () => {
    const navigate = useNavigate()
    const account = useSelector((state) => state.account)
    console.log(account)
    return (
        <Box>
            <ProfileImage
                icon={'/assets/icons/utilities/user-icon.png'}
                label={account?.username}
            />
            <Box sx={{ px: 2, py: 3 }}>
                <Stack spacing={1}>
                    {account?.Wallets.map((wallet, index) => (
                        <SettingsItem
                            key={index}
                            onClick={() =>
                                navigate(
                                    `${paths.networkSettings}/${'network.symbol'}`
                                )
                            }
                            label={`Setting up ${'network.symbol'} trading`}
                            icon={'network.icon'}
                        />
                    ))}
                    {networks.map((network, index) => (
                        <SettingsItem
                            key={index}
                            onClick={() =>
                                navigate(
                                    `${paths.networkSettings}/${network.symbol}`
                                )
                            }
                            label={`Setting up ${network.symbol} trading`}
                            icon={network.icon}
                        />
                    ))}
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
