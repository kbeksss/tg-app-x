import React from 'react'
import { Box, Stack } from '@mui/material'
import { ProfileImage } from '@widgets'
import SettingsItem from './ui/SettingsItem.jsx'
import { BottomButton } from '@shared/ui'
import { useNavigate } from 'react-router-dom'
import { networks } from '@_mock/networks.js'
import { paths } from '@pages/paths.js'
import { useSelector } from 'react-redux'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'

const Account = () => {
    const navigate = useNavigate()
    const account = useSelector((state) => state.account)
    const { data } = useFetchAccountPortfolioQuery()
    const { networkPortfolios } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
    })
    return (
        <Box>
            <ProfileImage
                icon={'/assets/icons/utilities/user-icon.png'}
                label={account?.username}
            />
            <Box sx={{ px: 2, py: 3 }}>
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
