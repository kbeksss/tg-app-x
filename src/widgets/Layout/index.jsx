import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Paper,
} from '@mui/material'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { Iconify } from '@shared/ui'
import { useCheckIphone } from '@shared/hooks/useCheckIphone.js'
import { TokenTradesIcon } from '@shared/icons'
import { paths } from '@pages/paths.js'
import { useTg } from '@shared/hooks/useTg.js'

const Layout = ({ children }) => {
    const { isDark } = useTg()
    const { isIphone } = useCheckIphone()
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(location.pathname || '/')
    return (
        <Box
            sx={{
                height: '100vh',
                backgroundColor: isDark ? '#181818' : '#fff',
            }}
            className='page'>
            <Box sx={{ pb: '60px' }}>{children}</Box>
            <Paper
                elevation={0}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    borderTop: '0.5px solid #707579',
                    backgroundColor: isDark ? 'background.grey': '#fff'
                    pt: 1,
                    right: 0,
                    px: 1,
                }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    sx={{
                        pb: isIphone ? 2 : 1,
                        height: 'unset',
                        backgroundColor: isDark ? 'background.grey': '#fff'
                    }}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                        navigate(newValue)
                    }}>
                    <BottomNavigationAction
                        disableRipple
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Home'}
                        value={'/'}
                        icon={<Iconify width={24} icon={'akar-icons:home'} />}
                    />
                    <BottomNavigationAction
                        disableRipple
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Search'}
                        value={paths.users}
                        icon={
                            <Iconify width={24} icon={'meteor-icons:search'} />
                        }
                    />
                    <BottomNavigationAction
                        disableRipple
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'News'}
                        value={'/news'}
                        icon={
                            <Iconify
                                width={24}
                                icon={
                                    'material-symbols-light:news-outline-rounded'
                                }
                            />
                        }
                    />
                    <BottomNavigationAction
                        disableRipple
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Trade'}
                        value={'/trades'}
                        icon={<TokenTradesIcon />}
                    />

                    <BottomNavigationAction
                        disableRipple
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Account'}
                        value={'/account'}
                        icon={<Iconify width={24} icon={'line-md:account'} />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default Layout
