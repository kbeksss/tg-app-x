import { ThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'

const themeSettings = {
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
                    color: 'gray',
                    fontWeight: 'bold',
                    textTransform: 'none',
                    borderRadius: '10px',
                    backgroundColor: '#F4F4F6',
                    '&.Mui-selected': {
                        color: 'white',
                        backgroundColor: '#007AFF',
                    },
                },
            },
        },
    },
}

const paletteSettings = {
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
    darkVersion: {
        green: '#BFFE6E',
        grey: '#222222',
        lightGrey: '#2A2A2A',
        black: '#000',
        lightBlack: '#181818',
        white: '#fff',
    },
}

const theme = createTheme({ ...themeSettings, palette: paletteSettings })

export const withMui = (component) => () => {
    return <ThemeProvider theme={theme}>{component()}</ThemeProvider>
}
