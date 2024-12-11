import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

const tg = window.Telegram.WebApp
const themeParams = tg.themeParams
const isDarkMode = tg.colorScheme === 'dark'

const theme = createTheme({
    palette: {
        primary: {
            main: '#007AFF',
        },
        success: {
            main: '#31D158',
        },
        secondary: {
            main: '#F4F4F6',
        },
        text: {
            secondary: '#707579',
            dark: '#757575',
            light: '#FFF',
        },
        background: {
            grey: '#F4F4F6',
            white: '#FFF',
        },
        error: {
            main: '#E53935',
        },
    },
    typography: {
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
    },
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
    },
})

export const withMui = (component) => () => {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
}
