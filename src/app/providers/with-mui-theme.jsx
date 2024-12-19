import { ThemeProvider, createTheme } from '@mui/material/styles'
import React, {
    createContext,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'

const typographySettings = {
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    h1: {
        fontSize: 46,
        fontWeight: 700,
    },
    h2: {
        fontSize: 32,
        fontWeight: 700,
    },
    h3: {
        fontSize: 30,
        fontWeight: 700,
    },
    h4: {
        fontSize: 24,
        fontWeight: 600,
    },
    h5: {
        fontSize: 20,
        fontWeight: 500,
    },
    h6: {
        fontSize: 17,
    },
}

const ThemeContext = createContext()

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeProviderContext = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light')
    const [isFullScreen, setIsFullScreen] = useState(false)
    const [contentSafeArea, setContentSafeArea] = useState({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    })
    const isDarkMode = useMemo(() => themeMode === 'dark', [themeMode])
    useEffect(() => {
        const tg = window.Telegram.WebApp
        const updateTheme = () => {
            const isDark = tg.colorScheme === 'dark'
            setThemeMode(isDark ? 'dark' : 'light')
            document.getElementById('root').style.background = isDark
                ? '#181818'
                : '#fff'
            tg.setHeaderColor(isDark ? '#181818' : '#fff')
        }

        const updateFullScreen = () => {
            setIsFullScreen(tg.isFullscreen)
        }
        const updateContentSafeArea = (event) => {
            console.log('event', event)
            console.log('tg', tg)
            setContentSafeArea(tg.contentSafeAreaInset)
        }

        updateTheme()
        tg.onEvent('themeChanged', updateTheme)
        tg.onEvent('fullscreenChanged', updateFullScreen)
        tg.onEvent('contentSafeAreaChanged', updateContentSafeArea)

        return () => {
            tg.offEvent('themeChanged', updateTheme)
            tg.offEvent('fullscreenChanged', updateFullScreen)
            tg.offEvent('contentSafeAreaChanged', updateContentSafeArea)
        }
    }, [])

    const toggleTheme = () => {
        document.getElementById('root').style.background =
            themeMode === 'light' ? '#181818' : '#fff'
        tg.setHeaderColor(themeMode === 'light' ? '#181818' : '#fff')
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode: themeMode,
                    primary: {
                        main: isDarkMode ? '#BFFE6E' : '#007AFF',
                    },
                    success: {
                        main: '#31D158',
                    },
                    secondary: {
                        main: isDarkMode ? '#2A2A2A' : '#F4F4F6',
                    },
                    text: {
                        primary: isDarkMode ? '#fff' : '#000',
                        secondary: '#707579',
                        dark: '#757575',
                        light: '#FFF',
                    },
                    background: {
                        grey: isDarkMode ? '#2A2A2A' : '#F4F4F6',
                        white: '#FFF',
                        dark: '#222222',
                        lightBlack: '#181818',
                        paper: isDarkMode ? '#181818' : '#fff',
                    },
                    error: {
                        main: '#E53935',
                    },
                },
                typography: typographySettings,
                components: {
                    MuiDialog: {
                        styleOverrides: {
                            paper: {
                                borderRadius: '16px',
                            },
                        },
                    },
                    MuiDialogTitle: {
                        styleOverrides: {
                            root: {
                                fontSize: 24,
                                fontWeight: 600,
                                padding: '18px 0 9px 16px',
                            },
                        },
                    },
                    MuiDialogContent: {
                        styleOverrides: {
                            root: {
                                padding: '16px',
                            },
                        },
                    },
                    MuiDialogContentText: {
                        styleOverrides: {
                            root: {
                                fontSize: 14,
                                color: '#707579',
                            },
                        },
                    },
                    MuiOutlinedInput: {
                        styleOverrides: {
                            root: {
                                '& .MuiOutlinedInput-notchedOutline': {
                                    borderRadius: '14px',
                                },
                            },
                        },
                    },
                    MuiButton: {
                        defaultProps: {
                            disableElevation: true,
                        },
                        styleOverrides: {
                            root: {
                                textTransform: 'initial',
                                borderRadius: '10px',
                            },
                            sizeMedium: {
                                height: 50,
                                fontSize: 17,
                            },
                            sizeSmall: {
                                fontSize: 14,
                                height: 36,
                            },
                        },
                    },
                    MuiBottomNavigationAction: {
                        styleOverrides: {
                            root: {
                                minWidth: 'unset',
                            },
                        },
                    },
                    MuiTextField: {
                        styleOverrides: {
                            root: {
                                '& .MuiInputBase-inputSizeSmall': {
                                    boxSizing: 'border-box',
                                    height: 42,
                                    // padding: '0 8px',
                                },
                            },
                        },
                    },
                    MuiTabs: {
                        styleOverrides: {
                            root: {
                                '& .MuiTabs-indicator': {
                                    display: 'none',
                                },
                            },
                        },
                    },
                    MuiTab: {
                        styleOverrides: {
                            root: {
                                minHeight: 33,
                                marginRight: '8px',
                                color: isDarkMode
                                    ? '#707579'
                                    : 'rgba(0,0,0,0.5)',
                                fontWeight: 'bold',
                                textTransform: 'none',
                                borderRadius: '10px',
                                backgroundColor: isDarkMode
                                    ? '#2A2A2A'
                                    : '#F4F4F6',
                                '&.Mui-selected': {
                                    color: isDarkMode ? 'black' : 'white',
                                    backgroundColor: isDarkMode
                                        ? '#FFF'
                                        : '#007AFF',
                                },
                            },
                        },
                    },
                },
            }),
        [themeMode]
    )

    return (
        <ThemeContext.Provider
            value={{
                themeMode,
                toggleTheme,
                isFullScreen,
                isDarkMode,
                contentSafeArea,
            }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    )
}
