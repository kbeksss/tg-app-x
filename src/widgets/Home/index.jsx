import React, { useMemo, useState } from 'react'
import { Avatar, Box, Stack, Typography } from '@mui/material'
import {
    Balance,
    NetworkSelect,
    ProfileImage,
    SellTokens,
    TokenList,
} from '@widgets'
import { useSelector } from 'react-redux'
import { useFetchAccountPortfolioQuery } from '@shared/api/services/index.js'
import { useGetTokens } from '@shared/hooks/useGetTokens.js'
import SendConfirm from './ui/SendConfirm.jsx'
import { Iconify, useSwipeableDialog } from '@shared/ui/index.js'
import { networks } from '@_mock/networks.js'
import { useTg } from '@shared/hooks/useTg.js'
import { useThemeContext } from '@app/providers/with-mui-theme.jsx'

const Home = () => {
    const { isDarkMode } = useThemeContext()
    const { isDrawerOpen, toggleDrawer, setDrawerHeight } = useSwipeableDialog()
    const [sellingToken, setSellingToken] = useState(null)
    const [sendingToken, setSendingToken] = useState(null)
    const { data, isLoading: tokensLoading } = useFetchAccountPortfolioQuery(
        undefined,
        {
            refetchOnMountOrArgChange: true,
        }
    )
    const [network, setNetwork] = useState('')
    const account = useSelector((state) => state.account)
    const { balances, totalBalance } = useGetTokens({
        wallets: account?.Wallets,
        portfolio: data?.portfolio,
        network,
    })
    const openDialog = (token) => {
        if (token.symbol === 'ETH' || token.symbol === 'SOL') {
            setSendingToken(token)
        } else {
            setSellingToken(token)
        }
    }
    const networkObj = useMemo(() => {
        return networks.find((n) => n.value === network)
    }, [network])
    return (
        <Box sx={{ py: 1.5 }}>
            <Box sx={{ px: 2 }}>
                <Stack
                    direction={'row'}
                    alignItems={'center'}
                    justifyContent='space-between'>
                    <ProfileImage
                        icon={
                            isDarkMode
                                ? '/assets/icons/utilities/user-icon-dark.png'
                                : '/assets/icons/utilities/user-icon.png'
                        }
                        width={40}
                    />
                    <Box sx={{ maxWidth: 200 }}>
                        <NetworkSelect
                            network={network}
                            setNetwork={setNetwork}
                            isDrawerOpen={isDrawerOpen}
                            toggleDrawer={toggleDrawer}
                            setDrawerHeight={setDrawerHeight}>
                            <Box
                                onClick={toggleDrawer(true)}
                                sx={{
                                    px: '14px',
                                    py: '9px',
                                    backgroundColor: 'background.grey',
                                    borderRadius: 24,
                                    color: 'text.primary',
                                }}>
                                <Stack
                                    spacing={1}
                                    direction={'row'}
                                    alignItems={'center'}>
                                    {networkObj ? (
                                        <>
                                            <Avatar
                                                sx={{ width: 20, height: 20 }}
                                                src={networkObj.icon}
                                            />
                                            <Typography>
                                                {networkObj.label}
                                            </Typography>
                                        </>
                                    ) : (
                                        <>
                                            <Typography variant={'body2'}>
                                                Select a network
                                            </Typography>
                                        </>
                                    )}
                                    <Iconify
                                        width={11}
                                        icon={'simple-line-icons:arrow-down'}
                                    />
                                </Stack>
                            </Box>
                        </NetworkSelect>
                    </Box>
                </Stack>
            </Box>
            <Balance balance={totalBalance} />
            <TokenList
                openDialog={openDialog}
                tokens={balances}
                tokensLoading={tokensLoading}
            />
            <SellTokens
                sellingToken={sellingToken}
                open={!!sellingToken}
                onClose={() => setSellingToken(null)}
            />
            <SendConfirm
                sendingToken={sendingToken}
                open={!!sendingToken}
                onClose={() => setSendingToken(null)}
            />
        </Box>
    )
}

export default Home
