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
        text: {
            secondary: '#707579',
            dark: '#757575',
        },
    },
    typography: {
        h1: {
            fontSize: 46,
            fontWeight: 700,
        },
        h4: {
            fontSize: 24,
            fontWeight: 600,
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
                    fontSize: 16,
                    fontWeight: 600,
                    paddingTop: 36,
                    textAlign: 'center',
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
                    textAlign: 'center',
                    fontSize: 14,
                    color: '#000',
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
                    // boxShadow: 'none',
                    textTransform: 'initial',
                    height: 50,
                    fontSize: 17,
                    borderRadius: '10px',
                },
            },
        },
    },
})

export const withMui = (component) => () => {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
}
