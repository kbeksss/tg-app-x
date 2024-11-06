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

const Layout = ({ children }) => {
    const { isIphone } = useCheckIphone()
    const location = useLocation()
    const navigate = useNavigate()
    const [value, setValue] = useState(location.pathname || '/')
    return (
        <Box sx={{ height: '100vh' }} className='page'>
            <Box sx={{ pb: 15 }}>{children}</Box>
            <Paper
                elevation={0}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    left: 0,
                    borderTop: '0.5px solid #707579',
                    pt: 1,
                    right: 0,
                    backgroundColor: 'transparent',
                }}>
                <BottomNavigation
                    showLabels
                    value={value}
                    sx={{
                        pb: isIphone ? 2 : 1,
                        height: 'unset',
                    }}
                    onChange={(event, newValue) => {
                        setValue(newValue)
                        navigate(newValue)
                    }}>
                    <BottomNavigationAction
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Home'}
                        value={'/'}
                        icon={<Iconify width={24} icon={'iconamoon:home'} />}
                    />
                    <BottomNavigationAction
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Search'}
                        value={'/search'}
                        icon={<Iconify width={24} icon={'ri:search-line'} />}
                    />
                    <BottomNavigationAction
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Trade'}
                        value={'/trade'}
                        icon={<Iconify width={24} icon={'bx:candles'} />}
                    />
                    <BottomNavigationAction
                        sx={{
                            fontSize: 12,
                            '.MuiBottomNavigationAction-label.Mui-selected': {
                                fontSize: 12,
                            },
                            '.MuiBottomNavigationAction-label': { mt: 1 },
                        }}
                        label={'Account'}
                        value={'/account'}
                        icon={
                            <Iconify
                                width={24}
                                icon={'ic:outline-account-circle'}
                            />
                        }
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default Layout
